
import { pools } from '../blockchain/constants'
import * as defs from './defines';
import * as utils from '../blockchain/utils';
import MdHidden from '@material-ui/icons/VisibilityOff';

export const joinPoolCgIDsByComma = () => {
  let poolStr = "";
  for (var id in pools) {
    poolStr += pools[id].cgId;
  }
  return poolStr;
}

export const generatePoolSelectOptions = () => {
  return Object.keys(pools).map((id) => {
    const pool = pools[id];
    return {
      value: id,
      label: 
        <div>
          <img src={pool.icon} height="30px" width="30px" alt={pool.symbol}/>
          &nbsp;{pool.symbol}
        </div>
    }
  });
}

export const getDateStr = (dateObj) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const output = month  + ' ' + day  + ' ' + year;
  return output;
}

export const getTimeStr = (dateObj) => {
  let hour24 = dateObj.getHours();
  let noon = "AM";
  if (hour24 >= 12) noon = "PM"
  if (hour24 > 12) hour24 = hour24 % 12;
  const hour = String(hour24).padStart(2, '0');
  const minute = String(dateObj.getMinutes()).padStart(2, '0');
  //const second = String(dateObj.getSeconds()).padStart(2, '0');
  const output = hour  + ':' + minute  + ' ' + noon;
  return output;
}

export const generateTranTypeBadge = (tran) => {
  if (tran.type === defs.TranType.BUY) {
    return (
      <span className="buy">BUY</span>
    );
  }
  if (tran.type === defs.TranType.SELL) {
    return (
      <span className="sell">SELL</span>
    );
  }
}

export const getTranStatusText = (tran, bCapital = true) => {
  let text = "";
  switch (tran.status) {
    case defs.TranStatus.PENDING: text = "PENDING"; break;
    case defs.TranStatus.AVAILABLE: text = "AVAILABLE"; break;
    case defs.TranStatus.COMPLETED: text = "COMPLETED"; break;
    case defs.TranStatus.CANCELED: text = "CANCELED"; break;
    default: break;
  }
  if (!bCapital)
    text = text.toLowerCase();
  return text;
}

export const generateTranStatusBadge = (tran) => {
  return (
    <span className={"trans-status " + getTranStatusText(tran, false)}>{getTranStatusText(tran)}</span>
  );
}

export const generateDateFormat = (date) => {
  return (
    <div className="event-date">
      {
        date ?
          <><h4>{getDateStr(date)}</h4><small>{getTimeStr(date)}</small></>
        :
          <h4>N/A</h4>
      }
    </div>
  )
}

export const generateTranRecipient = (tran) => {
  if (tran.type === defs.TranType.BUY)
    return <MdHidden/>;
  else
    return utils.formatAddress(tran.from);
}

export const toFixed = (num, fixed = true, digit = 4) => {
  const exp = Math.pow(10, digit);
  const fixed_num = Math.floor(Number(num) * exp) / exp;
  if (fixed)
    return fixed_num.toFixed(digit);
  else
    return Number(fixed_num.toString());
}