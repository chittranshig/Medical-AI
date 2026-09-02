import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          <div className="max-w-sm">

            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                <Activity className="h-5 w-5 text-white" />
              </div>

              <span className="text-xl font-bold text-white">
                Medical AI
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-400">
              AI-assisted health insights designed to help you understand
              your health information more clearly.
            </p>

          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#features" className="hover:text-white">
                Features
              </a>

              <a href="#how-it-works" className="hover:text-white">
                How It Works
              </a>

              <a href="#about" className="hover:text-white">
                About
              </a>

              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Medical AI. For informational purposes only.
        </div>

      </div>

    </footer>
  );
}

export default Footer;