import React from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  FlaskConical,
  Globe2,
  MessageSquare,
  Microscope,
  Network,
  Pencil,
  Sparkles,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const taskCards = [
  {
    icon: Microscope,
    title: "Describing observations",
    text: "Help students name, notice, label, and describe what they see.",
    accent: "text-emerald-600",
    task: "describing",
  },
  {
    icon: Network,
    title: "Explaining cause and effect",
    text: "Support students as they explain why something happens.",
    accent: "text-orange-500",
    task: "explaining",
  },
  {
    icon: BarChart3,
    title: "Comparing and contrasting",
    text: "Give students language for similarities, differences, and patterns.",
    accent: "text-violet-600",
    task: "comparing",
  },
  {
    icon: Pencil,
    title: "Writing lab reports",
    text: "Scaffold conclusions, evidence, and science writing moves.",
    accent: "text-sky-600",
    task: "writing",
  },
];

const levels = [
  {
    level: "WIDA 1",
    name: "Entering",
    items: ["Visuals and real objects", "Single words or labels", "L1 and translation support"],
    accent: "bg-emerald-500",
  },
  {
    level: "WIDA 2",
    name: "Emerging",
    items: ["Sentence frames", "Word banks", "Short phrase responses"],
    accent: "bg-amber-500",
  },
  {
    level: "WIDA 3",
    name: "Developing",
    items: ["Academic frames", "Transition words", "Structured elaboration"],
    accent: "bg-violet-500",
  },
  {
    level: "WIDA 4",
    name: "Expanding",
    items: ["Evidence-based responses", "Academic discussion", "Independent writing"],
    accent: "bg-blue-500",
  },
];

const quickPanels = [
  {
    icon: Zap,
    title: "Build a support",
    text: "Choose a science task and WIDA level to get sentence frames and planning supports.",
    button: "Open Quick Tools",
    href: "/quick-tools",
  },
  {
    icon: BookOpen,
    title: "Browse strategies",
    text: "Review writing, speaking, vocabulary, and assessment supports by need.",
    button: "View Strategies",
    href: "/strategies",
  },
  {
    icon: Globe2,
    title: "Use translation well",
    text: "Keep translation support helpful, fair, and practical in content classes.",
    button: "Translation Guide",
    href: "/translations",
  },
];

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-black/[0.07] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
            <FlaskConical className="h-4 w-4 text-emerald-600" />
            Science-facing planning tool
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Plan language support in under two minutes.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A clean reference tool for English Lab and content teachers to choose
            focused supports during planning meetings.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/quick-tools">
              <Button className="h-10 rounded-lg bg-slate-950 px-4 text-white hover:bg-slate-800">
                Start planning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/wida-levels">
              <Button variant="outline" className="h-10 rounded-lg border-black/[0.12] bg-white px-4">
                View WIDA levels
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-black/[0.07] bg-slate-950 p-6 text-white shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
            <Sparkles className="h-4 w-4 text-sky-300" />
            Meeting-ready workflow
          </div>
          <div className="mt-8 space-y-5">
            {[
              ["1", "Name the content task"],
              ["2", "Select the student language level"],
              ["3", "Copy one practical support"],
              ["4", "Use it in the lesson or assessment"],
            ].map(([num, label]) => (
              <div key={num} className="flex items-center gap-4">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-white text-sm font-semibold text-slate-950">
                  {num}
                </div>
                <div className="text-sm text-white/88">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-white/10 p-4 text-sm leading-6 text-white/78 ring-1 ring-white/10">
            Keep the planning conversation focused: task, language demand,
            support, check for understanding.
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              Start with the student task
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Pick the closest match and the tool will guide the support.
            </p>
          </div>
          <Clock className="hidden h-5 w-5 text-slate-400 sm:block" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {taskCards.map(({ icon: Icon, title, text, accent, task }) => (
            <Link key={task} href={`/quick-tools?task=${task}`}>
              <Card className="h-full rounded-lg border-black/[0.07] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <CardContent className="flex min-h-52 flex-col p-5">
                  <Icon className={`h-8 w-8 ${accent}`} strokeWidth={1.9} />
                  <h3 className="mt-5 text-base font-semibold leading-6 text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-slate-950">
                    Open tool
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-black/[0.07] bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <h2 className="text-lg font-semibold text-slate-950">
              WIDA support at a glance
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {levels.map((level) => (
              <Link
                key={level.level}
                href="/wida-levels"
                className="rounded-lg border border-black/[0.07] bg-slate-50 p-4 transition hover:bg-white hover:shadow-sm"
              >
                <div className={`mb-4 h-1.5 w-10 rounded-full ${level.accent}`} />
                <div className="text-sm font-semibold text-slate-950">
                  {level.level} · {level.name}
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-5 text-slate-600">
                  {level.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          {quickPanels.map(({ icon: Icon, title, text, button, href }) => (
            <Card key={title} className="rounded-lg border-black/[0.07] bg-white shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100">
                    <Icon className="h-4 w-4 text-slate-700" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <Link href={href}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 h-9 rounded-lg border-black/[0.12] bg-white text-sm"
                  >
                    {button}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </aside>
      </section>

      <footer className="border-t border-black/[0.07] py-6 text-sm leading-6 text-slate-500">
        <p>Contact: LenguajeLabs@proton.me</p>
        <p>Built using the WIDA framework to support multilingual learners, families, and educators.</p>
        <p>Version 1.0 · Updated May 2026</p>
      </footer>
    </div>
  );
}
