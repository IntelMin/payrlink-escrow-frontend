import { useCallback, useEffect, useState } from 'react';
import usePayr from './usePayr';
import * as config from '../config';

const usePastTrans = () => {
  const payr = usePayr();
  const [pastTrans, setPastTrans] = useState(null);

  const fetchPastTrans = useCallback(async () => {
    try {
      const _pastTrans = await payr.getPastTrans();
      setPastTrans(_pastTrans);
      console.log("Past Trans: ", _pastTrans);
    } catch (e) {
      console.log("Past Trans Fetching Error: ", e);
    }
  }, [payr])

  useEffect(() => {
    if (payr) {
      fetchPastTrans();
      let refreshInterval = setInterval(fetchPastTrans, config.refetchInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [payr, fetchPastTrans]);

  return pastTrans;
}

export default usePastTrans;
