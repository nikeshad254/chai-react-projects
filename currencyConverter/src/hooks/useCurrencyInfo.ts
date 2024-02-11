import { useEffect, useState } from "react";

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data[currency]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
