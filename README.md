# ShadCN Dashboard

A modern admin dashboard built with Next.js 16, React 19, and shadcn/ui components.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **UI Library:** shadcn/ui (Radix UI primitives)
- **Styling:** Tailwind CSS 4, class-variance-authority
- **Charts:** Recharts
- **Tables:** TanStack React Table
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Theme:** next-themes (light/dark mode)
- **Package Manager:** pnpm

## Implemented Modules and Features

- Built a responsive dashboard layout with collapsible sidebar
- Implemented dark/light theme switching with system preference detection
- Created interactive data visualization widgets (Bar, Area, Pie, Line charts) using Recharts
- Developed a payments page with a full-featured DataTable: sorting, pagination, row selection, and row actions dropdown
- Built a user profile page with hover-card badges, progress indicators, and editable user info via Sheet panel
- Created a dynamic edit form with Zod schema validation and React Hook Form integration
- Implemented reusable CardList component rendering both transactions (with dates, amounts) and popular content (with
  view counts)
- Designed a breadcrumb-based navigation system linking dashboard, users list, and individual profiles
- Organized project architecture with shared types, centralized mock data, constants, and a reusable DashboardCard
  wrapper

## Project Structure

```
app/                    # Next.js App Router pages
  payments/             # Payments page with DataTable
  users/                # Users list & single user profile
components/             # Reusable components
  ui/                   # shadcn/ui primitives
constants/              # App-wide constants (current user)
data/                   # Mock data (payments, transactions, content)
types/                  # Shared TypeScript types
hooks/                  # Custom React hooks
lib/                    # Utility functions
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Build

```bash
pnpm build
pnpm start
```

## Deploy on Vercel

Push to GitHub and import the repository at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js — no
extra configuration needed.
