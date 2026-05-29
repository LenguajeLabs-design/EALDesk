import React from "react";
import { Link } from "wouter";
import {
  Rocket, Zap, Lightbulb, CheckCircle2, Users, QrCode, MessageSquare, FileText,
  Globe2, BookOpen, ExternalLink, Clock, FlaskConical, Microscope, Network, BarChart3, Pencil,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const taskCards = [
  {
    icon: Microscope,
    title: "Describing\nObservations",
    text: "Students describe what they see, identify, or observe.",
    accent: "text-emerald-600",
    task: "describing",
  },
  {
    icon: Network,
    title: "Explaining\n(Cause & Effect)",
    text: "Students explain why something happens using evidence or reasoning.",
    accent: "text-orange-500",
    task: "explaining",
  },
  {
    icon: BarChart3,
    title: "Comparing\n& Contrasting",
    text: "Students compare similarities and differences between ideas.",
    accent: "text-violet-600",
    task: "comparing",
  },
  {
    icon: Pencil,
    title: "Writing Lab\nReports",
    text: "Students write reports, conclusions, or extended responses.",
    accent: "text-sky-600",
    task: "writing",
  },
];

const levels = [
  {
    level: "WIDA 1 – Entering",
    subtitle: "Beginning to learn English",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    items: ["Use visuals & real objects", "Accept single words / labels", "Allow L1 & translation", "Extra time & simplified assessments"],
    href: "/wida-levels",
  },
  {
    level: "WIDA 2 – Emerging",
    subtitle: "Using simple words & phrases",
    bg: "bg-amber-50",
    border: "border-amber-100",
    items: ["Use sentence frames", "Accept short phrases", "Repeat & model", "Word banks & visuals"],
    href: "/wida-levels",
  },
  {
    level: "WIDA 3 – Developing",
    subtitle: "Using sentences to communicate",
    bg: "bg-violet-50",
    border: "border-violet-100",
    items: ["Use academic sentence frames", "Encourage elaboration", "Support with transitioning words", "Provide structured writing support"],
    href: "/wida-levels",
  },
  {
    level: "WIDA 4 – Expanding",
    subtitle: "Using academic language",
    bg: "bg-blue-50",
    border: "border-blue-100",
    items: ["Use evidence-based responses", "Encourage complex sentences", "Promote academic discussion", "Support independent writing"],
    href: "/wida-levels",
  },
];

const quickPanels = [
  {
    icon: BookOpen,
    title: "NEED VOCABULARY?",
    text: "Get key vocabulary lists and visuals for science topics.",
    button: "Go to Vocabulary Bank",
    href: "/strategies",
    external: false,
  },
  {
    icon: Globe2,
    title: "TRANSLATION GUIDELINES",
    text: "Best practices for using translators and translations in class and assessments.",
    button: "View Guidelines",
    href: "/translations",
    external: false,
  },
  {
    icon: FileText,
    title: "FULL STRATEGY\nREFERENCE",
    text: "Browse the complete set of supports and examples in one place.",
    button: "Open Reference",
    href: "/strategies",
    external: false,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-8">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-start gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 leading-tight">
              Support Multilingual Learners<br />in Content Classes
            </h2>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-blue-800 font-bold text-xs mt-1">
              <FlaskConical className="h-3.5 w-3.5" /> Science Supports
            </span>
          </div>
          <p className="mt-4 text-base text-blue-950/80">Quick, practical strategies you can use in your lesson planning.</p>
          <div className="mt-5 border border-blue-200 bg-blue-50 rounded-xl p-4 flex gap-4 items-start max-w-2xl">
            <Clock className="h-7 w-7 text-blue-700 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">
              Use this site during your planning meetings to quickly find language supports based on your lesson's task and your students' WIDA levels.
            </p>
          </div>
        </div>
        <div className="absolute right-6 top-8 hidden xl:block opacity-90 pointer-events-none">
          <div className="relative h-44 w-44">
            <FlaskConical className="h-36 w-36 text-emerald-600 absolute right-0 top-5" strokeWidth={1.2} />
            <div className="absolute right-12 top-26 h-10 w-10 rounded-full bg-emerald-500/60" />
            <div className="absolute right-18 top-14 h-3.5 w-3.5 rounded-full bg-emerald-400" />
            <div className="absolute right-2 top-0 text-4xl">🌱</div>
          </div>
        </div>
      </section>

      <div className="grid xl:grid-cols-[1fr_260px] gap-8">
        <div>

          {/* Task Cards */}
          <section>
            <div className="flex items-center gap-2 text-blue-950 font-bold mb-4 text-sm">
              <Rocket className="h-4 w-4" />
              START HERE: Choose the task your students will be doing.
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {taskCards.map(({ icon: Icon, title, text, accent, task }) => (
                <Link key={task} href={`/quick-tools?task=${task}`}>
                  <Card className="rounded-xl shadow-sm border-slate-200 hover:shadow-md transition-shadow bg-white cursor-pointer h-full">
                    <CardContent className="p-5 flex flex-col items-center justify-between text-center gap-4 min-h-56">
                      <Icon className={`h-14 w-14 ${accent}`} strokeWidth={1.8} />
                      <h3 className="text-base font-extrabold text-blue-950 whitespace-pre-line leading-tight">{title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{text}</p>
                      <span className="font-semibold text-blue-700 text-sm">Open tool →</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Planning Flow + Remember */}
          <div className="grid xl:grid-cols-[1fr_220px] gap-5 mt-7">
            <Card className="rounded-xl border-amber-200 bg-amber-50/80 shadow-sm">
              <CardContent className="p-5">
                <div className="font-extrabold text-slate-900 flex items-center gap-2 text-sm mb-4">
                  <Zap className="h-5 w-5 text-amber-500 fill-amber-500" /> 2-MINUTE PLANNING FLOW
                </div>
                <div className="grid grid-cols-4 gap-3 text-center">
                  {[
                    { num: 1, title: "What is the task?", desc: "What will students be doing?" },
                    { num: 2, title: "What language is needed?", desc: "Word? Phrase? Sentence?" },
                    { num: 3, title: "Choose ONE support", desc: "Pick a strategy from the tool." },
                    { num: 4, title: "Teach & Check", desc: "Use it, model it, and check understanding." },
                  ].map((step, i) => (
                    <div key={step.num} className="relative">
                      <div className="text-3xl font-black text-slate-900">{step.num}</div>
                      <div className="font-bold text-xs mt-1 text-slate-800 leading-tight">{step.title}</div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                      {i < 3 && (
                        <div className="hidden xl:block absolute top-3 -right-2 text-slate-400 font-bold text-sm">→</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-emerald-200 bg-emerald-50 shadow-sm">
              <CardContent className="p-5">
                <div className="font-extrabold text-emerald-900 flex items-center gap-2 text-sm mb-3">
                  <Lightbulb className="h-4 w-4" /> REMEMBER
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {["Visuals first", "Language is scaffolded", "Model it", "Give wait time", "Check understanding"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* WIDA Level Grid */}
          <section className="mt-8">
            <div className="flex items-center gap-2 text-blue-950 font-bold mb-4 text-sm">
              <Users className="h-4 w-4" /> SUPPORT BY WIDA LEVEL <span className="font-normal">(At a glance)</span>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              {levels.map((l, i) => (
                <div key={l.level} className={`${l.bg} ${l.border} ${i < levels.length - 1 ? "border-r" : ""} p-5`}>
                  <h3 className="font-extrabold text-blue-950 text-xs leading-tight">{l.level}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 mb-4">{l.subtitle}</p>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {l.items.map(item => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <Link href={l.href} className="mt-5 block text-xs font-semibold text-blue-700 hover:underline">
                    See more strategies →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* QR Box */}
          <Card className="mt-8 rounded-xl bg-blue-50/70 border-blue-100 shadow-sm">
            <CardContent className="p-6 flex flex-wrap items-center gap-8">
              <div>
                <div className="font-extrabold text-blue-950 text-sm">NEED SOMETHING QUICK?</div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Use the quick tools to find<br />task-based language supports fast.</p>
              </div>
              <div className="h-20 w-20 bg-white rounded-md border border-slate-200 grid place-items-center flex-shrink-0">
                <QrCode className="h-16 w-16 text-slate-800" />
              </div>
              <div className="flex items-center gap-5 text-center text-xs text-slate-600 flex-wrap">
                <div>
                  <MessageSquare className="h-8 w-8 mx-auto text-sky-600" />
                  <p className="mt-1.5">Choose a task<br />&amp; WIDA level</p>
                </div>
                <span className="text-slate-400 font-bold">→</span>
                <div>
                  <FileText className="h-8 w-8 mx-auto text-blue-600" />
                  <p className="mt-1.5">Get sentence frames,<br />vocab &amp; supports</p>
                </div>
                <span className="text-slate-400 font-bold">→</span>
                <div>
                  <CheckCircle2 className="h-8 w-8 mx-auto text-emerald-600" />
                  <p className="mt-1.5">Use it in your<br />lesson!</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Quick Panel */}
        <aside className="space-y-4 mt-0">
          {quickPanels.map(({ icon: Icon, title, text, button, href, external }) => (
            <Card key={title} className="rounded-xl border-blue-200 bg-blue-50/60 shadow-sm">
              <CardContent className="p-5">
                <div className="font-extrabold text-blue-950 flex items-center gap-2 text-xs mb-3">
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-pre-line">{title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                <Link href={href}>
                  <Button variant="outline" size="sm" className="mt-4 border-blue-300 text-blue-800 bg-white hover:bg-blue-50 text-xs h-8">
                    {button}
                    {external && <ExternalLink className="h-3 w-3 ml-1.5" />}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </aside>
      </div>

      <footer className="mt-12 py-8 text-xs text-slate-400 border-t border-slate-200 space-y-1">
        <p>Contact: LenguajeLabs@proton.me</p>
        <p>Built around the WIDA framework to support multilingual learners and the teachers who serve them.</p>
        <p>Version 1.0 &nbsp;|&nbsp; Updated May 2026</p>
      </footer>
    </div>
  );
}
