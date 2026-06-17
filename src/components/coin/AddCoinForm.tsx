'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { coinSchema, CoinFormValues } from '@/schema/coin-schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CVRequest from '@/lib/CVRequest';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import LoadingButton from '@/components/ui/loading-button';
import { Coin } from '@/types/coin';
import axios from 'axios';

interface AddCoinFormProps {
  onSuccess?: () => void;
  initialData?: Coin | null;
}

const AddCoinForm = ({ onSuccess, initialData }: AddCoinFormProps) => {
  const queryClient = useQueryClient();
  const form = useForm<CoinFormValues>({
    resolver: zodResolver(coinSchema),
    defaultValues: {
      package_name: initialData?.package_name || '',
      platform: initialData?.platform || 'apple',
      coin_amount: initialData?.coin_amount || 0,
      price: initialData?.price || 0,
      currency: initialData?.currency || 'USD',
      platform_product_id: initialData?.platform_product_id || '',
      is_active: initialData?.is_active ?? true,
    },
  });

  const { isSubmitting } = form.formState;

  // Update form when initialData changes
  React.useEffect(() => {
    if (initialData) {
      form.reset({
        package_name: initialData.package_name,
        platform: initialData.platform,
        coin_amount: initialData.coin_amount,
        price: initialData.price,
        currency: initialData.currency,
        platform_product_id: initialData.platform_product_id,
        is_active: initialData.is_active,
      });
    } else {
      form.reset({
        package_name: '',
        platform: 'apple',
        coin_amount: 0,
        price: 0,
        currency: 'USD',
        platform_product_id: '',
        is_active: true,
      });
    }
  }, [initialData, form]);

  const onSubmit = async (data: CoinFormValues) => {
    console.log("Submitting Coin Package Data:", data);
    try {
      let response;
      if (initialData?.id) {
        response = await CVRequest.patch(`/coin-packages/${initialData.id}`, data);
        toast.success('Coin package updated successfully!');
      } else {
        response = await CVRequest.post('/coin-packages/create', data);
        toast.success('Coin package created successfully!');
      }
      
      console.log("API Response:", response.data);
      queryClient.invalidateQueries({ queryKey: ['coin-packages'] });
      if (onSuccess) onSuccess();
    } catch (error: unknown) {
      console.error('API Error:', error);
      let errorMessage = initialData?.id ? 'Failed to update coin package' : 'Failed to create coin package';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      }
      toast.error(errorMessage);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
        <FormField
          control={form.control}
          name="package_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Package Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Starter Pack" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="stripe">Stripe</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="platform_product_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform Product ID</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., com.coins.starter" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="coin_amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coin Amount</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="100" 
                    {...field} 
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    step="0.01" 
                    placeholder="0.99" 
                    {...field} 
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Currency</FormLabel>
                <FormControl>
                  <Input placeholder="USD" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="is_active"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-xs">
                <FormLabel className="mt-0">Active Status</FormLabel>
                <FormControl>
                  <button
                    type="button"
                    onClick={() => field.onChange(!field.value)}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                      field.value ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <span
                      className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                        field.value ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end gap-3 pt-6">
          <LoadingButton 
            loading={isSubmitting} 
            type="submit" 
            className="w-full text-md h-11"
          >
            {initialData ? 'Update Package' : 'Create Package'}
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default AddCoinForm;