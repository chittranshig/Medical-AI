import {
    Activity,
    ArrowRight,
    BarChart3,
    Brain,
    CheckCircle2,
    FileSearch,
    MessageCircle,
    ShieldCheck,
    Upload,
    Sparkles,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  
  function Home() {
    const features = [
      {
        icon: FileSearch,
        title: "Medical Report Analysis",
        description:
          "Upload medical reports and get structured, AI-assisted insights from your health information.",
      },
      {
        icon: Brain,
        title: "AI Disease Prediction",
        description:
          "Describe your symptoms and receive AI-generated information about possible health conditions.",
      },
      {
        icon: MessageCircle,
        title: "AI Health Assistant",
        description:
          "Ask health-related questions and interact with an AI assistant designed for accessible health information.",
      },
      {
        icon: BarChart3,
        title: "Health History",
        description:
          "Keep track of your previous reports, predictions and interactions in one organized place.",
      },
    ];
  
    const steps = [
      {
        number: "01",
        icon: Upload,
        title: "Upload or Describe",
        description:
          "Upload a medical report or describe your symptoms and health concerns.",
      },
      {
        number: "02",
        icon: Brain,
        title: "AI Analyzes",
        description:
          "Medical AI processes the provided information using specialized AI models.",
      },
      {
        number: "03",
        icon: CheckCircle2,
        title: "Understand Your Results",
        description:
          "Receive organized health information to help you understand your results better.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-white text-slate-900">
  
        {/* ================= NAVBAR ================= */}
  
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
  
          <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
  
            {/* Logo */}
  
            <Link
              to="/"
              className="flex items-center gap-2"
            >
  
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <Activity className="h-5 w-5 text-white" />
              </div>
  
              <span className="text-xl font-bold tracking-tight">
                Medical <span className="text-blue-600">AI</span>
              </span>
  
            </Link>
  
  
            {/* Desktop Navigation */}
  
            <div className="hidden items-center gap-8 md:flex">
  
              <a
                href="#features"
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                Features
              </a>
  
              <a
                href="#how-it-works"
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                How It Works
              </a>
  
              <a
                href="#about"
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                About
              </a>
  
            </div>
  
  
            {/* Auth */}
  
            <div className="flex items-center gap-3">
  
              <Link
                to="/login"
                className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block"
              >
                Login
              </Link>
  
              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
  
            </div>
  
          </nav>
  
        </header>
  
  
        {/* ================= HERO ================= */}
  
        <section className="relative overflow-hidden bg-slate-50 pt-32">
  
          {/* Background decoration */}
  
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
  
          <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
  
  
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pb-28">
  
            {/* Hero content */}
  
            <div>
  
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
  
                <Sparkles className="h-4 w-4" />
  
                AI-assisted healthcare
  
              </div>
  
  
              <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
  
                Understand Your Health.
                
                <span className="block text-blue-600">
                  Detect Risks Earlier.
                </span>
  
              </h1>
  
  
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
  
                Upload medical reports or describe your symptoms and
                let Medical AI analyze the information to provide
                AI-generated health insights.
  
              </p>
  
  
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
  
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Analyze My Report
                  <ArrowRight className="h-5 w-5" />
                </Link>
  
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  Predict Disease
                </Link>
  
              </div>
  
  
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
  
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  AI-assisted insights
                </div>
  
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Easy to understand
                </div>
  
              </div>
  
            </div>
  
  
            {/* Hero visual */}
  
            <div className="relative">
  
              {/* Main dashboard card */}
  
              <div className="relative mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/40">
  
                {/* Top */}
  
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
  
                  <div className="flex items-center gap-3">
  
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                      <Brain className="h-5 w-5 text-blue-600" />
                    </div>
  
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Medical AI
                      </p>
  
                      <p className="text-xs text-slate-400">
                        Health Analysis
                      </p>
                    </div>
  
                  </div>
  
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    Analysis Ready
                  </span>
  
                </div>
  
  
                {/* Report */}
  
                <div className="mt-5 rounded-2xl bg-slate-50 p-5">
  
                  <div className="flex items-center gap-3">
  
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <FileSearch className="h-6 w-6 text-blue-600" />
                    </div>
  
                    <div>
                      <p className="font-semibold text-slate-900">
                        Medical Report
                      </p>
  
                      <p className="text-xs text-slate-500">
                        Analysis completed
                      </p>
                    </div>
  
                  </div>
  
  
                  <div className="mt-5 space-y-3">
  
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-slate-500">
                          Report clarity
                        </span>
  
                        <span className="font-semibold text-slate-700">
                          92%
                        </span>
                      </div>
  
                      <div className="h-2 rounded-full bg-slate-200">
                        <div className="h-2 w-[92%] rounded-full bg-blue-500" />
                      </div>
                    </div>
  
  
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-slate-500">
                          Analysis confidence
                        </span>
  
                        <span className="font-semibold text-slate-700">
                          87%
                        </span>
                      </div>
  
                      <div className="h-2 rounded-full bg-slate-200">
                        <div className="h-2 w-[87%] rounded-full bg-emerald-500" />
                      </div>
                    </div>
  
                  </div>
  
                </div>
  
  
                {/* Insight */}
  
                <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
  
                  <div className="flex gap-3">
  
                    <Sparkles className="h-5 w-5 shrink-0 text-blue-600" />
  
                    <div>
  
                      <p className="text-sm font-semibold text-blue-900">
                        AI-generated insight
                      </p>
  
                      <p className="mt-1 text-xs leading-5 text-blue-700">
                        Your results have been organized into
                        easy-to-understand health information.
  
                      </p>
  
                    </div>
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* ================= FEATURES ================= */}
  
        <section
          id="features"
          className="bg-white py-24"
        >
  
          <div className="mx-auto max-w-7xl px-6">
  
            <div className="mx-auto max-w-2xl text-center">
  
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Features
              </p>
  
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                One platform for smarter health insights
              </h2>
  
              <p className="mt-4 leading-7 text-slate-600">
                Medical AI brings multiple AI-assisted healthcare
                capabilities together in one simple platform.
              </p>
  
            </div>
  
  
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  
              {features.map((feature) => {
  
                const Icon = feature.icon;
  
                return (
  
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
                  >
  
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-600">
  
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
  
                    </div>
  
                    <h3 className="mt-6 font-bold text-slate-900">
                      {feature.title}
                    </h3>
  
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>
  
                  </div>
  
                );
  
              })}
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* ================= HOW IT WORKS ================= */}
  
        <section
          id="how-it-works"
          className="bg-slate-50 py-24"
        >
  
          <div className="mx-auto max-w-7xl px-6">
  
            <div className="mx-auto max-w-2xl text-center">
  
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                How It Works
              </p>
  
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From information to insight
              </h2>
  
            </div>
  
  
            <div className="mt-14 grid gap-8 md:grid-cols-3">
  
              {steps.map((step) => {
  
                const Icon = step.icon;
  
                return (
  
                  <div
                    key={step.number}
                    className="relative rounded-2xl border border-slate-200 bg-white p-7"
                  >
  
                    <div className="flex items-center justify-between">
  
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
  
                      <span className="text-4xl font-bold text-slate-100">
                        {step.number}
                      </span>
  
                    </div>
  
                    <h3 className="mt-7 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
  
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
  
                  </div>
  
                );
  
              })}
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* ================= ABOUT ================= */}
  
        <section
          id="about"
          className="bg-white py-24"
        >
  
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
  
            <div>
  
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                About Medical AI
              </p>
  
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Making complex health information easier to understand.
              </h2>
  
              <p className="mt-5 leading-7 text-slate-600">
                Medical AI is an AI-assisted healthcare platform
                designed to help users better understand their health
                information through medical report analysis, disease
                prediction and conversational AI.
              </p>
  
              <div className="mt-7 space-y-4">
  
                {[
                  "Simple and accessible health information",
                  "Multiple AI-assisted healthcare features",
                  "Organized health history",
                  "Designed with responsible AI use in mind",
                ].map((item) => (
  
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
  
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
  
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
  
                  </div>
  
                ))}
  
              </div>
  
            </div>
  
  
            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
  
              <ShieldCheck className="h-10 w-10 text-blue-400" />
  
              <h3 className="mt-6 text-2xl font-bold">
                Built with responsible healthcare AI in mind.
              </h3>
  
              <p className="mt-4 leading-7 text-slate-300">
                Medical AI is designed as a health information and
                decision-support tool. AI-generated results should
                always be interpreted alongside professional medical
                advice.
              </p>
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* ================= DISCLAIMER ================= */}
  
        <section className="bg-slate-50 py-10">
  
          <div className="mx-auto max-w-5xl px-6">
  
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
  
              <div className="flex gap-4">
  
                <ShieldCheck className="h-6 w-6 shrink-0 text-amber-600" />
  
                <div>
  
                  <h3 className="font-bold text-amber-900">
                    Important Medical Disclaimer
                  </h3>
  
                  <p className="mt-2 text-sm leading-6 text-amber-800">
                    Medical AI is an AI-assisted health information
                    platform and does not replace professional medical
                    diagnosis or treatment. The information generated
                    by the platform is intended for educational and
                    informational purposes only. Always consult a
                    qualified healthcare professional for medical
                    decisions.
  
                  </p>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* ================= CTA ================= */}
  
        <section className="bg-blue-600 py-20">
  
          <div className="mx-auto max-w-4xl px-6 text-center">
  
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Start understanding your health better.
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Explore AI-assisted health information through one
              simple platform.
            </p>
  
            <Link
              to="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
  
          </div>
  
        </section>
  
  
        {/* ================= FOOTER ================= */}
  
        <footer className="bg-slate-950 py-10">
  
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
  
            <div>
  
              <div className="flex items-center gap-2">
  
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <Activity className="h-4 w-4 text-white" />
                </div>
  
                <span className="font-bold text-white">
                  Medical <span className="text-blue-400">AI</span>
                </span>
  
              </div>
  
              <p className="mt-2 text-xs text-slate-500">
                AI-assisted health information platform.
              </p>
  
            </div>
  
  
            <p className="text-xs text-slate-500">
              © 2026 Medical AI. For informational purposes only.
            </p>
  
          </div>
  
        </footer>
  
      </div>
    );
  }
  
  export default Home;