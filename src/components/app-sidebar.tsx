"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconHelp,
  IconInnerShadowTop,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/src/components/nav-main"
import { NavUser } from "@/src/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar"
import Link from "next/link"
import checkAuthStatus from "../utility/auth"

const { user } = await checkAuthStatus();
const { role } = user;

const navMain = [
  {
    title: "Dashboard",
    url: "",
    icon: IconDashboard,
  },
]

if(role === "ADMIN"){
  navMain.push(
    {
      title: "Manage Admin",
      url: "manage-admin",
      icon: IconDatabase
    },
    {
      title: "Manage Doctors",
      url: "manage-doctor",
      icon: IconChartBar
    },
    {
      title: "Manage Patient",
      url: "manage-patient",
      icon: IconUsers
    }
  )
}

if(role === "DOCTOR"){
  navMain.push(
    {
      title: "View Patient",
      url: "view-pataient",
      icon: IconDatabase
    },
    {
      title: "Manage Sidule",
      url: "manage-sidule",
      icon: IconChartBar
    },
    {
      title: "View Earning",
      url: "view-earning",
      icon: IconHelp
    }
  )
}

if(role === "PATIENT"){
  navMain.push(
    {
      title: "View Doctors",
      url: "view-doctor",
      icon: IconDatabase
    },
    {
      title: "My Shedule",
      url: "my-shedule",
      icon: IconChartBar
    },
    {
      title: "My Profile",
      url: "my-profile",
      icon: IconHelp
    }
  )
}


const data = {
  user: {
    name: "Mosatafiz",
    email: user?.email,
    avatar: "/avatars/shadcn.jpg",
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href="/">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">Health Care</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        {/* <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
