import {Button} from '../ui/button'
import {useTransition} from 'react'

import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from '@/components/ui/responsive-dailog'
import {useAuth} from '@/hooks/state-hooks/useAuth'
import {useRouter} from 'next/navigation'
import LoadingButton from '../ui/loading-button'
import CVRequest from '@/lib/CVRequest'
import { showErrorToast } from '@/lib/utils'

interface LogOutModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const LogOutModal = ({open, setOpen}: LogOutModalProps) => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const {logout} = useAuth()
  const logOut = async () => {
    startTransition(async () => {
      try {
        await CVRequest.post('/auth/logout')
        logout()
        router.push('/admin')
      } catch (error) {
        showErrorToast(error)
      }
    })
  }

  return (
    <ResponsiveModal open={open} onOpenChange={setOpen}>
      <ResponsiveModalContent isloading={isPending ? 'true' : undefined}>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>
            Are You Sure You Want to Log Out?
          </ResponsiveModalTitle>
          <ResponsiveModalDescription>
            You are about to log out of your account. Are you sure you want to
            leave?
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <ResponsiveModalFooter className="mt-5">
          <div className="flex w-full justify-between">
            <Button
              disabled={isPending}
              onClick={() => setOpen(false)}
              variant={'outline'}
            >
              Cancel
            </Button>

            <LoadingButton loading={isPending} onClick={logOut}>
              Log Out
            </LoadingButton>
          </div>
        </ResponsiveModalFooter>
      </ResponsiveModalContent>
    </ResponsiveModal>
  )
}
export default LogOutModal
