import React from 'react';
import "./SidebarOption.css";

/* turn blue on hover; components are capitalized */
function SidebarOption({ active, text, Icon}) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}> 
        <Icon />
        <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;