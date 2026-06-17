import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {Metadata} from 'next'
import IconLogo from '@/components/global/icon-logo'
import AdminLoginForm from '@/components/forms/AdminLoginForm'
export const metadata: Metadata = {
  title: ' Login',
}
export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="mb-8 flex flex-col items-center">
        <IconLogo/>
        <p className="text-2xl font-bold text-primary">Admin Portal</p>
      </div>

      <Card className="w-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdminLoginForm />
        </CardContent>
      </Card>

      <p className="mt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} CV Maker. All rights reserved.
      </p>
    </div>
  )
}
