import React, { useState } from "react";
import Layout from "./components/layout";
import LockScreen from "./components/lock-screen";

function App() {
  const [isScreenOn, setIsScreenOn] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  const handleLockButton = () => {
    setIsScreenOn((prev) => !prev);
    setIsLocked(true);
  };

  return (
    <Layout lockButtonHandler={handleLockButton}>
      <div className="w-full h-full relative">
        {isLocked && <LockScreen {...{ isScreenOn }} />}
        <div className="w-full h-full bg-default-image bg-cover"></div>
      </div>
    </Layout>
  );
}

export default App;
