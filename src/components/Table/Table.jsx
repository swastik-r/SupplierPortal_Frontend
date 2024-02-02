/* eslint-disable react/prop-types */
import "./Table.css";

export default function Table({
   data,
   headers,
   enableCheckboxes,
   handleRowSelect,
   selectedRows,
   selectAll,
   handleSelectAll,
}) {
   if (!data || data.length === 0) {
      return <p>No data available.</p>;
   }

   return (
      <div className="table-container">
         <table>
            <thead>
               <tr>
                  <th>
                     {enableCheckboxes && (
                        <input
                           type="checkbox"
                           checked={selectAll}
                           onChange={handleSelectAll}
                        />
                     )}
                  </th>
                  {headers.map((header, index) => (
                     <th key={index}>{Object.values(header)[0]}</th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                     <td>
                        {enableCheckboxes && (
                           <input
                              type="checkbox"
                              checked={selectedRows.includes(row.itemId)}
                              onChange={() => handleRowSelect(row.itemId)}
                           />
                        )}
                     </td>
                     {headers.map((header, colIndex) => (
                        <td key={colIndex}>{row[Object.keys(header)[0]]}</td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
