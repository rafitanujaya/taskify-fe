import { Bot, Send } from "lucide-react"

const ChatPage = () => {

    const handleKeyDown = (e) => {
    // Shift + Enter makes new line
    if (e.key === 'Enter' && e.shiftKey) return
    // Enter without shift sends message
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  return (
    <div className="w-full h-full flex flex-col bg-gray-50">
        {/* Header */}
        <header className="p-6 bg-white border-b border-gray-300 flex items-center gap-2 shadow-md">
            <Bot className="w-6 h-6 text-blue-600"/>
            <h1 className="font-semibold text-gray-800 text-lg">Orbit Chat</h1>
        </header>
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="flex justify-start">
                <div className="max-w-md p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line bg-white text-gray-800 rounded-bl-none border border-gray-200 ">
                    Hello! I’m Orbit, your AI assistant 👋 {`\n`} How can I help you today?
                </div>
            </div>

            <div className="flex justify-end">
                <div className="max-w-md p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line bg-blue-600 text-white rounded-br-none border border-gray-200 ">
                    Mau makan bang hehehe
                </div>
            </div>
        </div>

        {/* Input Text Area */}
        <div className="px-4 pt-4 pb-2 bg-white border-t border-gray-200 flex items-center gap-3">
            <textarea
                placeholder="Type your message...."
                rows={1}
                handleKeyDown={handleKeyDown}
                className="flex-1 border border-gray-300 rounded-xl px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onInput={(e) => {
                    e.target.style.height = 'auto',
                    e.target.style.height = `${Math.min(e.target.scrollHeight, 128)}px`
                }}
            />
            <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition cursor-pointer">
                <Send className="w-5 h-5"/>
            </button>
        </div>
        <p className="mb-2 text-sm text-gray-500 italic text-center">chatbot is still in testing phase</p>
    </div>
  )
}

export default ChatPage
