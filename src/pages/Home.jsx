import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // 更新本地訊息
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // 呼叫後端 FastAPI (假設路徑 /chat)
    const res = await fetch("https://你的後端域名/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();

    setMessages([...newMessages, { role: "assistant", content: data.reply }]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI 電商顧問</h1>

      {/* Chatbox 區域 */}
      <div className="border rounded-lg p-4 h-96 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-blue-600" : "text-green-600"}>
            <b>{msg.role === "user" ? "你：" : "AI："}</b> {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="border rounded flex-1 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="輸入你的問題..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded"
          onClick={sendMessage}
        >
          送出
        </button>
      </div>

      {/* 顧問選擇 */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">選擇顧問模組：</h2>
        <div className="flex gap-4">
          <Link to="/marketing" className="px-4 py-2 bg-pink-400 text-white rounded">行銷顧問</Link>
          <Link to="/finance" className="px-4 py-2 bg-green-400 text-white rounded">財務顧問</Link>
          <Link to="/procurement" className="px-4 py-2 bg-yellow-400 text-white rounded">採購顧問</Link>
        </div>
      </div>
    </div>
  );
}

