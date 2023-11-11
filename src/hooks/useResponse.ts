import { useEffect, useState } from "react";
import { useOnline } from "./useOnline";

export function useResponse(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...e: any) => Promise<any>,
  initialFetch: boolean
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = useState<any>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const online = useOnline();

  useEffect(() => {
    if (initialFetch) {
      fetching();
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetching = (...e: any) => {
    setLoading(true);
    callback(e)
      .then((res) => {
        setValue(res);
        setLoading(false);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true), setLoading(false);
      });
  };

  return {
    value,
    hasError,
    loading,
    online,
    fetching,
  };
}

//por falta de tiempo no podre implementar cache ni re fetching por re-conexion
//se hubiera tipado mejor, pero por tiempo coloco "any"
