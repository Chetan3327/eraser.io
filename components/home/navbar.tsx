"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "../logo"

const useCases = [
  {
    title: "Diagrams",
    href: "/docs/diagrams",
    description: "Create diagrams at the speed of thought",
  },
  {
    title: "Architecture Diagrams",
    href: "/docs/architecture-diagrams",
    description: "Express data flow using diagram-as-code",
  },
  {
    title: "Data Flow Diagrams",
    href: "/docs/data-flow-diagrams",
    description: "Express data flow using diagram-as-code",
  },
  {
    title: "Design Docs",
    href: "/docs/design-docs",
    description: "Collaborate on technical design docs",
  },
  {
    title: "Documentation",
    href: "/docs/documentation",
    description: "Create highly consumable visual docs",
  },
  {
    title: "Brainstorming",
    href: "/docs/brainstorming",
    description: "Hold high-bandwidth visual conversations",
  },
  {
    title: "Wireframes",
    href: "/docs/wireframes",
    description: "Create beautiful lo-fi wireframes",
  },
]

const resources = [
  {
    title: "Eraser Examples",
    href: "/resources/examples",
    description: "Explore examples of Eraser.io in action",
  },
  {
    title: "Customers",
    href: "/resources/customers",
    description: "See how customers use Eraser.io",
  },
  {
    title: "Decision Node",
    href: "/resources/decision-node",
    description: "Learn about decision nodes in Eraser.io",
  },
  {
    title: "Docs",
    href: "/resources/docs",
    description: "Access Eraser.io documentation",
  },
]

const about = [
  {
    title: "Eraser AI",
    href: "/about/eraser-ai",
    description: "Learn about Eraser AI technology",
  },
  {
    title: "Team",
    href: "/about/team",
    description: "Meet the Eraser.io team",
  },
  {
    title: "Security",
    href: "/about/security",
    description: "Understand our security practices",
  },
  {
    title: "Slack Community",
    href: "/about/slack-community",
    description: "Join our Slack community",
  },
  {
    title: "Careers",
    href: "/about/careers",
    description: "Explore career opportunities at Eraser.io",
  },
]

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Eraser.io
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Transforming the way you create and collaborate on diagrams and documentation.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {useCases.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {resources.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {about.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              DiagramGPT
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
