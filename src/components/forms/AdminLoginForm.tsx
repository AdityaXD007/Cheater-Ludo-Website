'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import LoadingButton from '@/components/ui/loading-button'
import {PasswordInput} from '@/components/ui/input-password'
import {toast} from 'sonner'
import Cookies from 'js-cookie'
import {useRouter} from 'next/navigation'
import {useAuth} from '@/hooks/state-hooks/useAuth'
import {ADMIN_DEFAULT_REDIRECT_URL, TOKEN_NAME} from '@/config/constant'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {useTransition} from 'react'
import { showErrorToast } from '@/lib/utils'
import CVRequest from '@/lib/CVRequest'
import { AdminLoginSchema, AdminLoginSchemaType } from '@/lib/schema/AdminLoginSchema'
const AdminLoginForm = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const form = useForm<AdminLoginSchemaType>({
    resolver: zodResolver(AdminLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })
  const {login} = useAuth()

  async function onSubmit(values: AdminLoginSchemaType) {
    startTransition(async () => {
      try {
        const response = await CVRequest.post('auth/login', values)
        if (response.data.success) {
          Cookies.set(TOKEN_NAME, response.data.token)

          login({
            userDetails: response.data.user,
            token: response.data.token,
          })
          console.log("This is the response data:", response.data.data);
          router.push(ADMIN_DEFAULT_REDIRECT_URL)
          toast.success('Login successful')
        } else {
          toast.error(response.data.message)
          console.log("This is the response data:", response.data);
        }
      } catch (error) {
        showErrorToast(error)
        console.log("This is the error:", error);
      }
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="admin@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <LoadingButton loading={isPending} type="submit" className="w-full">
            Sign In
          </LoadingButton>
        </div>
      </form>
    </Form>
  )
}
export default AdminLoginForm
