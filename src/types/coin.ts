export interface Coin {
  package_name: string
  platform: string
  coin_amount: number
  price: number
  currency: string
  platform_product_id: string
  is_active: boolean
  updated_at: string
  created_at: string
  id: string
}

export interface CoinResponse {
  data: Coin[]
  message: string
  status: string
}