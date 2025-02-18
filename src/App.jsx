import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./component/ChatbotIcon";
import ChatForm from "./component/ChatForm";
import ChatMesssage from "./component/ChatMesssage";


function App() {
  const [chatHistory,setChatHistory] = useState([]);
  const chatBodyRef = useRef();
  const generateBotResponse = async (history) => {

    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== 'Thinking...'),{role:'model',text}])
    }
    
    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: history.map(({ role, text }) => ({
          role,
          parts: [{ text }]
        }))
      })
    };

    try {

      const response = await fetch(import.meta.env.VITE_API_URL,requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error (data.error || 'something went wrong!');
      

      //clean and update the chat history with bot response

      const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
      updateHistory(apiResponse); 
    } catch (error) {
      console.error(error)
      
    }
  }

  useEffect(()=> {

    chatBodyRef.current.scrollTo({top:chatBodyRef.current.scrollHeight, behavior:'smooth'})

  },[chatHistory])
  return (
    <div className="container">
      {/*chatbot header*/}
      <div className="chatbot-popup">

        <div className="chatbot-header">
          <div className="header-info">
          <ChatbotIcon className="x" />
          <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

      {/*chatbot body*/}
      <div ref={chatBodyRef} className="chatbot-body">

        <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">Salut 👋 Comment puis-je t'aider aujourd'hui ?</p>
        </div>

        {/*render client message dynamically */}
        {chatHistory.map((chat,index) => (
        <ChatMesssage key={index} chat={chat}/>
         ))}

        </div>

        {/*chatbot footer*/}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>


      </div>
      </div>
    
  );
}

export default App;
