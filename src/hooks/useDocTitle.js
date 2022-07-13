import { useEffect } from "react";

const useDocTitle = (count) => {
  useEffect(() => {
    document.title = `Clicked ${count} times!`;
  }, [count]);
};

export default useDocTitle;
