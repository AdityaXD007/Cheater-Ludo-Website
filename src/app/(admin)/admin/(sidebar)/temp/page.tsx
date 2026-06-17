"use client";

import PageHeader from "@/components/global/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTemplates } from "@/hooks/api-hooks/useTemplate";
import {
  ArrowUpDown,
  Search,
  Edit,
  Trash2,
  LayoutDashboard,
  ImageDown,
} from "lucide-react";
import React, { useState } from "react";
import { cn, formatDate, showErrorToast } from "@/lib/utils";
import { CATEGORIES } from "@/config/constant";
import { useRouter } from "next/navigation";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from "@/components/ui/responsive-dailog";
import LoadingButton from "@/components/ui/loading-button";
import CVRequest from "@/lib/CVRequest";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

const TemplatesPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { templates, loading, error } = useGetTemplates();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<number | null>(
    null,
  );

  const filteredTemplates = React.useMemo(() => {
    if (!templates) return [];

    return templates
      .filter((template) => {
        const cat = template.category as unknown as string | { name: string };
        const catName = typeof cat === "object" ? cat.name : cat;
        const matchesSearch = template.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          categoryFilter === "all" ||
          (catName && catName.toLowerCase() === categoryFilter.toLowerCase());
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
      });
  }, [templates, searchQuery, categoryFilter, sortOrder]);

  const handleEdit = (id: number) => {
    router.push(`/admin/templates/create?id=${id}`);
  };

  const handleDelete = (id: number) => {
    setSelectedTemplateId(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      await CVRequest.delete(`/templates/${selectedTemplateId}`);
      toast.success("Template deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["templates"] });
      setDeleteModalOpen(false);
      setSelectedTemplateId(null);
    } catch (error) {
      showErrorToast(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="container flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <PageHeader
          title="Template Management"
          description="View, edit, and manage all your CV templates."
        />
        <Button
          onClick={() => router.push("/admin/temp/create")}
          className="px-4 py-6 text-md font-semibold rounded-lg bg-primary text-white"
        >
          Add New Template
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-lg h-auto"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-64 h-15 text-lg">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-muted-foreground animate-pulse">
            Loading templates...
          </p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center py-20 text-center gap-4 border rounded-lg bg-destructive/5">
          <div className="p-4 rounded-full bg-destructive/10">
            <Search className="w-12 h-12 text-destructive" />
          </div>
          <h3 className="text-xl font-semibold">Error loading templates</h3>
          <p className="text-muted-foreground">
            {error.message || "Something went wrong while fetching templates."}
          </p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      )}

      {!loading && !error && filteredTemplates.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4 border-2 border-dashed rounded-xl">
          <div className="p-6 rounded-full bg-muted">
            <LayoutDashboard className="w-16 h-16 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">No templates found</h3>
            <p className="text-muted-foreground mt-1">
              Try adjusting your search or category filter.
            </p>
          </div>
          {(searchQuery || categoryFilter !== "all") && (
            <Button
              onClick={() => {
                router.push("/admin/temp/create");
              }}
              className="shadow-xl px-8 h-12 text-lg font-semibold rounded-lg bg-primary text-white"
            >
              Add New Template
            </Button>
          )}
        </div>
      )}

      {!loading && !error && filteredTemplates.length > 0 && (
        <div className="rounded-xl border shadow-sm overflow-hidden bg-card">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-24">Template Preview</TableHead>
                <TableHead className="text-center">Template Name</TableHead>
                <TableHead className="text-center">Category</TableHead>
                <TableHead className="text-center">Type</TableHead>
                <TableHead className="text-center">Coin</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-transparent p-0 font-semibold mx-auto"
                    onClick={() =>
                      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                    }
                  >
                    Created
                    <ArrowUpDown
                      className={cn(
                        "w-4 h-4 ml-1 transition-transform",
                        sortOrder === "asc" ? "rotate-180" : "",
                      )}
                    />
                  </Button>
                </TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTemplates.map((template) => (
                <TableRow
                  key={template.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <TableCell>
                    <div className="relative items-center justify-center mx-auto w-12 h-16 bg-muted rounded overflow-hidden border">
                      {template.image_url ? (
                        <Image
                          src={template.image_url}
                          alt={template.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-20">
                          <ImageDown className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {template.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 bg-muted rounded-lg p-2 w-fit mx-auto">
                      <p>{template.category}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {template.is_premium ? (
                      <div className="bg-amber-500 text-white px-2 py-1 rounded-lg w-fit mx-auto">
                        <p>Premium</p>
                      </div>
                    ) : (
                      <div className="bg-emerald-500 text-white px-2 py-1 rounded-lg w-fit mx-auto">
                        <p>Free</p>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 justify-center">
                      <span className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bold text-yellow-900 border border-yellow-500">
                        C
                      </span>
                      {template.coin_cost}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm text-center">
                    {formatDate(template.created_at)}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 hover:text-blue-600 hover:bg-blue-50"
                        onClick={() => handleEdit(template.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleDelete(template.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      <ResponsiveModal open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <ResponsiveModalContent>
          <ResponsiveModalHeader>
            <ResponsiveModalTitle>Delete Template</ResponsiveModalTitle>
            <ResponsiveModalDescription>
              Are you sure you want to delete this template? This action cannot
              be undone.
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
          <ResponsiveModalFooter>
            <Button
              className="mt-5"
              variant="outline"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <LoadingButton
              loading={isDeleting}
              showIconOnly
              className="mt-5"
              variant="destructive"
              onClick={confirmDelete}
            >
              Delete
            </LoadingButton>
          </ResponsiveModalFooter>
        </ResponsiveModalContent>
      </ResponsiveModal>
    </div>
  );
};

export default TemplatesPage;
