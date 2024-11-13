import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar px-12 h-full">
        <div className="logo h-[8vh] text-4xl gap-3 flex items-center justify-center pt-3">
          <img className="logo-icon h-10 w-10 " src="./Logo.png" alt="" />
          <div className="logo-name font-semibold">
            <span className="text-[#FF5656]">Dream</span>Music
          </div>
        </div>
        <div className="menu flex flex-col justify-between h-[92vh] py-12 ">
          <div className="menu-top">
            <div className="text-[10px] font-normal pb-3 info">MENU</div>
            <div className="font-medium flex flex-col gap-4 menu-items">
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src="./home.png" alt="" />
                <div className="menu-item">Home</div>
              </div>
              <div className="flex gap-3 items-center ">
                <img className="h-5 w-5" src="./trends.png" alt="" />
                <div className="menu-item">Trends</div>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src="./music.png" alt="" />
                <div className="menu-item">Library</div>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src="./explore.png" alt="" />
                <div className="menu-item">Discover</div>
              </div>
            </div>
          </div>
          <div className="menu-bottom">
            <div className="text-[10px] font-normal pb-3 info">General</div>
            <div className="font-medium flex flex-col gap-4 menu-items">
              <div className="flex gap-3 items-center">
              <img className="h-5 w-5" src="./Settings.png" alt="" />
                <div className="menu-item">Settings</div>
              </div>
              <div className="flex gap-3 items-center">
              <img className="h-5 w-5" src="./Logout.png" alt="" />
                <div className="menu-item">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
