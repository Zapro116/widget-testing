import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ConfigForm({ config, onConfigChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onConfigChange({
      ...config,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (!isOpen) {
    return (
      <button
        className="fixed bottom-5 right-5 z-[90] px-5 py-2.5 bg-highlight text-white border-0 rounded-lg cursor-pointer shadow-md font-medium hover:bg-highlight-hover transition-colors"
        onClick={() => setIsOpen(true)}
      >
        Configure Widget
      </button>
    );
  }

  return (
    <div className="fixed top-0 right-0 h-screen w-[400px] bg-white border-l border-border p-5 overflow-y-auto z-[1100] shadow-[-4px_0_15px_rgba(0,0,0,0.1)] box-border max-w-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl m-0 text-text-primary font-bold">
          Widget Configuration
        </h2>
        <button
          className="bg-none border-none text-2xl cursor-pointer text-text-secondary hover:text-text-primary"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-1.5 font-medium text-sm text-text-secondary block">
            Client ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="clientId"
            value={config.clientId || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm box-border focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight"
            required
            placeholder="Required"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1.5 font-medium text-sm text-text-secondary block">
            Client Secret <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="clientSecret"
            value={config.clientSecret || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm box-border focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight"
            required
            placeholder="Required"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1.5 font-medium text-sm text-text-secondary block">
            User Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="userEmail"
            value={config.userEmail || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm box-border focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight"
            required
            placeholder="Required"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1.5 font-medium text-sm text-text-secondary block">
            Title <span className="text-xs text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            name="title"
            value={config.title || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm box-border focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight"
            placeholder="Default: AI Chat Widget"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1.5 font-medium text-sm text-text-secondary block">
            Heading <span className="text-xs text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            name="heading"
            value={config.heading || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm box-border focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight"
            placeholder="Default: Impetus"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1.5 font-medium text-sm text-text-secondary block">
            Thinking Text{" "}
            <span className="text-xs text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            name="thinkingText"
            value={config.thinkingText || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm box-border focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight"
            placeholder="Default: Ask Impetus"
          />
        </div>
      </div>
    </div>
  );
}

ConfigForm.propTypes = {
  config: PropTypes.object.isRequired,
  onConfigChange: PropTypes.func.isRequired,
};
