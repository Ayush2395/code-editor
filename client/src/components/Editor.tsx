import React, { useEffect, useState } from "react";
import CSStab from "./tabs/css/CSStab";
import HTMLtab from "./tabs/html/HTMLtab";
import JStab from "./tabs/js/JStab";

interface EditorProps {
  tabs: string;
}

const Editor: React.FC<EditorProps> = ({ tabs }) => {
  const [htmlLang, setHtmlLang] = useState<string>("");
  const [cssLang, setCssLang] = useState<string>("");
  const [jsLang, setJsLang] = useState<string>("");

  useEffect(() => {
    const htmlOutput = document.querySelector(".output")!;
    htmlOutput.innerHTML = htmlLang;
  }, [htmlLang]);

  return (
    <>
      <div className="grid">
        <div className="tabs">
          {tabs === "html" ? (
            <HTMLtab value={htmlLang} setValue={setHtmlLang} />
          ) : tabs === "css" ? (
            <CSStab val={cssLang} setVal={setCssLang} />
          ) : (
            <JStab val={jsLang} setVal={setJsLang} />
          )}
        </div>
        <div className="col-output">
          <h1>Output</h1>
          <div className="output"></div>
        </div>
      </div>
    </>
  );
};

export default Editor;
