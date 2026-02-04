import { useState } from "react";
import { DEFAULT_CONFIG } from "../constants/widgetConstants";

export function useWidgetConfig() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [widgetMode, setWidgetMode] = useState("sit");
  const [customScriptUrl, setCustomScriptUrl] = useState("");

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
  };

  return {
    config,
    updateConfig,
    widgetMode,
    setWidgetMode,
    customScriptUrl,
    setCustomScriptUrl,
  };
}
