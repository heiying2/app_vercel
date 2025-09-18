import { useState } from "react";

export default function ChatBox({ apiUrl }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();

      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error("Error:", err);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "⚠️ 系統錯誤，請稍後再試。" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 h-[500px] flex flex-col">
      {/* 訊息區 */}
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.role === "user" ? "text-blue-600" : "text-green-600"
            }`}
          >
            <b>{msg.role === "user" ? "你：" : "AI："}</b> {msg.content}
          </div>
        ))}
      </div>

      {/* 輸入區 */}
      <div className="flex gap-2">
        <input
          className="border rounded flex-1 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="輸入你的問題..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded disabled:opacity-50"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "處理中..." : "送出"}
        </button>
      </div>
    </div>
  );
}

