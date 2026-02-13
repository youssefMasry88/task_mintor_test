import React from "react";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import ORDERS from "../../data/History";

export default function OrderCard({ handleRemove, order }) {
  const steps = [
    { id: 1, label: "Order placed" },
    { id: 2, label: "Shipping" },
    { id: 3, label: "Completed" },
  ];
  const isInProgress = order.status === "inProgress";
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#D9176C33] mb-6 relative">
      {/* delete icon */}
      <button
        className="absolute right-4 top-5 text-[#D9176C80] hover:text-[#D9176C]"
        onClick={() => handleRemove(order.id)}
      >
        <FaRegTrashAlt />
      </button>

      {/* info */}
      <div className="flex justify-between pt-5">
        {/* left */}
        <div className="text-sm text-gray-400 space-y-2">
          <p>Order No.</p>
          <p>Status</p>
          <p>Date</p>
          <p>Address</p>
        </div>

        {/* right */}
        <div className="text-sm text-right space-y-2">
          <p className="font-semibold">{order.id} </p>
          <p className="font-semibold">
            {" "}
            {order.status == "inProgress" ? "In progress" : order.status}{" "}
          </p>
          <p className="font-semibold"> {order.date} </p>
          <p className="font-semibold"> {order.address}</p>
        </div>
      </div>
      {/* Stepper لو inProgress */}
      {isInProgress && (
        <div className="mt-8">
          <div className="relative flex items-center justify-between">
            {/* line */}
            <hr className="absolute left-0 right-0 top-5 -translate-y-1/2 w-full h-1 bg-gray-200" />
            {/* circle */}
            {steps.map((step) => {
              const done = order.step >= step.id;
              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col items-center flex-1 ${done ? "text-pink-600" : "text-gray-400"}`}
                >
                  {/* circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      done
                        ? "bg-[#D9176C] text-white"
                        : "bg-gray-300 text-white"
                    }`}
                  >
                    <FaCheck size={12} />
                  </div>

                  {/* label */}
                  <span
                    className={`mt-3 text-sm ${
                      done ? "text-pink-600" : "text-gray-400"
                    }`}
                  >
                    {" "}
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* لو completed او canceled */}
      {!isInProgress && (
        <button className="mt-6 text-pink-600 text-sm hover:underline">
          View order detail →
        </button>
      )}

    </div>
  );
}

