import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="text-green-500">Hello world... Welcome to Zenzy...!!</div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
