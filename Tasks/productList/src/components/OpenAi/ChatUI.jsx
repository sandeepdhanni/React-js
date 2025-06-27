import React, { useState } from 'react';



const ChatUI = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are chatting with an AI assistant.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:2000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: updatedMessages })
      });

      const data = await res.json();
      console.log(data);
      if (data?.reply) {
        setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-header">OpenAI Chat</h1>
      <div className="chat-box">
        <div className="chat-scroll">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <p><strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}</p>
            </div>
          ))}
          {loading && (
            <div className="loading">AI is typing...</div>
          )}
        </div>
      </div>
      <div className="chat-input-area">
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="chat-button" onClick={handleSend} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatUI;