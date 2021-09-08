import { useCallback, useEffect, useState } from 'react';
import usePayr from './usePayr';
import * as config from '../config';

const useAssets = () => {
  const payr = usePayr();
  const [assets, setAssets] = useState(null);

  const fetchAssets = useCallback(async () => {
    try {
      const _assets = await payr.getAssets();
      setAssets(_assets);
      console.log("Assets: ", _assets);
    } catch (e) {
      console.log("Assets Fetching Error: ", e);
    }
  }, [payr])

  useEffect(() => {
    if (payr) {
      fetchAssets();
      let refreshInterval = setInterval(fetchAssets, config.refetchInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [payr, fetchAssets]);

  return assets;
}

export default useAssets;
