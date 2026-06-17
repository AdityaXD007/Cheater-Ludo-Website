'use client'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import Cookies from 'js-cookie'
import { TOKEN_NAME } from '@/config/constant'

export interface UserDetails {
  id: number
  name: string
  email: string
  email_verified_at: Date | null
  address: string | null
  phone: string | null
  role: string
  created_at: string
  updated_at: string
}

interface AuthState {
  user?: UserDetails
  token?: string
  isLoggedIn: boolean
  login: (payload: {userDetails: UserDetails; token: string}) => void
  logout: () => void
}

const initialToken = Cookies.get(TOKEN_NAME)

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: undefined,
      token: initialToken || undefined,
      isLoggedIn: Boolean(initialToken),
      login: ({userDetails, token}) => {
        set(() => ({
          user: userDetails,
          token,
          isLoggedIn: true,
        }))
      },
      logout: () => {
        Cookies.remove(TOKEN_NAME)
        set(() => ({
          user: undefined,
          token: undefined,
          isLoggedIn: false,
        }))
      },
    }),
    {
      name: 'yeti-admin-user',
      partialize: (state) => ({user: state.user}),
    }
  )
)

// Custom hook to handle hydration
export const useAuth = () => {
  const store = useAuthStore()

  return store
}
