import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../services/api";

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me");
        setStatus("authenticated");
      } catch {
        setStatus("unauthenticated");
      }
    };

    checkAuth();
  }, []);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-slate-500">
          Checking authentication...
        </p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;