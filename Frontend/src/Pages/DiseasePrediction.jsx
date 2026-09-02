import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  Brain,
  Check,
  Loader2,
  RotateCcw,
  ShieldCheck,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

function DiseasePrediction() {
  const [symptoms, setSymptoms] = useState([]);
  const [currentSymptom, setCurrentSymptom] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [duration, setDuration] = useState("");
  const [isPredicting, setIsPredicting] = useState(false);
  const [result, setResult] = useState(null);

  const suggestedSymptoms = [
    "Fever",
    "Cough",
    "Headache",
    "Fatigue",
    "Nausea",
    "Chest Pain",
    "Shortness of Breath",
    "Sore Throat",
  ];

  const addSymptom = (symptom) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const removeSymptom = (symptom) => {
    setSymptoms(symptoms.filter((item) => item !== symptom));
  };

  const handleAddCustomSymptom = (e) => {
    e.preventDefault();

    const trimmed = currentSymptom.trim();

    if (trimmed && !symptoms.includes(trimmed)) {
      setSymptoms([...symptoms, trimmed]);
      setCurrentSymptom("");
    }
  };

  const handlePredict = () => {
    if (symptoms.length === 0) return;

    setIsPredicting(true);
    setResult(null);

    // Temporary mock response.
    // This will later be replaced by your teammate's API.
    setTimeout(() => {
      setResult({
        primary: {
          name: "Seasonal Viral Infection",
          confidence: 78,
        },
        alternatives: [
          {
            name: "Common Cold",
            confidence: 61,
          },
          {
            name: "Influenza",
            confidence: 48,
          },
        ],
        explanation:
          "The symptoms entered may be associated with a seasonal viral infection. A clinical evaluation is recommended before drawing any conclusions.",
        recommendations: [
          "Stay hydrated and get adequate rest.",
          "Monitor your symptoms and temperature.",
          "Seek medical attention if symptoms become severe or persistent.",
        ],
      });

      setIsPredicting(false);
    }, 2500);
  };

  const resetPrediction = () => {
    setSymptoms([]);
    setCurrentSymptom("");
    setAge("");
    setGender("");
    setDuration("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">

    
      <main className="mx-auto max-w-5xl px-6 py-10">

        {/* Heading */}

        <div className="mb-8">

          <p className="mb-2 text-sm font-semibold text-blue-600">
            AI Disease Prediction
          </p>

          <h1 className="text-3xl font-bold text-slate-950">
            Understand your symptoms
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Enter your symptoms and relevant information to receive
            an AI-generated list of possible conditions.
          </p>

        </div>


        {!result && (

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Symptoms */}

            <section>

              <div className="mb-4">

                <h2 className="text-lg font-bold text-slate-900">
                  What symptoms are you experiencing?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select the symptoms that best describe how you feel.
                </p>

              </div>


              {/* Selected symptoms */}

              {symptoms.length > 0 && (

                <div className="mb-5 flex flex-wrap gap-2">

                  {symptoms.map((symptom) => (

                    <span
                      key={symptom}
                      className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                    >

                      {symptom}

                      <button
                        type="button"
                        onClick={() => removeSymptom(symptom)}
                        className="rounded-full hover:text-blue-950"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>

                    </span>

                  ))}

                </div>

              )}


              {/* Suggested symptoms */}

              <div className="flex flex-wrap gap-2">

                {suggestedSymptoms.map((symptom) => {

                  const selected = symptoms.includes(symptom);

                  return (

                    <button
                      key={symptom}
                      type="button"
                      disabled={selected}
                      onClick={() => addSymptom(symptom)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        selected
                          ? "cursor-not-allowed border-blue-200 bg-blue-50 text-blue-400"
                          : "border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                      }`}
                    >
                      {selected ? "✓ " : "+ "}
                      {symptom}
                    </button>

                  );

                })}

              </div>


              {/* Custom symptom */}

              <form
                onSubmit={handleAddCustomSymptom}
                className="mt-5 flex gap-3"
              >

                <input
                  type="text"
                  value={currentSymptom}
                  onChange={(e) =>
                    setCurrentSymptom(e.target.value)
                  }
                  placeholder="Add another symptom..."
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="submit"
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Add
                </button>

              </form>

            </section>


            <div className="my-8 border-t border-slate-100" />


            {/* Basic information */}

            <section>

              <div className="mb-4">

                <h2 className="text-lg font-bold text-slate-900">
                  Basic information
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  This information may help provide more relevant
                  predictions.
                </p>

              </div>


              <div className="grid gap-5 sm:grid-cols-3">

                {/* Age */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Age
                  </label>

                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 25"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                </div>


                {/* Gender */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Gender
                  </label>

                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">
                      Select
                    </option>
                    <option value="female">
                      Female
                    </option>
                    <option value="male">
                      Male
                    </option>
                    <option value="other">
                      Other
                    </option>
                    <option value="prefer-not">
                      Prefer not to say
                    </option>
                  </select>

                </div>


                {/* Duration */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Duration
                  </label>

                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">
                      Select
                    </option>
                    <option value="less-than-day">
                      Less than a day
                    </option>
                    <option value="1-3-days">
                      1–3 days
                    </option>
                    <option value="4-7-days">
                      4–7 days
                    </option>
                    <option value="more-than-week">
                      More than a week
                    </option>
                  </select>

                </div>

              </div>

            </section>


            {/* Predict */}

            <button
              onClick={handlePredict}
              disabled={symptoms.length === 0 || isPredicting}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >

              {isPredicting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Analyzing Symptoms...
                </>
              ) : (
                <>
                  <Brain className="h-5 w-5" />
                  Predict Possible Conditions
                </>
              )}

            </button>

          </div>

        )}


        {/* Results */}

        {result && (

          <div className="space-y-6">

            {/* Main prediction */}

            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>

                <div className="flex-1">

                  <p className="text-sm font-semibold text-blue-600">
                    Most likely model prediction
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    {result.primary.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {result.explanation}
                  </p>

                </div>

              </div>


              {/* Confidence */}

              <div className="mt-6">

                <div className="mb-2 flex justify-between text-sm">

                  <span className="font-medium text-slate-700">
                    Model confidence
                  </span>

                  <span className="font-bold text-blue-600">
                    {result.primary.confidence}%
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{
                      width: `${result.primary.confidence}%`,
                    }}
                  />

                </div>

              </div>

            </div>


            {/* Alternative predictions */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <h2 className="text-lg font-bold text-slate-900">
                Other possible conditions
              </h2>

              <div className="mt-5 space-y-4">

                {result.alternatives.map((item) => (

                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
                  >

                    <span className="font-medium text-slate-800">
                      {item.name}
                    </span>

                    <span className="text-sm font-semibold text-slate-500">
                      {item.confidence}%
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* Recommendations */}

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

              <h2 className="font-bold text-emerald-950">
                Suggested next steps
              </h2>

              <ul className="mt-4 space-y-3">

                {result.recommendations.map((item) => (

                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-emerald-800"
                  >

                    <Check className="mt-1 h-4 w-4 shrink-0" />

                    {item}

                  </li>

                ))}

              </ul>

            </div>


            {/* New prediction */}

            <button
              onClick={resetPrediction}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
              Start New Prediction
            </button>

          </div>

        )}


        {/* Disclaimer */}

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">

          <div className="flex gap-3">

            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />

            <p className="text-xs leading-5 text-slate-500">
              <strong className="text-slate-700">
                Important:
              </strong>{" "}
              This feature provides AI-assisted health information
              and possible conditions based on the information
              provided. A prediction is not a medical diagnosis and
              should not be used as a substitute for professional
              medical advice.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default DiseasePrediction;