import React from "react";

const Sidebar = ({ classname, sectionList, selectedSection,handleChange }) => {
  console.log(sectionList);
  return (
    <aside
      className={`min-h-screen ${classname}  border-r-2 flex flex-col p-4 gap-2   `}
    >
      {sectionList?.map((sectionName, index) => (
        <div
          key={index}
          className={`px-4 py-2 font-medium text-center rounded-full border-2 transition-all cursor-pointer ${
            selectedSection === index ? "bg-sky-300" : ""
          }`}
          onClick={()=>{
            handleChange(index);
          }}
        >
          {" "}
          {sectionName.name}{" "}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
