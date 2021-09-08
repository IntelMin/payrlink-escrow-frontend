import { useCallback, useEffect, useState } from 'react';
import usePayr from './usePayr';
import * as config from '../config';

const useActiveTrans = () => {
  const payr = usePayr();
  const [activeTrans, setActiveTrans] = useState(null);

  const fetchActiveTrans = useCallback(async () => {
    try {
      const _activeTrans = await payr.getActiveTrans();
      setActiveTrans(_activeTrans);
      console.log("Active Trans: ", _activeTrans);
    } catch (e) {
      console.log("Active Trans Fetching Error: ", e);
    }
  }, [payr])

  useEffect(() => {
    if (payr) {
      fetchActiveTrans();
      let refreshInterval = setInterval(fetchActiveTrans, config.refetchInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [payr, fetchActiveTrans]);

  return activeTrans;
}

export default useActiveTrans;
