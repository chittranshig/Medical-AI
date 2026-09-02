import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  Brain,
  CalendarDays,
  ChevronRight,
  FileSearch,
  Filter,
  MessageCircle,
  Search,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

function HealthHistory() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Temporary mock data.
  // Later this will come from your backend/MongoDB.
  const history = [
    {
      id: 1,
      type: "Report Analysis",
      icon: FileSearch,
      title: "Chest X-Ray Analysis",
      description:
        "Medical report analysis completed successfully.",
      date: "15 Aug 2026",
      time: "10:42 AM",
      status: "Completed",
      category: "Reports",
    },
    {
      id: 2,
      type: "Disease Prediction",
      icon: Brain,
      title: "Symptom Assessment",
      description:
        "Prediction generated from submitted symptoms.",
      date: "14 Aug 2026",
      time: "06:20 PM",
      status: "Completed",
      category: "Predictions",
    },
    {
      id: 3,
      type: "AI Assistant",
      icon: MessageCircle,
      title: "Health Assistant Conversation",
      description:
        "Conversation with Medical AI Assistant.",
      date: "13 Aug 2026",
      time: "09:15 PM",
      status: "Completed",
      category: "Assistant",
    },
    {
      id: 4,
      type: "Report Analysis",
      icon: FileSearch,
      title: "Blood Test Analysis",
      description:
        "Blood test report uploaded for analysis.",
      date: "10 Aug 2026",
      time: "11:30 AM",
      status: "Completed",
      category: "Reports",
    },
  ];

  const filters = [
    "All",
    "Reports",
    "Predictions",
    "Assistant",
  ];

  const filteredHistory = history.filter((item) => {
    const matchesFilter =
      filter === "All" || item.category === filter;

    const searchText = search.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText) ||
      item.type.toLowerCase().includes(searchText);

    return matchesFilter && matchesSearch;
  });

  const getIconStyle = (category) => {
    if (category === "Reports") {
      return "bg-blue-50 text-blue-600";
    }

    if (category === "Predictions") {
      return "bg-purple-50 text-purple-600";
    }

    return "bg-emerald-50 text-emerald-600";
  };

  return (
    <div className="min-h-screen bg-slate-50">

     
      <main className="mx-auto max-w-6xl px-6 py-10">

        {/* Heading */}

        <div className="mb-8">

          <p className="mb-2 text-sm font-semibold text-blue-600">
            Health History
          </p>

          <h1 className="text-3xl font-bold text-slate-950">
            Your health activity
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Review your previous report analyses, predictions and
            conversations with Medical AI.
          </p>

        </div>


        {/* Search + Filters */}

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}

            <div className="relative w-full lg:max-w-md">

              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your health history..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Filter */}

            <div className="flex items-center gap-2 overflow-x-auto">

              <Filter className="h-4 w-4 shrink-0 text-slate-400" />

              {filters.map((item) => (

                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${
                    filter === item
                      ? "bg-blue-600 text-white"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

        </div>


        {/* Activity count */}

        <div className="mb-4 flex items-center justify-between">

          <p className="text-sm text-slate-500">
            {filteredHistory.length}{" "}
            {filteredHistory.length === 1
              ? "activity"
              : "activities"}
          </p>

        </div>


        {/* History */}

        {filteredHistory.length > 0 ? (

          <div className="space-y-3">

            {filteredHistory.map((item) => {

              const Icon = item.icon;

              return (

                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >

                  {/* Icon */}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${getIconStyle(
                      item.category
                    )}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>


                  {/* Details */}

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                      <h2 className="font-semibold text-slate-900">
                        {item.title}
                      </h2>

                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                        {item.type}
                      </span>

                    </div>

                    <p className="mt-1 truncate text-sm text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">

                      <CalendarDays className="h-3.5 w-3.5" />

                      {item.date} • {item.time}

                    </div>

                  </div>


                  {/* Status */}

                  <div className="hidden items-center gap-4 sm:flex">

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                      {item.status}
                    </span>

                    <ChevronRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" />

                  </div>

                </button>

              );

            })}

          </div>

        ) : (

          /* Empty state */

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <Search className="h-6 w-6 text-slate-400" />
            </div>

            <h2 className="mt-4 font-semibold text-slate-900">
              No activity found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filter.
            </p>

          </div>

        )}


        {/* Disclaimer */}

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">

          <p className="text-xs leading-5 text-slate-500">
            Your health history is intended to help you review your
            previous interactions with Medical AI. AI-generated
            information should not be treated as a medical diagnosis.
          </p>

        </div>

      </main>


      {/* Details Modal */}

      {selectedItem && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-6 py-8"
          onClick={() => setSelectedItem(null)}
        >

          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${getIconStyle(
                    selectedItem.category
                  )}`}
                >
                  <selectedItem.icon className="h-5 w-5" />
                </div>

                <div>

                  <p className="text-xs font-medium text-slate-400">
                    {selectedItem.type}
                  </p>

                  <h2 className="font-bold text-slate-900">
                    {selectedItem.title}
                  </h2>

                </div>

              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>

            </div>


            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-slate-50 p-4">

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Description
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {selectedItem.description}
                </p>

              </div>


              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-slate-200 p-4">

                  <p className="text-xs text-slate-400">
                    Date
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedItem.date}
                  </p>

                </div>

                <div className="rounded-xl border border-slate-200 p-4">

                  <p className="text-xs text-slate-400">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    {selectedItem.status}
                  </p>

                </div>

              </div>

            </div>


            <button
              onClick={() => setSelectedItem(null)}
              className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default HealthHistory;