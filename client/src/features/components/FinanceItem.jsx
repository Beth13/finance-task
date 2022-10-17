import React, { useState } from "react";

import "../styles/financeItem.css";
import FinanceInfo from "./FinanceInfo";

function FinanceItem({ financeInfo }) {
  const [isInfo, setIsInfo] = useState(false);

  const toogleInfo = () => {
    setIsInfo(!isInfo);
  };

  return (
    <div className="finance-item">
      <ul className="finance-item__list">
        <li className="finance-item__list-item">
          <span className="finance-item__list-item__span">
            {financeInfo.ticker}
          </span>
          <span className="finance-item__list-item__span">
            {financeInfo.exchange}
          </span>
          <span className="finance-item__list-item__span">
            {`${financeInfo.price}$`}
          </span>
          <span className="finance-item__list-item__span">
            {`${financeInfo.change}$`}
          </span>
          <span className="finance-item__list-item__span">
            {financeInfo.change_percent}
          </span>
        </li>
      </ul>
      <button className="finance-item__btn" onClick={toogleInfo}>
        See more
      </button>
      {isInfo && (
        <FinanceInfo toogleInfo={toogleInfo} financeInfo={financeInfo} />
      )}
    </div>
  );
}

export default FinanceItem;
