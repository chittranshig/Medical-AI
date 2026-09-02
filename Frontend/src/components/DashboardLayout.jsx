import {
    Activity,
    BarChart3,
    Brain,
    FileSearch,
    LayoutDashboard,
    LogOut,
    Menu,
    MessageCircle,
    X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function DashboardLayout({ children }) {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Report Analysis",
            path: "/report-analysis",
            icon: FileSearch,
        },
        {
            name: "Disease Prediction",
            path: "/disease-prediction",
            icon: Brain,
        },
        {
            name: "AI Assistant",
            path: "/ai-assistant",
            icon: MessageCircle,
        },
        {
            name: "Health History",
            path: "/health-history",
            icon: BarChart3,
        },
    ];

    const handleLogout = async () => {
        try {
            await api.post("/auth/logout");
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const navItems = (
        <>
            {navigation.map((item) => {
                const Icon = item.icon;

                return (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                ? "bg-blue-50 text-blue-700"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`
                        }
                    >
                        <Icon className="h-5 w-5" />
                        {item.name}
                    </NavLink>
                );
            })}
        </>
    );

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Desktop Sidebar */}

            <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:block">

                <div className="flex h-full flex-col">

                    {/* Logo */}

                    <div className="flex h-20 items-center border-b border-slate-100 px-6">

                        <NavLink
                            to="/dashboard"
                            className="flex items-center gap-2"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                                <Activity className="h-5 w-5 text-white" />
                            </div>

                            <span className="text-xl font-bold text-slate-900">
                                Medical <span className="text-blue-600">AI</span>
                            </span>

                        </NavLink>

                    </div>


                    {/* Navigation */}

                    <nav className="flex-1 space-y-1 px-4 py-6">
                        {navItems}
                    </nav>


                    {/* Bottom */}

                    <div className="border-t border-slate-100 p-4">

                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
                        >
                            <LogOut className="h-5 w-5" />
                            Logout
                        </button>

                    </div>

                </div>

            </aside>


            {/* Mobile Sidebar */}

            {mobileMenuOpen && (

                <div className="fixed inset-0 z-50 lg:hidden">

                    {/* Overlay */}

                    <div
                        className="absolute inset-0 bg-slate-950/40"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu */}

                    <aside className="relative flex h-full w-72 flex-col bg-white shadow-xl">

                        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">

                            <NavLink
                                to="/dashboard"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2"
                            >

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                                    <Activity className="h-5 w-5 text-white" />
                                </div>

                                <span className="text-xl font-bold text-slate-900">
                                    Medical <span className="text-blue-600">AI</span>
                                </span>

                            </NavLink>

                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                            >
                                <X className="h-5 w-5" />
                            </button>

                        </div>

                        <nav className="flex-1 space-y-1 px-4 py-6">
                            {navItems}
                        </nav>

                        <div className="border-t border-slate-100 p-4">

                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600"
                            >
                                <LogOut className="h-5 w-5" />
                                Logout
                            </button>

                        </div>

                    </aside>

                </div>

            )}


            {/* Main Area */}

            <div className="lg:pl-64">




                {/* Page */}

                <main>
                    {children}
                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;