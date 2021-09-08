import { useCallback, useEffect, useState } from 'react';
import usePayr from './usePayr';
import * as config from '../config';

const useAssetDetails = () => {
  const payr = usePayr();
  const [assetDetails, setAssetDetails] = useState(null);

  const fetchAssetDetails = useCallback(async () => {
    try {
      const _assetDetails = await payr.getAssetDetails();
      setAssetDetails(_assetDetails);
      console.log("Asset Details: ", _assetDetails);
    } catch (e) {
      console.log("Asset Details Fetching Error: ", e);
    }
  }, [payr])

  useEffect(() => {
    if (payr) {
      fetchAssetDetails();
      let refreshInterval = setInterval(fetchAssetDetails, config.refetchInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [payr, fetchAssetDetails]);

  return assetDetails;
}

export default useAssetDetails;
