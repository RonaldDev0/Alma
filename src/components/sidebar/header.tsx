import { Command } from 'lucide-react'
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar'
import Link from 'next/link'

export default function Header() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size='lg' asChild>
            <Link href='/home'>
              <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                <Command className='size-4' />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>Alma</span>
                <span className='truncate text-xs text-muted-foreground'>Enterprise</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}