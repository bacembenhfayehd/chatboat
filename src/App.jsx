import React from "react";
import ChatbotIcon from "./component/ChatbotIcon";

function App() {
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
      <div className="chatbot-body">

        <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">Salut 👋 Comment puis-je t'aider aujourd'hui ?</p>
        </div>

        <div className="message user-message">
          <p className="message-text">Ceci le message de client</p>
          
        </div>

        </div>

        {/*chatbot footer*/}
        <div className="chat-footer">
          <form action="" className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required/>
            <button className="material-symbols-rounded">arrow_upward</button>
          </form>
        </div>


      </div>
      </div>
    
  );
}

export default App;
