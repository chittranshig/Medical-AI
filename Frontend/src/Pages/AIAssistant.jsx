import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  Bot,
  Send,
  User,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function AIAssistant() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I'm your Medical AI health assistant. You can tell me about your symptoms or ask general health-related questions.",
    },
  ]);

  const suggestedQuestions = [
    "What could be causing my headache?",
    "What are common symptoms of dehydration?",
    "How can I improve my sleep?",
    "When should I see a doctor?",
  ];

  const sendMessage = (text = message) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    // Temporary mock AI response.
    // Your teammate's AI API will replace this later.
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Based on what you've shared, there can be several possible explanations. I can provide general health information, but I cannot confirm a diagnosis. If your symptoms are severe, persistent, or worsening, please consult a qualified healthcare professional.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">

      {/* Main */}

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-6 sm:px-6">

        {/* Heading */}

        <div className="mb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-950">
                AI Health Assistant
              </h1>

              <p className="text-sm text-slate-500">
                Ask questions about your health
              </p>
            </div>

          </div>

        </div>


        {/* Chat container */}

        <div className="flex min-h-150 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Chat header */}

          <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">

            <div className="relative">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <Bot className="h-5 w-5 text-white" />
              </div>

              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />

            </div>

            <div>

              <p className="font-semibold text-slate-900">
                Medical AI Assistant
              </p>

              <p className="text-xs text-emerald-600">
                Online
              </p>

            </div>

          </div>


          {/* Messages */}

          <div className="flex-1 space-y-6 overflow-y-auto p-5 sm:p-7">

            {messages.map((msg) => (

              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {/* AI icon */}

                {msg.role === "assistant" && (

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600">
                    <Bot className="h-4 w-4 text-white" />
                  </div>

                )}


                {/* Message */}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    msg.role === "user"
                      ? "rounded-br-md bg-blue-600 text-white"
                      : "rounded-bl-md bg-slate-100 text-slate-700"
                  }`}
                >
                  {msg.content}
                </div>


                {/* User icon */}

                {msg.role === "user" && (

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200">
                    <User className="h-4 w-4 text-slate-600" />
                  </div>

                )}

              </div>

            ))}

          </div>


          {/* Suggested questions */}

          {messages.length === 1 && (

            <div className="border-t border-slate-100 px-5 py-4">

              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Try asking
              </p>

              <div className="flex flex-wrap gap-2">

                {suggestedQuestions.map((question) => (

                  <button
                    key={question}
                    onClick={() => sendMessage(question)}
                    className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {question}
                  </button>

                ))}

              </div>

            </div>

          )}


          {/* Input */}

          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-200 p-4"
          >

            <div className="flex items-end gap-3 rounded-xl border border-slate-300 bg-slate-50 p-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
                placeholder="Describe your symptoms or ask a health question..."
                className="max-h-32 min-h-10.5 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={!message.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>

            </div>

            <p className="mt-2 text-center text-[11px] text-slate-400">
              Press Enter to send • Shift + Enter for a new line
            </p>

          </form>

        </div>


        {/* Disclaimer */}

        <div className="mt-5 flex gap-3 rounded-xl border border-slate-200 bg-white p-4">

          <ShieldCheck className="h-5 w-5 shrink-0 text-slate-400" />

          <p className="text-xs leading-5 text-slate-500">
            <strong className="text-slate-700">
              Medical information only:
            </strong>{" "}
            The AI assistant provides general health information and
            does not replace professional medical diagnosis or
            treatment. For emergencies or serious symptoms, seek
            immediate professional medical care.
          </p>

        </div>

      </main>

    </div>
  );
}

export default AIAssistant;