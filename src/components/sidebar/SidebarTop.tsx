'use client'

import * as React from 'react'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {Avatar, AvatarFallback, AvatarImage} from '../ui/avatar'

export function SidebarTop() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent  data-[state=open]:text-sidebar-accent-foreground flex gap-4"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
            <Avatar className="h-10 w-10 rounded-lg">
              <AvatarImage src={'/images/icon-primary.png'} alt={'CV'} />
              <AvatarFallback className="rounded-lg">CV</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight gap-0.5">
            <span className="truncate font-semibold relative ">
              CV Maker
            </span>
            <span className="text-md font-semibold text-muted-foreground">
              Admin Panel
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
