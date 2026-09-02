import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
            <Activity className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            Medi<span className="text-blue-600">cal</span> AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/home" className="text-sm text-slate-600 hover:text-blue-600">
            Home
          </a>

          <a href="/features" className="text-sm text-slate-600 hover:text-blue-600">
            Features
          </a>

          <a href="/how-it-works" className="text-sm text-slate-600 hover:text-blue-600">
            How It Works
          </a>

          <a href="/about" className="text-sm text-slate-600 hover:text-blue-600">
            About
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="#features" onClick={() => setIsOpen(false)}>
              Features
            </a>

            <a href="#how-it-works" onClick={() => setIsOpen(false)}>
              How It Works
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <Link
              to="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white"
            >
              Get Started
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;