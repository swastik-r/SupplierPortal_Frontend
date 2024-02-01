import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar() {
   return (
      <div className="search-bar">
         <input type="text" placeholder="Search..." className="search-input" />
         <button type="submit" className="search-button">
            <FaSearch />
         </button>
      </div>
   );
}
