import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

interface CSSprops {
  val: string;
  setVal: (val: string) => any;
}

const CSStab: React.FC<CSSprops> = ({ val, setVal }) => {
  return (
    <>
      <ReactCodeMirror
        height="85vh"
        value={val}
        onChange={(val) => setVal(val)}
        extensions={[css()]}
      />
    </>
  );
};

export default CSStab;
