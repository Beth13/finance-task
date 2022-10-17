export const FINANCE_RECEIVED = "FINANCE_RECEIVED";

export const financeReceived = (finance) => {
  const action = {
    type: FINANCE_RECEIVED,
    payload: {
      finance,
    },
  };

  return action;
};
