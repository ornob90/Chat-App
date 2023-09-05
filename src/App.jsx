import { useRef, useState } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Auth from "./components/Auth";
import viteLogo from "/vite.svg";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  } else {
    return (
      <div>
        {room ? (
          <div>Chat </div>
        ) : (
          <div className="room">
            <label>Enter Room Name</label>
            <input ref={roomInputRef} type="text" />
            <button onClick={() => setRoom(roomInputRef.current.value)}>
              Enter Chat
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
