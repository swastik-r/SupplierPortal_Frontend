import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ItemListing from "./routes/ItemListing/ItemListing";

export default function App() {
   return (
      <div className="app">
         <Header />
         <Routes>
            <Route index element={<ItemListing />}></Route>
         </Routes>
      </div>
   );
}
