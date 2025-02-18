import React from 'react'
import ChatbotIcon from './ChatbotIcon'


function ChatMesssage({chat}) {
    console.log(chat)
  return (
    <div className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message`}>
      {chat.role === 'model' && <ChatbotIcon />}
      <p className="message-text">{chat.text}</p>
    </div>
  )
}

export default ChatMesssage