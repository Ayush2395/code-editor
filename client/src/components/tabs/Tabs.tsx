import React from "react";
import Button from "../Button";

interface TabsProps {
  tabs: string;
  setTabs: (lang: string) => any;
}

const Tabs: React.FC<TabsProps> = ({ tabs, setTabs }) => {
  return (
    <>
      <div className="btn-group">
        <Button
          className={`${tabs === "html" ? "active" : ""}`}
          title="HTML"
          onClick={() => setTabs("html")}
        />
        <Button
          className={`${tabs === "css" ? "active" : ""}`}
          title="CSS"
          onClick={() => setTabs("css")}
        />
        <Button
          className={`${tabs === "js" ? "active" : ""}`}
          title="JavaScript"
          onClick={() => setTabs("js")}
        />
      </div>
    </>
  );
};

export default Tabs;
