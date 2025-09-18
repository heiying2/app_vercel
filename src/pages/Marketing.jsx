import ChatBox from "../components/ChatBox";

export default function Marketing() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">行銷顧問模組</h1>
      <p className="mb-4 text-gray-600">
        透過社群資料（IG、小紅書）分析市場趨勢、受眾特性，並提供行銷策略建議。
      </p>
      <ChatBox apiUrl="https://你的後端域名/marketing" />
    </div>
  );
}
