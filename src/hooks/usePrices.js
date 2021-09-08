import { useCallback, useEffect, useState } from 'react';
import axios from "axios"

import * as apis from '../api/apis';
import * as commHelper from '../helpers/common';
import * as config from '../config';

const usePrices = () => {
  const [prices, setPrices] = useState(null);

  const fetchPrices = useCallback(async () => {
    try {
      const price_api_url = apis.cg_get_prices + commHelper.joinPoolCgIDsByComma();
      const _prices = (await axios.get(price_api_url)).data
      setPrices(_prices)
      console.log("Prices: ", _prices)
    } catch (e) {
      console.log("Prices Fetching Error: ", e)
    }
  }, [])

  useEffect(() => {
    fetchPrices()
    let refreshInterval = setInterval(fetchPrices, config.refetchInterval)
    return () => clearInterval(refreshInterval)
  }, [fetchPrices])

  return prices
}

export default usePrices
