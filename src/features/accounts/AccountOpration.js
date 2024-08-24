import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";
import Balance from "./Balance";

export default function AccountOpration() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpos,
    balance,
    isLoadiing,
  } = useSelector((store) => store.account);
  console.log(balance);

  const disPatch = useDispatch();

  function handelDeposit() {
    if (!depositAmount) return;
    disPatch(deposit(depositAmount, currency));
    // disPatch(deposit(depositAmount));
    setDepositAmount("");
    setCurrency("");
  }
  function handelWithdraw() {
    if (!withdrawAmount) return;
    disPatch(withdraw(withdrawAmount));
    setWithdrawAmount("");
  }
  function handelRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    disPatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }
  function handelPayLoan() {
    // if (!loanAmount) return;
    disPatch(payLoan(loanAmount));
  }
  return (
    <>
      <Balance />
      <h4> your account operations </h4>
      <div className="inputs">
        <div>
          {" "}
          <label> DEPOSIT </label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">us Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British pound</option>
          </select>
          <button onClick={handelDeposit} disabled={isLoadiing}>
            {isLoadiing ? "Converting..." : `Deposit ${depositAmount}`}
          </button>
        </div>
        <div>
          {" "}
          <label> Withdraw </label>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) =>
              setWithdrawAmount(
                e.target.value > balance ? withdrawAmount : +e.target.value
              )
            }
          />
          <button onClick={handelWithdraw}> WITHDRAW {withdrawAmount}</button>
        </div>
        <div>
          {" "}
          <label> Request loan </label>
          <input
            type="number"
            placeholder="loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
          <input
            type="text"
            placeholder="loan purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <button onClick={handelRequestLoan}> REQUEST LOAN </button>
        </div>
        {currentLoan > 0 && (
          <div>
            <label>
              {" "}
              pay back ${currentLoan} ({currentLoanPurpos}){" "}
            </label>
            <button onClick={handelPayLoan}> PAY LOANS </button>
          </div>
        )}
      </div>
    </>
  );
}
