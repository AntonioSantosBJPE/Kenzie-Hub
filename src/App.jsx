import { GlobalStyle } from "./styles/global";
import { RoutesApp } from "./routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
export function App() {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <RoutesApp setLoggedUser={setLoggedUser} loggedUser={loggedUser} />
    </div>
  );
}
