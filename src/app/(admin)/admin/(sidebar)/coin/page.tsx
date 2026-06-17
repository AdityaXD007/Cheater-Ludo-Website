'use client'
import PageHeader from '@/components/global/PageHeader'
import { Input } from '@/components/ui/input'
import { Search, Loader2, PackageX, AlertCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import React, { useState, useMemo } from 'react'
import AddCoinForm from '@/components/coin/AddCoinForm'
import { Button } from '@/components/ui/button'
import CoinPackageCard from '@/components/coin/CoinPackageCard'
import { useGetAllCoinPackages } from '@/hooks/api-hooks/useCoin'
import { Coin } from '@/types/coin'

const CoinPackagesPage = () => {
  const [open, setOpen] = useState(false)
  const [editingPackage, setEditingPackage] = useState<Coin | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { coinPackages, loading, error, refetch } = useGetAllCoinPackages()

  const handleEdit = (pkg: Coin) => {
    setEditingPackage(pkg);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingPackage(null);
    setOpen(true);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setEditingPackage(null);
    }
  };

  const filteredPackages = useMemo(() => {
    if (!coinPackages) return [];
    return coinPackages.filter(pkg => 
      pkg.package_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.platform_product_id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [coinPackages, searchQuery]);

  return (
    <div className="flex flex-col gap-6 p-1">
      <div className='flex flex-row justify-between items-center gap-4'>
        <PageHeader 
          title="Coin Packages" 
          description="Manage coin packages that users can purchase to unlock templates"
        />
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <Button
            onClick={handleAdd}
            className="px-6 h-12 text-md font-bold rounded-xl bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
          >
            Add New Package
          </Button>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{editingPackage ? 'Edit Package' : 'Add New Package'}</DialogTitle>
              <DialogDescription>
                {editingPackage 
                  ? 'Update the details below to modify the coin package.' 
                  : 'Fill in the details below to create a new coin package.'}
              </DialogDescription>
            </DialogHeader>
            <AddCoinForm 
              initialData={editingPackage} 
              onSuccess={() => setOpen(false)} 
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 relative w-full group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            type="text"
            placeholder="Search coin packages by name, platform or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-lg h-auto"
          />
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <p className="text-muted-foreground font-medium animate-pulse">Loading amazing coin packages...</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4 bg-destructive/5 rounded-2xl border border-destructive/10">
          <div className="p-4 rounded-full bg-destructive/10">
            <AlertCircle className="w-12 h-12 text-destructive" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Failed to load packages</h3>
            <p className="text-muted-foreground mt-1 max-w-sm mx-auto">{error.message}</p>
          </div>
          <Button variant="outline" onClick={() => refetch()}>Try Again</Button>
        </div>
      )}
      
      {!loading && !error && filteredPackages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 text-center gap-4 border-2 border-dashed rounded-2xl border-muted-foreground/20">
          <div className="p-6 rounded-full bg-muted/50">
            <PackageX className="w-16 h-16 text-muted-foreground/50" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-muted-foreground">No coin packages found</h3>
            <p className="text-muted-foreground mt-1">
              {searchQuery ? `No results matching "${searchQuery}"` : "Get started by creating your first package!"}
            </p>
          </div>
          {searchQuery && (
            <Button variant="ghost" onClick={() => setSearchQuery('')} className="text-primary hover:bg-primary/5">
              Clear Search
            </Button>
          )}
        </div>
      )}

      {!loading && !error && filteredPackages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <CoinPackageCard 
              key={pkg.id} 
              coinPackage={pkg} 
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CoinPackagesPage