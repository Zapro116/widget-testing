import { useState, useEffect, useCallback } from "react";
import {
  WIDGET_URLS,
  WIDGET_TEXT_DEFAULTS,
} from "../constants/widgetConstants";

export function useWidget(widgetMode, customScriptUrl, config) {
  const [status, setStatus] = useState({ message: "", isError: false });
  const [isInitialized, setIsInitialized] = useState(false);

  const showStatus = useCallback((message, isError = false) => {
    setStatus({ message, isError });
    setTimeout(() => setStatus({ message: "", isError: false }), 3000);
  }, []);

  useEffect(() => {
    const getScriptSrc = () => {
      if (widgetMode === "custom") return customScriptUrl;
      return WIDGET_URLS[widgetMode];
    };

    const scriptSrc = getScriptSrc();

    if (!scriptSrc) return;

    const widgetScript = document.createElement("script");
    widgetScript.src = scriptSrc;
    widgetScript.crossOrigin = "anonymous";
    widgetScript.async = true;

    widgetScript.onload = () => {
      console.log(`Widget script loaded successfully (${widgetMode})`);
      showStatus(`Loaded ${widgetMode.toUpperCase()} Widget`);
    };

    widgetScript.onerror = () => {
      console.error("Failed to load KuramaWidget script");
      showStatus("Failed to load widget script", true);
    };

    document.head.appendChild(widgetScript);

    return () => {
      document.head.removeChild(widgetScript);
      if (window.KuramaWidget) {
        delete window.KuramaWidget;
      }
      setIsInitialized(false);
    };
  }, [widgetMode, customScriptUrl, showStatus]);

  const triggerWidget = useCallback(() => {
    if (typeof window.KuramaWidget === "undefined") {
      showStatus("Widget script loading...", true);
      return;
    }

    if (isInitialized) {
      showStatus("Widget already initialized", true);
      return;
    }

    if (!config.clientId || !config.clientSecret || !config.userEmail) {
      showStatus("Missing required fields (Client ID, Secret, Email)", true);
      return;
    }

    const widgetConfig = {
      ...config,
      title: config.title || WIDGET_TEXT_DEFAULTS.title,
      heading: config.heading || WIDGET_TEXT_DEFAULTS.heading,
      thinkingText: config.thinkingText || WIDGET_TEXT_DEFAULTS.thinkingText,
      onReady: () => showStatus("Widget initialized successfully!"),
      onOpen: () => showStatus("Widget opened"),
      onClose: () => showStatus("Widget closed"),
      onMessage: (message) => showStatus(`Message sent: ${message}`),
      onError: (error) => showStatus(`Widget error: ${error.message}`, true),
    };

    window.KuramaWidget.init(widgetConfig);
    setIsInitialized(true);
  }, [config, isInitialized, showStatus]);

  const addCardContext = useCallback(
    (title) => {
      if (
        typeof window.KuramaWidget !== "undefined" &&
        window.KuramaWidget.addContext
      ) {
        window.KuramaWidget.addContext(`Viewer is interested in: ${title}`);
        showStatus(`Context added: ${title}`);
      } else {
        showStatus("Widget not ready or context not supported", true);
      }
    },
    [showStatus],
  );

  return {
    status,
    triggerWidget,
    addCardContext,
  };
}
