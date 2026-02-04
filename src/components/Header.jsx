import React from "react";
import PropTypes from "prop-types";

export default function Header({
  onTrigger,
  widgetMode,
  setWidgetMode,
  customScriptUrl,
  setCustomScriptUrl,
}) {
  return (
    <header className="w-full px-6 h-[70px] bg-white border-b border-border flex justify-between items-center shrink-0 box-border">
      <div className="flex items-center">
        <svg
          className="w-10 h-10 mr-2.5 p-1.5 rounded-md border border-border"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M896 192H128c-35.3 0-64 28.7-64 64v512c0 35.3 28.7 64 64 64h576.6l191.6 127.7L896 832c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64z"
              fill="#3D5AFE"
            ></path>
            <path
              d="M640 512c0-125.4-51.5-238.7-134.5-320H128c-35.3 0-64 28.7-64 64v512c0 35.3 28.7 64 64 64h377.5c83-81.3 134.5-194.6 134.5-320z"
              fill="#536DFE"
            ></path>
            <path
              d="M256 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
              fill="#FFFF8D"
            ></path>
            <path
              d="M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
              fill="#FFFF00"
            ></path>
            <path
              d="M768 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
              fill="#FFEA00"
            ></path>
          </g>
        </svg>
        <h2 className="m-0 text-xl font-bold text-text-primary">Chat Widget</h2>
      </div>
      <div className="flex items-center gap-4">
        <select
          className="p-2 rounded-md border border-border text-sm bg-white"
          value={widgetMode}
          onChange={(e) => setWidgetMode(e.target.value)}
        >
          <option value="sit">SIT Environment</option>
          <option value="prod">PROD Environment</option>
          <option value="custom">Custom URL</option>
        </select>

        {widgetMode === "custom" && (
          <input
            type="text"
            className="w-[250px] p-2 rounded-md border border-border text-sm"
            placeholder="Enter widget script URL"
            value={customScriptUrl}
            onChange={(e) => setCustomScriptUrl(e.target.value)}
          />
        )}
        <button
          id="trigger-widget"
          className="bg-highlight hover:bg-highlight-hover text-white border-0 px-4 py-2 rounded-md font-semibold cursor-pointer transition-colors text-sm"
          onClick={onTrigger}
        >
          Launch
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  onTrigger: PropTypes.func.isRequired,
  widgetMode: PropTypes.string.isRequired,
  setWidgetMode: PropTypes.func.isRequired,
  customScriptUrl: PropTypes.string.isRequired,
  setCustomScriptUrl: PropTypes.func.isRequired,
};
