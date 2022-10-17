import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import FinanceItem from "./FinanceItem";
import * as actions from "../actions/finance.actions";
import { financeSelector } from "../actions/finance.selector";
import { io } from "socket.io-client";

import "../styles/main.css";

const localhost = io("http://localhost:4000");

const Main = ({ financeReceived, financeList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    localhost.emit("start");
    localhost.on("ticker", (data) => {
      dispatch(financeReceived(data));
    });
  }, [dispatch]);

  return (
    <div className="main">
      {financeList.map((option) => (
        <FinanceItem key={option.ticker} financeInfo={option} />
      ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    financeList: financeSelector(state),
  };
};

const mapDispatch = {
  financeReceived: actions.financeReceived,
};

export default connect(mapState, mapDispatch)(Main);
