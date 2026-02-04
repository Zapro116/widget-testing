import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function FeaturesList({ onContextAdd }) {
  return (
    <>
      {/* 1. Initialization */}
      <Card
        title="1. Initialization"
        onClick={() => onContextAdd("1. Initialization")}
      >
        Initialized via <code>init()</code> with a configuration object.
        Customizes behavior, appearance, position, theme, and dimensions.
        Handles global state setup for Clerk auth and internal stores.
      </Card>

      {/* 2. Shadow DOM */}
      <Card title="2. Shadow DOM" onClick={() => onContextAdd("2. Shadow DOM")}>
        Renders inside a Shadow DOM for robust style isolation. Prevents host
        site styles from bleeding in and widget styles from leaking out.
        Automatically handles CSS injection.
      </Card>

      {/* 3. Control API */}
      <Card
        title="3. Control API"
        onClick={() => onContextAdd("3. Control API")}
      >
        Exposes global <code>KuramaWidget</code> object. Methods:
        <code>open()</code>, <code>close()</code>, <code>toggle()</code>,
        <code>isOpen()</code>, and <code>updateConfig()</code> for dynamic
        updates.
      </Card>

      {/* 4. Features */}
      <Card
        title="4. Features"
        onClick={() => onContextAdd("4. Features")}
        style={{
          background: "linear-gradient(to bottom right, #ffffff, #f0f9ff)",
        }}
      >
        <strong>Computer Tool:</strong> AI agent interaction with UI.
        <br />
        <br />
        <strong>Auth (Clerk):</strong> Secure authentication, user details, and
        token handling.
        <br />
        <br />
        <strong>Analytics (Zipy):</strong> Session replay and error tracking
        (iframe support).
      </Card>

      {/* 5. UI/UX Features */}
      <Card
        title="5. UI/UX Features"
        onClick={() => onContextAdd("5. UI/UX Features")}
      >
        <strong>Draggable:</strong> Smart positioning with boundary enforcement.
        <br />
        <strong>Fullscreen:</strong> Smooth transitions using Framer Motion.
        <br />
        <strong>Theming:</strong> Light, dark, and auto modes.
      </Card>

      {/* 6. Context */}
      <Card title="6. Context" onClick={() => onContextAdd("6. Context")}>
        Pass data to the assistant via <code>addContext()</code> and
        <code>getContext()</code>. Includes <code>useKuramaContext</code> hook
        for internal component interaction.
      </Card>

      {/* 7. Auto-Init */}
      <Card title="7. Auto-Init" onClick={() => onContextAdd("7. Auto-Init")}>
        Supports zero-code setup via <code>data-kurama-widget</code> attribute
        on script tags. Parses JSON config from <code>data-config</code> for
        static site integration.
      </Card>

      {/* 8. Lifecycle */}
      <Card title="8. Lifecycle" onClick={() => onContextAdd("8. Lifecycle")}>
        Complete cleanup via <code>destroy()</code>. Unmounts React app, removes
        DOM nodes (shadow root), and resets global stores to prevent memory
        leaks.
      </Card>
    </>
  );
}

FeaturesList.propTypes = {
  onContextAdd: PropTypes.func.isRequired,
};
