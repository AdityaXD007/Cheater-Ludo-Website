import Container from '@/components/global/container'
import DeletePageContent from '@/components/landing/delete-page-content'
import {redirect} from 'next/navigation'

interface PageProps {
  searchParams: Promise<{token: string}>
}

const Page = async ({searchParams}: PageProps) => {
  const {token} = await searchParams
  if (!token) {
    redirect('/')
  }

  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <DeletePageContent token={token} />
    </Container>
  )
}

export default Page
