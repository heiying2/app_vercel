import { useState } from "react";
import { getMarketingAdvice } from "../api";

export default function Marketing() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    const data = await getMarketingAdvice(keyword);
    setResult(data);
  };

  return (
    <div>
      <h2>行銷顧問</h2>
      <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="關鍵字"/>
      <button onClick={handleClick}>分析</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

