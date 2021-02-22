import {useEffect} from "react";

const usePreloader = () => {
  useEffect(() => {
    window.$(".preloader").fadeOut(1000); // set duration in brackets

    return () => {
      window.$(".preloader").show();
    };
  }, []);
};

export default usePreloader;
