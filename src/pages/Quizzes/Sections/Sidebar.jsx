import React from "react";

const Sidebar = ({ classname, sectionList, selectedSection,handleChange }) => {
  console.log(sectionList);
  return (
    <aside
      className={` h-fit w-full overflow-x-scroll flex-row md:min-h-screen ${classname} max-md:border-b-2 max-md:py-2 px-4  md:border-r-2 flex md:flex-col md:p-4 mx-auto gap-2   `}
    >
      {sectionList?.map((sectionName, index) => (
        <div
          key={index}
          className={`px-4 max-md:text-nowrap py-2 max-md:text-sm font-medium text-center rounded-full border-2 transition-all cursor-pointer ${
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
