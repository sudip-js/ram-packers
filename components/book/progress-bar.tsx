import { cn } from "@/lib/utils";

export default function ProgressBar({ step }: { step: number }) {
  const steps = ["Address", "Service", "Vehicle", "Summary"];
  return (
    <div className="mt-6 flex justify-center gap-2">
      {steps.map((label, i) => {
        const index = i + 1;
        const isActive = index <= step;
        return (
          <div key={label} className="flex flex-col items-center text-xs">
            <div
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full border text-white transition-colors",
                isActive
                  ? "bg-primary border-primary"
                  : "bg-gray-200 border-gray-300 text-gray-400"
              )}
            >
              {index}
            </div>
            <span
              className={cn(
                "mt-1 text-[11px]",
                isActive ? "text-primary" : "text-gray-400"
              )}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
