import CVRequest from '@/lib/CVRequest';
import { Coin } from '@/types/coin';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCoinPackages = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['coin-packages'],
    queryFn: async () => {
      console.log("Fetching all coin packages...");
      const response = await CVRequest.get('/coin-packages');
      console.log("Coin packages fetched successfully:", response.data);
      return response.data.data as Coin[];
    },
  });

  return {
    coinPackages: data || [],
    loading: isLoading,
    error: error as Error | null,
    refetch,
  };
};
