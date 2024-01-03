import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const RouteTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (process.env.REACT_APP_GA_KEY) {
      ReactGA.initialize(process.env.REACT_APP_GA_KEY);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send("pageview");
    }
  }, [initialized, location]);

  return <></>;
};

export default RouteTracker;
