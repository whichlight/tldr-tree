import React, { useState } from "react";
import Data from "./data.json";
import "./App.css";

const TreeNode = ({ node }) => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = (name) => {
    if ("children" in node) {
      if (node.children.length > 0) setOpen(!isOpen);
    }
  };

  return (
    <li>
      <div
        onClick={() => handleToggle(node.text)}
        className={`node ${isOpen == true ? "active" : ""} ${
          "children" in node ? "" : "rawtext"
        }`}
      >
        {isOpen == true ? node.text.substring(0, 50) + "..." : node.text}
      </div>
      {isOpen && node.children && (
        <ul className="child-nodes">
          {node.children.map((childNode, index) => (
            <TreeNode node={childNode} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
};

const App = () => {
  return (
    <div className="app">
      <ul>
        <TreeNode node={Data} />
      </ul>
    </div>
  );
};

export default App;
