import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase/config";
import "../styles/Chat.css";

const Chat = ({ room }) => {
  const [newMessage, setNewMessage] = useState("");

  const messagesRef = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <form className="new_message_form" onSubmit={handleSubmit}>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
