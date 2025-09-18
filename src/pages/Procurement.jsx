import { useState } from "react";
import { getProcurementAdvice } from "../api";

export default function Procurement() {
  const [stock, setStock] = useState(0);
  const [forecast, setForecast] = useState(0);
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    const data = await getProcurementAdvice(stock, forecast);
    setResult(data);
  };

  return (
    <div>
      <h2>採購顧問</h2>
      <input type="number" value={stock} onChange={e => setStock(Number(e.target.value))} placeholder="現有庫存"/>
      <input type="number" value={forecast} onChange={e => setForecast(Number(e.target.value))} placeholder="銷售預測"/>
      <button onClick={handleClick}>分析</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

