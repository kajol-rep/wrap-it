import { useState } from "react";
import { FiAlertCircle, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";
import "../componentStyle.css";
const variants = [
  {
    name: "success",
    color: "#155724",
    bgColor: "#d4edda",
    icon: <FiCheckCircle />
  },
  {
    name: "info",
    color: "#0c5460",
    bgColor: "#d1ecf1",
    icon: <FiAlertCircle />
  },
  {
    name: "danger",
    color: "#721c24",
    bgColor: "#f8d7da",
    icon: <FiAlertCircle />
  },
  {
    name: "warning",
    color: "#856404",
    bgColor: "#fff3cd",
    icon: <FiAlertTriangle />
  },
  {
    name: "primary",
    color: "#004085",
    bgColor: "#cce5ff"
  },
  { name: "dark", color: "#1b1e21", bgColor: "#c6c8ca" },
  {
    name: "light",
    color: "#818182",
    bgColor: "#fefefe"
  }
];

export default function Alert({ children, variant, dismissable }) {
  const [display, setDisplay] = useState(true);

  let color = "#004085";
  let bgColor = "#cce5ff";
  let icon = "";
  variants.map((i) => {
    if (variant === i.name) {
      color = i.color;
      bgColor = i.bgColor;
      icon = i.icon;
    }
    return i;
  });

  function handleRemove() {
    setDisplay(false);
  }
  return (
    <div>
      {display && (
        <div
          style={{
            color: color,
            backgroundColor: bgColor
          }}
          className="alert"
        >
          <div>{icon}</div>
          <div className="grow">{children}</div>
          {dismissable && (
            <div>
              <button
                className="alert-close-btn"
                style={{ color: color }}
                onClick={handleRemove}
              >
                &times;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
