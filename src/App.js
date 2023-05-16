import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "./layout/sidebar";
import Discount from "./pages/discount";
import Graph from "./pages/graph";
import Home from "./pages/home";
import Notification from "./pages/notification";
import Message from './pages/message';
import ContextProvider from './services/context-store';
import Cart from './layout/cart';


function App() {

  return (
    <ContextProvider>
      <Sidebar />
      <Cart />
      <Home />
      {/* <h1 className="container text-white text-center">Function</h1> */}
      {/* <Discount /> */}
      {/* <Graph /> */}
      {/* <Message /> */}
      {/* <Notification /> */}
      {/* <h1 className="container text-white text-center">Cart</h1> */}
      {/* <h1 className="container text-white text-center">User</h1> */}
    </ContextProvider>
  );
}

export default App;
