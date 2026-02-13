import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function OrderStepper({ step = 1 }) {
  const steps = [
    { id: 1, label: "Order placed" },
    { id: 2, label: "Shipping" },
    { id: 3, label: "Completed" },
  ];

  return (
    <div className="mt-8">
      <div className="relative flex items-center justify-between">
        {/* line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2  bg-gray-300" />

        {steps.map((s) => {
          const done = step >= s.id;

          return (
            <div key={s.id} className="relative flex flex-col items-center flex-1">
              {/* circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  done ? "bg-pink-600 text-white" : "bg-gray-300 text-white"
                }`}
              >
                <FaCheck size={14} />
              </div>

              {/* label */}
              <span className={`mt-3 text-sm ${done ? "text-pink-600" : "text-gray-400"}`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
