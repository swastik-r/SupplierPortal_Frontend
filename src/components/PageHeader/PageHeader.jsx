/* eslint-disable react/prop-types */
import "./PageHeader.css";

export default function PageHeader({ pageTitle }) {
   return (
      <div className="pageHeader">
         <h2>{pageTitle}</h2>
      </div>
   );
}
