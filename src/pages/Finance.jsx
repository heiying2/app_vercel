import { useState } from "react";
import { getFinanceAdvice } from "../api";

export default function Finance() {
  const [cost, setCost] = useState(0);
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    const data = await getFinanceAdvice(cost, price);
    setResult(data);
  };

  return (
    <div>
      <h2>財務顧問</h2>
      <input type="number" value={cost} onChange={e => setCost(Number(e.target.value))} placeholder="成本"/>
      <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} placeholder="售價"/>
      <button onClick={handleClick}>分析</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

