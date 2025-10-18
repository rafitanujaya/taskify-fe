import { Bot, Send } from "lucide-react";
import { useUser } from "../hooks/useUser";
import { useEffect, useRef, useState } from "react";
import { socket } from "../lib/socket/socket";
import { sleep } from "../utils/sleep";

const ChatPage = () => {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);
  const inputFocusRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");

  useState(() => {
    if (!user) {
      return;
    }

    socket.auth = { id: user.id };
    socket.connect();

    console.log(`Socket Connected : ${socket.id}`);

    socket.on("received_message", async (msg) => {
      setMessages((prev) =>
        prev.filter((m) => !m.id.toString().startsWith("thinking-"))
      );

      setIsTyping(true);
      setTypingText("");

      
      await typeTextEffect(msg);
    });

    socket.on("chat_history", (history) => {
      setMessages(history ?? []);
    });

    socket.emit("load_history", user.id);

    return () => {
      socket.off("receive_message");
      socket.off("chat_history");
      socket.disconnect();
      console.log("Socket Disconnected");
    };
  }, [user]);

  useEffect(() => {
    inputFocusRef.current.focus();
  }, []);

  useEffect(() => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth", // bikin animasi lembut
    });
  }, [messages]);

  const handleKeyDown = (e) => {
    // Shift + Enter makes new line
    if (e.key === "Enter" && e.shiftKey) return;
    // Enter without shift sends message
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (!input.trim()) {
      return;
    }

    const newMsg = {
      id: Date.now(),
      senderType: "user",
      message: input,
    };

    setMessages((prev) => [...prev, newMsg]);

    const thinkingMsg = {
      id: `thinking-${Date.now()}`,
      senderType: "bot",
      message: "Orbit Sedang Berpikir....",
    };
    setMessages((prev) => [...prev, thinkingMsg]);

    socket.emit("send_message", user.id, input);

    setInput("");
  };

  const typeTextEffect =  async (msg) => {
    await sleep(2000)
    const text = msg.message;
    let index = 0;

    const interval = setInterval(() => {
      setTypingText((prev) => prev + text[index]);
      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);

        setMessages((prev) => [
          ...prev,
          { id: msg.id, senderType: msg.senderType, message: text },
        ]);
        setTypingText("");
      }
    }, 25);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-50">
      {/* Header */}
      <header className="p-6 bg-white border-b border-gray-300 flex items-center gap-2 shadow-md">
        <Bot className="w-6 h-6 text-blue-600" />
        <h1 className="font-semibold text-gray-800 text-lg">Orbit Chat</h1>
      </header>
      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-4"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.senderType === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-md p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line border ${
                msg.senderType === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}

        {/* Orbit Typing */}

        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-md p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line bg-white text-gray-800 rounded-bl-none border border-gray-200">
              {typingText || (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                  <span className="ml-2 text-gray-500 text-xs italic">
                    Orbit Sedang Mengetik
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Input Text Area */}
      <div className="px-4 pt-4 pb-2 bg-white border-t border-gray-200 flex items-center gap-3">
        <textarea
          placeholder="Type your message...."
          ref={inputFocusRef}
          rows={1}
          onKeyDown={handleKeyDown}
          className="flex-1 border border-gray-300 rounded-xl px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onInput={(e) => {
            (e.target.style.height = "auto"),
              (e.target.style.height = `${Math.min(
                e.target.scrollHeight,
                128
              )}px`);
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition cursor-pointer"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      <p className="mb-2 text-sm text-gray-500 italic text-center">
        chatbot is still in testing phase
      </p>
    </div>
  );
};

export default ChatPage;
