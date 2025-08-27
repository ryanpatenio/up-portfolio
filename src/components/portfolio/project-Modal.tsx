
"use client";

import React from "react";

type ModalProps = {
  modalState: boolean;
  loading?: boolean;
  onClose: () => void;
  onNext?: () => void;
  children?: React.ReactNode;
};

export default function Modal({
  modalState,
  loading = false,
  onClose,
  onNext,
  children,
}: ModalProps) {
  if (!modalState) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl px-4 py-4 max-w-2xl w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl cursor-pointer text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Content */}
        <div className="w-full h-80 flex items-center justify-center">
          {loading ? (
            <div className="animate-spin border-4 border-gray-300 border-t-indigo-600 rounded-full w-12 h-12" />
          ) : (
            children
          )}
        </div>

        {/* Optional Next button */}
        {onNext && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={onNext}
              className="px-4 py-2 bg-indigo-600 cursor-pointer text-white rounded-md hover:bg-indigo-700 transition"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
