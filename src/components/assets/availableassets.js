import React from 'react';
import { Card, Table } from 'react-bootstrap';

import { pools } from '../../blockchain/constants';
import useAssets from '../../hooks/useAssets';
import usePrices from '../../hooks/usePrices';
import * as commHelper from '../../helpers/common';
import useAssetDetails from '../../hooks/useAssetDetails';
import DataLoading from '../common/DataLoading';

export default function AvailableAssets() {
  const prices = usePrices();
  const assets = useAssets();
  const assetDeatils = useAssetDetails();
  return(
    <Card className="myassets availableassets">
      <h2>Available assets</h2>
      <Table>
        <thead>
          <tr>
          <th>No</th>
          <th>Pool</th>
          <th>Balance</th>
          <th>Transactions</th>
          <th>Last Deposit</th>
          <th>Last Withdraw</th>
          <th>Transaction Fee</th>
          {/* <th>Price (24hr)</th> */}
          <th>Net Worth</th>
          </tr>
        </thead>
        <tbody>
          {
            assets && Object.keys(assets).map((id, index) => {
              const asset = assets[id];
              const pool = pools[id];
              return (
                <tr key={`asset-${id}`}>
                  <td>{index + 1}</td>
                  <td className="asset-coin">
                    <img src={pool.icon} alt={pool.symbol}/>
                    <span>
                      <h3>{pool.symbol}</h3>
                      <small>{pool.name}</small>
                    </span>    
                  </td>
                  <td>{commHelper.toFixed(asset.balance)}</td>
                  <td>2</td>
                  <td>{assetDeatils?commHelper.generateDateFormat(assetDeatils[id].lastDeposit):<DataLoading/>}</td>
                  <td>{assetDeatils?commHelper.generateDateFormat(assetDeatils[id].lastWithdraw):<DataLoading/>}</td>
                  <td>{pool.fee} %</td>
                  {/* <td className="chart_icon"><LineChart1/></td> */}
                  <td>$ {commHelper.toFixed(prices?prices[pool.cgId].usd * asset.balance:0)} </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Card>

  )

}