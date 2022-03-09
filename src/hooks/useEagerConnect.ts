import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../connectors";

const useEagerConnect = () => {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = React.useState(false);

  React.useEffect(() => {
    injected.isAuthorized().then((isAuthorised: boolean) => {
      if (isAuthorised) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []);

  //if connection worked, wait until we get confirmation of that til we flip the flag
  React.useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
};

export default useEagerConnect;
