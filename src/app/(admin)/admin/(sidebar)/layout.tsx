'use client'

import { useState } from 'react'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {Separator} from '@/components/ui/separator'
import AdminSidebar from '@/components/sidebar/AdminSidebar'
import SidebarContainer from '@/components/global/SidebarContainer'
import SidebarPageTransition from '@/components/global/SidebarPageTransition'
import NextTopLoader from 'nextjs-toploader'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AdminSidebarLayout = ({children}: {children: React.ReactNode}) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <NextTopLoader height={5} color="#ff9f1c" />

          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <SidebarPageTransition>
              <SidebarContainer>{children}</SidebarContainer>
            </SidebarPageTransition>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </QueryClientProvider>
  )
}
export default AdminSidebarLayout
