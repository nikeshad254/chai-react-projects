import { useId } from "react";

interface InputContainerProps {
  label: string;
  amount: number;
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
  selectCurrency: string;
  amountDisabled?: boolean;
  currencyDisabled?: boolean;
}

function InputContainer({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}: InputContainerProps) {
  const amountInputId = useId();
  const currencyInputId = useId();

  return (
    <div className=" flex justify-between bg-blue-100 rounded-md p-4">
      <div className=" flex flex-col gap-2">
        <label htmlFor={amountInputId} className=" capitalize">
          {label}
        </label>
        <input
          type="number"
          id={amountInputId}
          placeholder="currency"
          className="px-2 rounded-sm"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={currencyInputId}>Currency</label>
        <select
          id={currencyInputId}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputContainer;
