import React from "react";

import "../styles/financeInfo.css";

const FinanceInfo = ({ toogleInfo, financeInfo }) => {
  const {
    ticker,
    exchange,
    price,
    change,
    change_percent,
    dividend,
    last_trade_time,
  } = financeInfo;

  return (
    <div className="info overlay">
      <div className="info__main">
        <button className="info__closeBtn" onClick={toogleInfo}>
          +
        </button>
        <table className="info__table">
          <thead>
            <tr>
              <th>Characteristics</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{ticker}</td>
            </tr>
            <tr>
              <td>Exchange</td>
              <td>{exchange}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{`${price}$`}</td>
            </tr>
            <tr>
              <td>Change</td>
              <td>{`${change}$`}</td>
            </tr>
            <tr>
              <td>Percent</td>
              <td>{change_percent}</td>
            </tr>
            <tr>
              <td>Divined</td>
              <td>{dividend}</td>
            </tr>
            <tr>
              <td>Last taken</td>
              <td>{new Date(last_trade_time).toDateString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceInfo;
