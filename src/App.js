import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Description from "./components/Description";
import Favourites from "./components/Favourites";
import { Toaster } from "sonner";
import LoginView from "./Views/LoginView";
import NoPage from "./components/NoPage";
import Orders from "./components/Orders";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route index path="/" element={<Products />} />
        <Route path="/product/:id" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/orders"
          element={
            <LoginView>
              <Orders />
            </LoginView>
          }
        />
        <Route
          path="/favourites"
          element={
            <LoginView>
              <Favourites />
            </LoginView>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
