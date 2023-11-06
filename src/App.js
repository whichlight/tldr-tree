import React, { useState } from "react";
import Data from "./data.json";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <h1>summaries tree</h1>
      <div className="info">
        <p>
          Imagine navigating an article as a tree, getting an overview, and then
          zooming in on a section for more details. This prototype illustrates
          navigating nested summaries of an article. <br />
          <br /> The article here is{" "}
          <a
            href="https://aeon.co/essays/how-ecological-thinking-fills-the-gaps-in-biomedicine"
            target="_blank"
            rel="noopener noreferrer"
          >
            "The Body is not a Machine"
          </a>
          {". "}The initial paragraph is a summary of the article. When you
          click it, you'll see a series of summaries, one of each section of the
          article in sequence. When you click a section, you'll see summaries in
          sequence of that section, and so on, following along the branches of
          the tree until you reach the raw text of the article.{" "}
          <a target="_blank" href="https://whichlight.com/">
            ~whichlight
          </a>
        </p>
      </div>
    </div>
  );
};

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
      <Header />
      <ul className="tree">
        <TreeNode node={Data} />
      </ul>
    </div>
  );
};

export default App;
