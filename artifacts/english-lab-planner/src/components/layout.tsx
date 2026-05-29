import React from "react";
import { Link, useLocation } from "wouter";
import {
  BarChart3,
  BookOpen,
  ClipboardList,
  Globe2,
  Home,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/quick-tools", label: "Quick Tools", icon: Zap },
  { href: "/strategies", label: "Strategies", icon: BookOpen },
  { href: "/wida-levels", label: "WIDA Levels", icon: BarChart3 },
  { href: "/assessments", label: "Assessments", icon: ClipboardList },
  { href: "/translations", label: "Translations", icon: Globe2 },
];

function BrandMark() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-950 text-white shadow-sm">
      <Sparkles className="h-4 w-4" strokeWidth={2.4} />
    </div>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-black/[0.07] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <BrandMark />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight text-slate-950">
                English Lab Planner
              </div>
              <div className="truncate text-xs text-slate-500">
                Fast supports for content planning
              </div>
            </div>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const isActive = location === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-black/[0.04] hover:text-slate-950",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <nav className="flex gap-2 overflow-x-auto px-4 pb-3 sm:px-6 lg:hidden">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = location === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-950 text-white"
                    : "bg-white text-slate-600 ring-1 ring-black/[0.08]",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto min-h-[calc(100vh-64px)] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
