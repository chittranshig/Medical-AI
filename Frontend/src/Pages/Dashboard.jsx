import {
    Activity,
    ArrowRight,
    Brain,
    FileSearch,
    MessageCircle,
    BarChart3,
    ShieldCheck,
    Clock3,
    LogOut,
  } from "lucide-react";
  import { Link, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import api from "../services/api";
  
  function Dashboard() {
    const navigate = useNavigate();
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getUser = async () => {
        try {
          const response = await api.get("/auth/me");
          setUser(response.data.user);
        } catch (error) {
          navigate("/login");
        } finally {
          setLoading(false);
        }
      };
  
      getUser();
    }, [navigate]);
  
    const handleLogout = async () => {
      try {
        await api.post("/auth/logout");
        navigate("/login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };
  
    if (loading) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          <p className="text-slate-500">
            Loading your dashboard...
          </p>
        </div>
      );
    }
  
    const features = [
      {
        icon: FileSearch,
        title: "Medical Report Analysis",
        description:
          "Upload a medical report and get AI-assisted explanations of important findings.",
        link: "/report-analysis",
        button: "Analyze Report",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        icon: Brain,
        title: "Disease Prediction",
        description:
          "Enter your symptoms and get possible conditions based on our prediction model.",
        link: "/disease-prediction",
        button: "Predict Disease",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
      },
      {
        icon: MessageCircle,
        title: "AI Health Assistant",
        description:
          "Ask questions and discuss your symptoms with the Medical AI assistant.",
        link: "/ai-assistant",
        button: "Start Conversation",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
      },
      {
        icon: BarChart3,
        title: "Health History",
        description:
          "View your previous reports, predictions and health-related interactions.",
        link: "/health-history",
        button: "View History",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-600",
      },
    ];
  
    return (
      <div className="min-h-screen bg-slate-50">
      
  
        {/* Main */}
        <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
  
          {/* Welcome */}
          <section className="mb-10">
  
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
  
              <div>
  
                <p className="mb-2 text-sm font-medium text-blue-600">
                  Your health dashboard
                </p>
  
                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Hello, {user?.name?.split(" ")[0]} 👋
                </h1>
  
                <p className="mt-3 max-w-2xl text-slate-600">
                  What would you like to understand about your health today?
                </p>
  
              </div>
  
              <Link
                to="/health-history"
                className="flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View health history
                <ArrowRight className="h-4 w-4" />
              </Link>
  
            </div>
  
          </section>
  
          {/* Quick Stats */}
          <section className="mb-10 grid gap-4 sm:grid-cols-3">
  
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
  
              <div className="flex items-center gap-3">
  
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <FileSearch className="h-5 w-5 text-blue-600" />
                </div>
  
                <div>
                  <p className="text-xs text-slate-500">
                    Reports analyzed
                  </p>
  
                  <p className="text-xl font-bold text-slate-900">
                    0
                  </p>
                </div>
  
              </div>
  
            </div>
  
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
  
              <div className="flex items-center gap-3">
  
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
  
                <div>
                  <p className="text-xs text-slate-500">
                    Predictions
                  </p>
  
                  <p className="text-xl font-bold text-slate-900">
                    0
                  </p>
                </div>
  
              </div>
  
            </div>
  
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
  
              <div className="flex items-center gap-3">
  
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <Clock3 className="h-5 w-5 text-emerald-600" />
                </div>
  
                <div>
                  <p className="text-xs text-slate-500">
                    Recent activity
                  </p>
  
                  <p className="text-xl font-bold text-slate-900">
                    0
                  </p>
                </div>
  
              </div>
  
            </div>
  
          </section>
  
          {/* Main Features */}
          <section>
  
            <div className="mb-5">
  
              <h2 className="text-xl font-bold text-slate-900">
                What would you like to do?
              </h2>
  
              <p className="mt-1 text-sm text-slate-500">
                Choose an AI-powered health tool.
              </p>
  
            </div>
  
            <div className="grid gap-5 md:grid-cols-2">
  
              {features.map((feature) => {
                const Icon = feature.icon;
  
                return (
                  <Link
                    key={feature.title}
                    to={feature.link}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                  >
  
                    <div className="flex items-start justify-between">
  
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
                      >
                        <Icon
                          className={`h-6 w-6 ${feature.iconColor}`}
                        />
                      </div>
  
                      <ArrowRight
                        className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                      />
  
                    </div>
  
                    <h3 className="mt-6 text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
  
                    <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>
  
                    <div className="mt-5 text-sm font-semibold text-blue-600">
                      {feature.button} →
                    </div>
  
                  </Link>
                );
              })}
  
            </div>
  
          </section>
  
          {/* Safety Information */}
          <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
  
            <div className="flex gap-4">
  
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
              </div>
  
              <div>
  
                <h3 className="font-semibold text-blue-950">
                  Use Medical AI as a health information tool
                </h3>
  
                <p className="mt-1 text-sm leading-6 text-blue-800">
                  Medical AI provides AI-assisted health information and
                  predictions based on the information you provide. It does
                  not replace professional medical diagnosis or treatment.
                  For medical concerns, consult a qualified healthcare
                  professional.
                </p>
  
              </div>
  
            </div>
  
          </section>
  
        </main>
  
      </div>
    );
  }
  
  export default Dashboard;