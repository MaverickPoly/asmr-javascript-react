import { useState } from "react";
import MarkdownIt from "markdown-it";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [markdown, setMarkdown] = useState("");

  const md = MarkdownIt();

  useEffect(() => {
    setMarkdown(md.render(input));
  }, [input]);

  return (
    <div className="container">
      <div className="inputBox">
        <h1 className="title">Markdown Preview</h1>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="30"
          cols="60"
          style={{ resize: "none", fontFamily: "Arial" }}
        />
      </div>
      <div
        className="resultBox"
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </div>
  );
}

export default App;
