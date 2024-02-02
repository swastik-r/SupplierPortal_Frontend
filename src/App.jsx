import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ItemListing from "./routes/ItemListing/ItemListing";
import PageHeader from "./components/PageHeader/PageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import EditItem from "./components/EditItem/EditItem";

export default function App() {
   return (
      <div className="app">
         <Header />
         <div className="page">
            {/* Modify the page header based on the route */}
            <Routes>
               <Route index element={<ItemListing />} />
               <Route path="/edit" element={<EditItem />} />
            </Routes>
         </div>
      </div>
   );
}
