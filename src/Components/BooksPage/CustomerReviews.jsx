import React from 'react'
import { reviews } from '../../data/reviews';

export default function CustomerReviews() {
    const activeTab = "reviews";


  return (
    <div>
        {activeTab === "reviews" && (
  <div className="mt-2">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {reviews.map((r) => (
        <div
          key={r.id}
          className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5"
        >
          {/* Top row: avatar + name */}
          <div className="flex items-start gap-3">
            <img
              src={r.avatar}
              alt={r.name}
              className="w-11 h-11 rounded-full object-cover"
            />

            <div className="min-w-0">
              <p className="font-semibold text-gray-900 leading-5">
                {r.name}
              </p>
              {r.verified && (
                <p className="text-xs text-emerald-500 font-semibold">
                  Verified Purchase
                </p>
              )}
            </div>
          </div>

          {/* Date */}
          <p className="text-xs text-gray-400 mt-3">
            Reviewed On {r.date}
          </p>

          {/* Title + rating */}
          <div className="flex items-center justify-between gap-3 mt-2">
            <div className="flex items-center gap-2 min-w-0">
              <p className="font-semibold text-gray-900 truncate">
                {r.title}
              </p>
              <span className="text-sm font-semibold text-gray-700">
                {r.rating.toFixed(1)}
              </span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < Math.round(r.rating) ? "text-yellow-400" : "text-gray-200"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Text */}
          <p className="text-sm text-gray-500 mt-2 leading-6">
            {r.text}
          </p>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  )
}
