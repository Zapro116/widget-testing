import React from "react";
import PropTypes from "prop-types";

export default function Card({ title, children, onClick, style }) {
  return (
    <div
      className="card bg-card-bg border border-border rounded-xl p-5 flex flex-col transition-all duration-200 cursor-pointer text-left overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:border-accent"
      onClick={onClick}
      style={style}
    >
      <h2 className="text-lg mb-3 text-highlight flex items-center gap-2 font-semibold">
        {title}
      </h2>
      <p className="text-sm leading-relaxed m-0 text-text-secondary flex-1 overflow-y-auto">
        {children}
      </p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};
