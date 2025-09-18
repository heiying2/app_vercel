import { useState } from "react";
import Marketing from "./pages/Marketing";
import Finance from "./pages/Finance";
import Procurement from "./pages/Procurement";

export default function App() {
  const [page, setPage] = useState("marketing");

  return (
    <div>
      <nav>
        <button onClick={() => setPage("marketing")}>行銷</button>
        <button onClick={() => setPage("finance")}>財務</button>
        <button onClick={() => setPage("procurement")}>採購</button>
      </nav>

      <div>
        {page === "marketing" && <Marketing />}
        {page === "finance" && <Finance />}
        {page === "procurement" && <Procurement />}
      </div>
    </div>
  );
}
