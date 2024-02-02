/* eslint-disable react/prop-types */

import PageHeader from "../PageHeader/PageHeader";
import "./EditItem.css";
import { useLocation } from "react-router-dom";

export default function EditItem() {
   const location = useLocation();
   const { selectedRows } = location.state || {};
   const { data } = location.state || {};
   const editFrame_headers = {
      itemId: "Item #",
      description: "Item Description",
      sku: "SKU",
      category: "Category",
      status: "Status",
      imageUrl: "",
   };

   return (
      <>
         <PageHeader title="Edit Item" />
         <div className="edit-body">
            {/* Map the item id from the selected Rows array */}
            {selectedRows.map((itemId) => (
               <EditFrame
                  key={itemId}
                  itemId={itemId}
                  editFrame_headers={editFrame_headers}
                  data={data}
               />
            ))}
         </div>
      </>
   );
}

function EditFrame({ itemId, editFrame_headers, data }) {
   // Show the details mentioned in editFrame_headers for the itemId using data
   return (
      <div className="edit-frame">
         {/* Heading */}
         <h2>Edit Item {itemId}</h2>

         {data.map((item) => {
            if (item.itemId === itemId) {
               return (
                  <div key={item.itemId}>
                     {/* Edit Frame: LEFT */}
                     <div className="edit-frame-left">
                        {/* Use Object.keys to display all attributes mentioned in the editFrame_headers using data */}
                        {Object.keys(editFrame_headers).map((key) => (
                           <div key={key} className="edit-detail">
                              <span className="edit-detail-field">
                                 {editFrame_headers[key]}:
                              </span>
                              <span className="edit-detail-field-info">
                                 {item[key]}
                              </span>
                           </div>
                        ))}
                     </div>
                     {/* Edit Frame: RIGHT */}
                     <div className="edit-frame-right">
                        <img src={item.imageUrl} alt="Item Image" />
                     </div>
                  </div>
               );
            }
         })}
      </div>
   );
}
