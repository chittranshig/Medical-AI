import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ReportAnalysis from "./Pages/ReportAnalysis";
import DiseasePrediction from "./Pages/DiseasePrediction";
import AIAssistant from "./Pages/AIAssistant";
import HealthHistory from "./Pages/HealthHistory";
// import Profile from "./Pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/report-analysis"
          element={<ProtectedRoute>

            <DashboardLayout>

              <ReportAnalysis />

            </DashboardLayout>

          </ProtectedRoute>}
        />

        <Route
          path="/disease-prediction"
          element={<ProtectedRoute>

            <DashboardLayout>
      
              <DiseasePrediction />
      
            </DashboardLayout>
      
          </ProtectedRoute>}
        />

        <Route
          path="/ai-assistant"
          element={<ProtectedRoute>

            <DashboardLayout>
      
              <AIAssistant />
      
            </DashboardLayout>
      
          </ProtectedRoute>}
        />

        <Route
          path="/health-history"
          element={
            <ProtectedRoute>

            <DashboardLayout>
      
              <HealthHistory />
      
            </DashboardLayout>
      
          </ProtectedRoute>}
        />

        {/* <Route
          path="/profile"
          element={<Profile />}
        />  */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;