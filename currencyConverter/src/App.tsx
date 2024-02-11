import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputContainer } from "./components";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const options = Object.keys(currencyInfo);

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  return (
    <>
      <h1 className=" text-3xl text-center mb-4 mt-8">
        Currency Conversion App
      </h1>

      <div className=" flex flex-col gap-4 bg-slate-100 max-w-2xl mx-auto p-8 rounded-lg ">
        <div className=" relative flex flex-col gap-1">
          <InputContainer
            label="from"
            amount={amount}
            currencyOptions={options}
            onAmountChange={setAmount}
            onCurrencyChange={setFromCurrency}
            selectCurrency={fromCurrency}
          />
          <button
            className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg border-4 border-slate-100"
            onClick={swapCurrency}
          >
            Swap
          </button>
          <InputContainer
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            onAmountChange={setConvertedAmount}
            onCurrencyChange={setToCurrency}
            selectCurrency={toCurrency}
          />
        </div>
        <button
          className=" bg-blue-500 rounded-md text-white py-2 font-bold"
          onClick={convertCurrency}
        >
          Convert Currency {fromCurrency.toUpperCase()} to{" "}
          {toCurrency.toUpperCase()}
        </button>
      </div>
    </>
  );
}

export default App;
