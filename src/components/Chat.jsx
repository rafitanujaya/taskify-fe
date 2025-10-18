const Chat = ({id, message, senderType}) => {
  return (
    <div className="flex justify-start">
      <div className="max-w-md p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line bg-white text-gray-800 rounded-bl-none border border-gray-200 ">
        Hello! I’m Orbit, your AI assistant 👋 {`\n`} How can I help you today?
      </div>
    </div>
  );
};

export default Chat;


{/* <div className="flex justify-start">
    <div className="max-w-md p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line bg-white text-gray-800 rounded-bl-none border border-gray-200 ">
        Hello! I’m Orbit, your AI assistant 👋 {`\n`} How can I help you today?
    </div>
</div>

<div className="flex justify-end">
    <div className="max-w-md p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line bg-blue-600 text-white rounded-br-none border border-gray-200 ">
        Mau makan bang hehehe
    </div>
</div> */}