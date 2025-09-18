import ChatBox from "../components/ChatBox";

export default function Finance() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">財務顧問模組</h1>
      <p className="mb-4 text-gray-600">
        提供商品定價、資金流規劃與獲利模型，協助降低財務風險。
      </p>
      <ChatBox apiUrl="https://你的後端域名/finance" />
    </div>
  );
}
