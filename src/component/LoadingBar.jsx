import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const CustumLoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  //   console.log(location);
  useEffect(() => {
    // Set the progress to 0 on every URL change
    setProgress(10);
    setTimeout(() => setProgress(100), 100);
  }, [location]);

  return (
    <LoadingBar
      color="#65B741"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      shadow={true}
    />
  );
};

export default CustumLoadingBar;
