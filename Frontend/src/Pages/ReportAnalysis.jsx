import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  Upload,
  FileText,
  X,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function ReportAnalysis() {
  const [reportType, setReportType] = useState("X-Ray");
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
    }
  };

  const removeFile = () => {
    setFile(null);
    setResult(null);
  };

  const handleAnalyze = () => {
    if (!file) return;

    setIsAnalyzing(true);

    // Temporary mock response
    setTimeout(() => {
      setResult({
        status: "Analysis Complete",
        summary:
          "The uploaded report has been analyzed. The AI system identified findings that may require further clinical evaluation.",
        findings: [
          {
            title: "Primary Finding",
            description:
              "No obvious abnormality detected in the provided sample.",
            severity: "Low",
          },
          {
            title: "Additional Observation",
            description:
              "Further clinical correlation is recommended.",
            severity: "Moderate",
          },
        ],
        recommendation:
          "Please discuss these findings with a qualified healthcare professional.",
      });

      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50">

     
      {/* Main */}

      <main className="mx-auto max-w-5xl px-6 py-10">

        {/* Heading */}

        <div className="mb-8">

          <p className="mb-2 text-sm font-semibold text-blue-600">
            Medical Report Analysis
          </p>

          <h1 className="text-3xl font-bold text-slate-950">
            Understand your medical reports
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Upload a medical report and let Medical AI provide an
            easy-to-understand analysis of the information.
          </p>

        </div>


        {/* Upload Card */}

        {!result && (

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Report Type */}

            <div className="mb-7">

              <label className="mb-3 block text-sm font-semibold text-slate-800">
                Select report type
              </label>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                {[
                  "X-Ray",
                  "Blood Test",
                  "Ultrasound",
                  "Other",
                ].map((type) => (

                  <button
                    key={type}
                    type="button"
                    onClick={() => setReportType(type)}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                      reportType === type
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                    }`}
                  >
                    {type}
                  </button>

                ))}

              </div>

            </div>


            {/* Upload */}

            {!file ? (

              <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 px-6 py-14 text-center transition hover:border-blue-400 hover:bg-blue-50/30">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Upload className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  Upload your {reportType}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Drag and drop your file here or click to browse
                </p>

                <p className="mt-3 text-xs text-slate-400">
                  PDF, JPG, JPEG or PNG
                </p>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />

              </label>

            ) : (

              /* File Preview */

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="max-w-xs truncate text-sm font-semibold text-slate-800">
                        {file.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={removeFile}
                    className="rounded-lg p-2 text-slate-400 hover:bg-white hover:text-red-500"
                  >
                    <X className="h-5 w-5" />
                  </button>

                </div>

              </div>

            )}


            {/* Analyze */}

            <button
              onClick={handleAnalyze}
              disabled={!file || isAnalyzing}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >

              {isAnalyzing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Analyzing Report...
                </>
              ) : (
                "Analyze Report"
              )}

            </button>

          </div>

        )}


        {/* Result */}

        {result && (

          <div className="space-y-6">

            {/* Result Header */}

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-700">
                    {result.status}
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    AI-generated report summary
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {result.summary}
                  </p>
                </div>

              </div>

            </div>


            {/* Findings */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <h2 className="text-lg font-bold text-slate-900">
                Key Findings
              </h2>

              <div className="mt-5 space-y-4">

                {result.findings.map((finding, index) => (

                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 p-5"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="font-semibold text-slate-900">
                          {finding.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {finding.description}
                        </p>

                      </div>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {finding.severity}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Recommendation */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">

              <h2 className="font-bold text-blue-950">
                Recommended Next Step
              </h2>

              <p className="mt-2 text-sm leading-6 text-blue-800">
                {result.recommendation}
              </p>

            </div>


            {/* Analyze Another */}

            <button
              onClick={() => {
                setResult(null);
                setFile(null);
              }}
              className="w-full rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Analyze Another Report
            </button>

          </div>

        )}


        {/* Disclaimer */}

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">

          <p className="text-xs leading-5 text-slate-500">
            <strong className="text-slate-700">
              Important:
            </strong>{" "}
            Medical AI provides AI-assisted health information and is
            not a substitute for professional medical diagnosis or
            treatment. Always consult a qualified healthcare
            professional for medical concerns.
          </p>

        </div>

      </main>

    </div>
  );
}

export default ReportAnalysis;