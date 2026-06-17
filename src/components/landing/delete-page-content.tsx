'use client'
import IconLogo from '@/components/global/icon-logo'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation'
import {toast} from 'sonner'

interface DeletePageContentProps {
  token: string
}
const DeletePageContent = ({token}: DeletePageContentProps) => {
  const router = useRouter()
  async function handleDelete() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data?.message || 'Something went wrong')
      }
      const data = await res.json()
      if (data.success) {
        router.push('/')
        toast.success(data?.message || 'Account deleted successfully')
      } else {
        toast.error(data?.message || 'Something went wrong')
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error?.message : 'Something went wrong',
      )
    }
  }
  return (
    <div className="max-w-md w-full space-y-8 text-center flex flex-col items-center">
      <IconLogo />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Delete Account
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Are you sure you want to delete your account? This action cannot be
          undone. All your data will be permanently removed from our servers.
        </p>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            size="lg"
            className="w-full sm:w-auto h-12 px-8 transition-all text-md"
          >
            Delete Now
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 text-destructive-foreground hover:bg-red-600 w-full sm:w-auto"
            >
              Confirm Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default DeletePageContent
