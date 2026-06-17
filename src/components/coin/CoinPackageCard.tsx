import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Coin } from '@/types/coin';
import { Button } from '../ui/button';
import { Edit, Trash2, Coins, Globe, ShieldCheck, ShieldAlert } from 'lucide-react';
import { Badge } from '../ui/badge';
import { cn, showErrorToast } from '@/lib/utils';
import { ResponsiveModal, ResponsiveModalContent, ResponsiveModalDescription, ResponsiveModalFooter, ResponsiveModalHeader, ResponsiveModalTitle } from '../ui/responsive-dailog';
import LoadingButton from '../ui/loading-button';
import CVRequest from '@/lib/CVRequest';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

interface CoinPackageCardProps {
  coinPackage: Coin;
  onEdit: (pkg: Coin) => void;
}

const CoinPackageCard = ({ coinPackage, onEdit }: CoinPackageCardProps) => {
  const queryClient = useQueryClient()
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const handleEdit = () => {
    onEdit(coinPackage);
  };

  const handleDelete = () => {
    setDeleteModalOpen(true)
    console.log("Deleting Coin Package ID:", coinPackage.id);
    console.log("Selected Package Data:", coinPackage);
  };

  const confirmDelete = async () => {
    setIsDeleting(true)
    try {
      await CVRequest.delete(`/coin-packages/${coinPackage.id}`)
      toast.success('Coin Package deleted successfully!')
      queryClient.invalidateQueries({ queryKey: ['coin-packages'] })
      setDeleteModalOpen(false)
    } catch (error) {
      showErrorToast(error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <Card className="py-0 group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md bg-card">
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                {coinPackage.package_name}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Globe className="w-3 h-3" />
                <span>{coinPackage.platform}</span>
                <span className="text-border mx-0.5">•</span>
                <span>ID: {coinPackage.platform_product_id}</span>
              </div>
            </div>
            <Badge 
              variant={coinPackage.is_active ? "default" : "secondary"}
              className={cn(
                "text-[10px] uppercase tracking-wider px-1.5 py-0",
                coinPackage.is_active ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-muted text-muted-foreground"
              )}
            >
              {coinPackage.is_active ? (
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5" /> Active
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-2.5 h-2.5" /> Inactive
                </span>
              )}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-4 pt-2">
          <div className="flex items-end justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-foreground">
                {coinPackage.price}
              </span>
              <span className="text-xs font-semibold text-muted-foreground uppercase">
                {coinPackage.currency}
              </span>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-600 px-2.5 py-1 rounded-full border border-yellow-500/20">
                <Coins className="w-4 h-4" />
                <span className="text-sm font-bold">{coinPackage.coin_amount}</span>
              </div>
              <span className="text-[10px] text-muted-foreground mt-1 font-medium">Coins Value</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-2 flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 h-8 text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-all gap-1.5"
            onClick={handleEdit}
          >
            <Edit className="w-3.5 h-3.5" />
            Edit
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            className="flex-1 h-8 text-xs font-semibold hover:bg-destructive/10 hover:text-destructive transition-all gap-1.5"
            onClick={handleDelete}
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete
          </Button>
        </CardFooter>
      </Card>
      <ResponsiveModal open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <ResponsiveModalContent>
          <ResponsiveModalHeader>
            <ResponsiveModalTitle>Delete Coin Package</ResponsiveModalTitle>
            <ResponsiveModalDescription>
              Are you sure you want to delete this coin package? This action cannot be
              undone.
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
    </>
  );
};

export default CoinPackageCard;