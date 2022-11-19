import { useState } from "react";
import Editor from "./components/Editor";
import Tabs from "./components/tabs/Tabs";

const App = () => {
  const [tabs, setTabs] = useState<string>("html");
  return (
    <>
      <Tabs setTabs={setTabs} tabs={tabs} />
      <Editor tabs={tabs} />
    </>
  );
};

export default App;
