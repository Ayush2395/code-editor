import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

interface JSprops {
  val: string;
  setVal: (val: string) => any;
}

const JStab: React.FC<JSprops> = ({ val, setVal }) => {
  return (
    <>
      <ReactCodeMirror
        height="85vh"
        value={val}
        onChange={(val) => setVal(val)}
        theme="dark"
        extensions={[javascript({ jsx: true, typescript: true })]}
      />
    </>
  );
};

export default JStab;
