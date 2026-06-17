export interface Template {
  id: number;
  name: string;
  category: string;
  is_premium: number;
  coin_cost: string;
  image_url: string | null;
  image_upload: string | null;
  status: string;
  layout: string;
  created_at: string;
  updated_at: string;
  is_unlock: boolean;
}

export type TemplateCategory = 'Minimalist' | 'Professional' | 'Creative' | 'Modern' | 'Corporate';