import Main from "./screens/MainScreen";
import Login from "./screens/LoginScreen";
import Register from "./screens/RegisterScreen";
import { useState } from "react";

export default function App() {
  // Theres only three different "screens"
  // login, register and (mainscreen which contains a few modals)
  const [currentScreen, setCurrentScreen] = useState("");

  switch (currentScreen) {
    case "register":
      return (
        <Register
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      );
    case "main":
      return (
        <Main
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      );
    default:
      return (
        <Login
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      );
  }
}
