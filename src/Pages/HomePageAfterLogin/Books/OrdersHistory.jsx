import React, { useMemo, useState } from "react";
import heroImg from "../../../assets/hero2.png";
import OrderCard from "../../../Components/Orders/OrderCard";
import ORDERS_DATA from "../../../data/History";

export default function OrdersHistory() {
  const [activeTab, setActiveTab] = useState("all");
  const [orders, setOrders] = useState(ORDERS_DATA);
  const TABS = [
    { label: "All", value: "all" },
    { label: "In Progress", value: "inProgress" },
    { label: "Completed", value: "completed" },
    { label: "Canceled", value: "canceled" },
  ];

  const filteredOrders = useMemo(() => {
    if (activeTab === "all") return orders;
    return orders.filter((O) => O.status === activeTab);
  }, [activeTab, orders]);

  const handleRemove = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <img src={heroImg} alt="" className="h-[25vh] w-full object-cover" />
      <div className="w-full max-w-6xl mx-auto py-10 ">
        <div className="flex items-center gap-4 mb-8">
          {/* tabs */}
          {TABS.map((T) => (
            <button
              key={T.value}
              onClick={() => setActiveTab(T.value)}
              className={`px-4 py-2 rounded-lg text-sm transition border
              ${
                activeTab === T.value
                  ? "bg-[#D9176C80] text-white border-pink-500"
                  : "bg-white  border-gray-300"
              }`}
            >
              {T.label}
            </button>
          ))}
        </div>
        {/* list */}
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}
