import React from "react";
import { Link, useLocation } from "wouter";
import {
  Home, Zap, BookOpen, BarChart3, ClipboardList, Globe2, Users, Folder, Edit3, Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/quick-tools", label: "Quick Tools", icon: Zap },
  { href: "/strategies", label: "Strategies by Skill", icon: BookOpen },
  { href: "/wida-levels", label: "WIDA Levels", icon: BarChart3 },
  { href: "/assessments", label: "Assessments", icon: ClipboardList },
  { href: "/translations", label: "Translations & Tools", icon: Globe2 },
];

export function TopBar() {
  return (
    <header className="h-14 bg-gradient-to-r from-blue-700 to-sky-500 text-white flex items-center px-6 gap-6 shadow-sm flex-shrink-0">
      <div className="text-xl font-bold tracking-tight select-none">▦</div>
      <div className="font-semibold text-base">SharePoint</div>
      <div className="mx-auto max-w-xl flex-1 hidden md:block">
        <div className="bg-white rounded-md text-slate-500 px-4 py-1.5 flex items-center gap-2">
          <Search className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">Search this site</span>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-5 text-lg">
        <span className="cursor-pointer">⚙</span>
        <span className="cursor-pointer">?</span>
        <div className="h-8 w-8 rounded-full bg-white/90 text-blue-900 grid place-items-center text-sm font-bold">F</div>
      </div>
    </header>
  );
}

export function SiteHeader() {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-5">
        <div className="h-14 w-14 rounded-md bg-blue-950 text-white flex items-center justify-center text-2xl font-bold shadow-sm lg:hidden">EL</div>
        <div>
          <h1 className="text-2xl font-bold text-blue-950">English Lab</h1>
          <p className="text-slate-500 text-sm mt-0.5">Empowering Multilingual Learners</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-5 text-blue-800 text-sm font-medium">
        <span className="cursor-pointer hover:text-blue-950">★ Following</span>
        <span className="cursor-pointer hover:text-blue-950">↗ Share</span>
      </div>
    </div>
  );
}

export function SideBar() {
  const [location] = useLocation();
  return (
    <aside className="w-56 border-r border-slate-200 bg-white/90 hidden lg:flex flex-col flex-shrink-0">
      <div className="p-6">
        <div className="h-14 w-14 rounded-md bg-blue-950 text-white flex items-center justify-center text-2xl font-bold shadow-sm">EL</div>
      </div>
      <nav className="px-3 space-y-0.5 flex-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = location === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-950 border-l-4 border-blue-600 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 border-l-4 border-transparent"
              )}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <TopBar />
      <SiteHeader />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <main className="flex-1 overflow-y-auto px-5 md:px-10 xl:px-14 py-2 pb-16">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
