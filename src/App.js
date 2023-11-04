import React, { useState } from "react";
import Data from "./data.json";
import "./App.css";

const TreeNode = ({ node }) => {
  const [isOpen, setOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(null);

  const handleToggle = (name) => {
    setOpen(!isOpen);
    setActiveNode(name);
  };

  return (
    <li>
      <div
        onClick={() => handleToggle(node.name)}
        className={`node ${activeNode === node.text ? "active" : ""}`}
      >
        {node.text}
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
