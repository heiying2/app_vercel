import ChatBox from "../components/ChatBox";

export default function Procurement() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">採購顧問模組</h1>
      <p className="mb-4 text-gray-600">
        提供選品策略、供應鏈成本估算與庫存控制建議，提升經營效率。
      </p>
      <ChatBox apiUrl="https://你的後端域名/procurement" />
    </div>
  );
}
