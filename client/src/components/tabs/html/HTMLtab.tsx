import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";

interface HTMLProps {
  value: string;
  setValue: (val: string) => any;
}

const HTMLtab: React.FC<HTMLProps> = ({ value, setValue }) => {
  return (
    <>
      <ReactCodeMirror
        height="85vh"
        theme="dark"
        value={value}
        onChange={(val) => setValue(val)}
        extensions={[html({ autoCloseTags: true, selfClosingTags: true })]}
      />
    </>
  );
};

export default HTMLtab;
