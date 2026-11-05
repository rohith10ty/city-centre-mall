import React from "react";
import { CheckCircle2, AlertCircle, Info, Sparkles } from "lucide-react";
import { useMall } from "../context/MallContext";

export const Toast = () => {
  const { toast } = useMall();

  if (!toast) return null;

  const isSuccess = toast.type === "success";
  const isError = toast.type === "error";

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div
        className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl border backdrop-blur-xl text-xs font-semibold ${
          isSuccess
            ? "bg-slate-900/95 border-emerald-500/40 text-emerald-300 shadow-emerald-500/10"
            : isError
            ? "bg-slate-900/95 border-rose-500/40 text-rose-300 shadow-rose-500/10"
            : "bg-slate-900/95 border-amber-500/40 text-amber-300 shadow-amber-500/10"
        }`}
      >
        {isSuccess ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        ) : isError ? (
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
        ) : (
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
        )}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
