import CVRequest from '@/lib/CVRequest';
import { Template } from '@/types/template';
import { useQuery } from '@tanstack/react-query';

export const useGetTemplates = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['templates'],
    queryFn: async () => {
      const response = await CVRequest.get('/templates');
      return response.data.data as Template[];
    },
  });

  return {
    templates: data || [],
    loading: isLoading,
    error: error as Error | null,
    refetch
  };
};

export const useGetSingleTemplate = (id: string | number | null) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['template', id],
    queryFn: async () => {
      if (!id) return null;
      const response = await CVRequest.get(`/templates/${id}`);
      return (response.data.data) as Template;
    },
    enabled: !!id,
  });

  return {
    template: data || null,
    loading: isLoading,
    error: error as Error | null,
    refetch
  };
};
