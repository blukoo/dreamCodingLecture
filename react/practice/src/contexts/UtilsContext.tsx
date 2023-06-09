import { createContext, useContext, useEffect, useState } from "react";
const UtilsContext = createContext(null);

export default function UtilsContextProvider({ children }) {
  const [target, setTarget] = useState(null);
  // const [value, setValue] = useState({
  //   state: { target: null },
  //   action: {
  //     setTarget: () => {
  //       console.log("setTarget");
  //     },
  //   },
  // });
  return (
    <>
      <UtilsContext.Provider
        // @ts-ignore
        value={{ state: { target }, action: { setTarget } }}
      >
        {children}
      </UtilsContext.Provider>
    </>
  );
}
export function UseUtilsContext() {
  return useContext(UtilsContext);
}
