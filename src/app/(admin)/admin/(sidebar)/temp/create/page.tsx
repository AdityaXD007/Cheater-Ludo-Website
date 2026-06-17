"use client";

import PageHeader from "@/components/global/PageHeader";
import LivePreview from "@/components/template/LivePreview";
import TemplateForm from "@/components/template/TemplateForm";
import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { templateSchema, TemplateFormValues } from "@/schema/template-schema";
import { Button } from "@/components/ui/button";
import CVRequest from "@/lib/CVRequest";
import { toast } from "sonner";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useGetSingleTemplate } from "@/hooks/api-hooks/useTemplate";
import { useQueryClient } from "@tanstack/react-query";

const CreateTemplatePageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const templateId = searchParams.get("id");
  const isEditMode = !!templateId;

  const { template, loading: isFetching } = useGetSingleTemplate(templateId);
  const methods = useForm<TemplateFormValues>({
    resolver: zodResolver(templateSchema),
    defaultValues: {
      name: "",
      category: "Modern",
      is_premium: false,
      coin_cost: "0",
      layout: "",
      image_upload: undefined,
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (template && isEditMode) {
      methods.reset({
        name: template.name,
        category: template.category as TemplateFormValues["category"],
        is_premium: template.is_premium ? true : false,
        coin_cost: template.coin_cost || "0",
        layout: template.layout,
        image_upload: template.image_upload,
      });
      console.log("tmeplate edit mode", template);
    }
  }, [template, isEditMode, methods]);

  const onSubmit = async (data: TemplateFormValues) => {
    const toastId = toast.loading(
      isEditMode ? "Updating template..." : "Creating template...",
    );

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("is_premium", data.is_premium ? "1" : "0");
      formData.append("coin_cost", data.coin_cost || "0");
      formData.append("layout", data.layout);

      if (data.image_upload instanceof File) {
        formData.append("image_upload", data.image_upload);
      }

      // Log Form Data for debugging
      console.log("Submitting Template Data:", data);
      const formDataObj: Record<string, unknown> = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      console.log("FormData Payload:", formDataObj);

      if (isEditMode) {
        formData.append("_method", "PUT");
        await CVRequest.post(`/templates/${templateId}`, formData);
        queryClient.invalidateQueries({ queryKey: ["template", templateId] });
        toast.success("Template updated successfully!", { id: toastId });
      } else {
        await CVRequest.post("/templates", formData);
        toast.success("Template created successfully!", { id: toastId });
        methods.reset();
      }

      queryClient.invalidateQueries({ queryKey: ["templates"] });
      router.push("/admin/templates");
    } catch (error: unknown) {
      console.error("API Error:", error);
      let errorMessage = `Failed to ${isEditMode ? "update" : "create"} template`;

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast.error(errorMessage, { id: toastId });
    }
  };

  if (isEditMode && isFetching) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <div className="h-[calc(100vh-130px)] flex flex-col relative overflow-hidden">
        <PageHeader
          title={isEditMode ? "Update Template" : "Add New Template"}
          description={
            isEditMode
              ? "Modify the existing CV template."
              : "Create a new CV template for users to choose from."
          }
        />
        <div className="flex-1 overflow-hidden h-full">
          <div className="h-full grid grid-cols-1 xl:grid-cols-2 gap-6 pt-4">
            <TemplateForm />
            <div className="max-h-[calc(100vh-275px)] flex bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden w-full">
              <LivePreview />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-1 z-50">
          <Button
            onClick={methods.handleSubmit(onSubmit)}
            className="px-8 h-12 text-lg font-semibold rounded-lg bg-primary text-white"
          >
            {isEditMode ? "Update Template" : "Create Template"}
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

const CreateTemplatePage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CreateTemplatePageContent />
    </React.Suspense>
  );
};

export default CreateTemplatePage;
