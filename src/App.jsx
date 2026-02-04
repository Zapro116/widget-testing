import React from "react";
import Header from "./components/Header";
import FeaturesList from "./components/FeaturesList";
import ConfigForm from "./components/ConfigForm";
import "./index.css";
import { useWidgetConfig } from "./hooks/useWidgetConfig";
import { useWidget } from "./hooks/useWidget";

function App() {
  const {
    config,
    updateConfig,
    widgetMode,
    setWidgetMode,
    customScriptUrl,
    setCustomScriptUrl,
  } = useWidgetConfig();

  const { status, triggerWidget, addCardContext } = useWidget(
    widgetMode,
    customScriptUrl,
    config,
  );

  return (
    <>
      <Header
        onTrigger={triggerWidget}
        widgetMode={widgetMode}
        setWidgetMode={setWidgetMode}
        customScriptUrl={customScriptUrl}
        setCustomScriptUrl={setCustomScriptUrl}
      />

      <ConfigForm config={config} onConfigChange={updateConfig} />

      <main className="flex-1 p-6 overflow-y-auto">
        {status.message && (
          <div
            className={`fixed top-5 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-lg z-[2000] text-sm opacity-95 shadow-md text-white ${status.isError ? "bg-red-500" : "bg-gray-800"}`}
          >
            {status.message}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
          <FeaturesList onContextAdd={addCardContext} />
        </div>
      </main>
    </>
  );
}

export default App;
