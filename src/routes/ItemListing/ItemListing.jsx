import "./ItemListing.css";
import { useState, useEffect } from "react";
import { FaFileExport, FaFilter, FaSort } from "react-icons/fa";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";

export default function ItemListing() {
   const data = [
      {
         itemId: "001",
         itemName: "Product A",
         sku: "SKU001",
         price: "₹ 19.99",
         category: "Electronics",
         status: "In Stock",
         removeItemFlag: "No",
      },
      {
         itemId: "002",
         itemName: "Product B",
         sku: "SKU002",
         price: "₹ 29.99",
         category: "Clothing",
         status: "Out of Stock",
         removeItemFlag: "Yes",
      },
      {
         itemId: "003",
         itemName: "Product C",
         sku: "SKU003",
         price: "₹ 49.99",
         category: "Home & Kitchen",
         status: "In Stock",
         removeItemFlag: "No",
      },
      {
         itemId: "004",
         itemName: "Product D",
         sku: "SKU004",
         price: "₹ 14.99",
         category: "Sports & Outdoors",
         status: "In Stock",
         removeItemFlag: "No",
      },
      {
         itemId: "005",
         itemName: "Product A",
         sku: "SKU001",
         price: "₹ 19.99",
         category: "Electronics",
         status: "In Stock",
         removeItemFlag: "No",
      },
      {
         itemId: "006",
         itemName: "Product A",
         sku: "SKU001",
         price: "₹ 19.99",
         category: "Electronics",
         status: "In Stock",
         removeItemFlag: "No",
      },
      {
         itemId: "001",
         itemName: "Product A",
         sku: "SKU001",
         price: "₹ 19.99",
         category: "Electronics",
         status: "In Stock",
         removeItemFlag: "No",
      },
      {
         itemId: "001",
         itemName: "Product A",
         sku: "SKU001",
         price: "₹ 19.99",
         category: "Electronics",
         status: "In Stock",
         removeItemFlag: "No",
      },
   ];
   const costChange_headers = [
      { itemId: "Item ID" },
      { sku: "SKU" },
      { category: "Category" },
      { price: "Price" },
      { status: "Status" },
   ];

   // Data and functions for Item Listing Table selections
   const [selectAll, setSelectAll] = useState(false);
   const [selectedRows, setSelectedRows] = useState([]);

   function handleSelectAll() {
      setSelectAll(!selectAll);
      setSelectedRows(selectAll ? [] : data.map((row) => row.itemId));
      console.log(selectAll);
   }

   function handleRowSelect(itemId) {
      const updatedSelectedRows = selectedRows.includes(itemId)
         ? selectedRows.filter((id) => id !== itemId)
         : [...selectedRows, itemId];
      setSelectedRows(updatedSelectedRows);
      console.log(updatedSelectedRows);
   }

   // A useEffect hook to uncheck the selectAll checkbox if selectedRows is empty
   useEffect(() => {
      if (selectedRows.length === 0) {
         setSelectAll(false);
      }
   }, [selectedRows]);

   return (
      <div className="page">
         <PageHeader pageTitle="Item Listing" />
         <SearchBar />

         <div className="misc-div">
            <div className="misc-buttons-div">
               <div style={{ display: "flex", flexDirection: "column" }}>
                  <button className="misc-button">Upload File</button>
                  <span className="misc-span">File Format: .csv / .xls</span>
               </div>

               <button className="misc-button">Populate Items</button>
               <button className="misc-button">Download Template</button>
            </div>
         </div>

         <div className="table-div">
            <div className="misc-buttons-div">
               <div className="table-buttons-div">
                  <button className="table-button">
                     Export&nbsp;&nbsp;
                     <FaFileExport size={15} />
                  </button>
                  <button className="table-button">
                     Filter&nbsp;
                     <FaFilter size={13} />
                  </button>
                  <button className="table-button">
                     Sort&nbsp;
                     <FaSort size={15} />
                  </button>
               </div>
            </div>

            <Table
               data={data}
               headers={costChange_headers}
               enableCheckboxes={true}
               selectAll={selectAll}
               handleSelectAll={handleSelectAll}
               selectedRows={selectedRows}
               handleRowSelect={handleRowSelect}
            />

            <div className="misc-div">
               <button
                  disabled={selectedRows.length === 0}
                  className={`${selectedRows.length === 0 ? "disabled" : ""}`}
               >
                  Edit the Selected Items
               </button>
            </div>
         </div>
      </div>
   );
}
