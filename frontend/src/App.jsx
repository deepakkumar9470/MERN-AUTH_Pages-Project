import "./App.css";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
