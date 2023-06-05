import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

function Items(props) {
    
  return (
    <>
      <span className="items">
        <CancelIcon className="delete" onClick={() =>{
          props.onSelect(props.id)
        }} />
        <li>{props.datavalue}</li>
      </span>
    </>
  );
}
export default Items;
