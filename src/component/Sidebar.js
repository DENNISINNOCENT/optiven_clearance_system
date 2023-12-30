import React from "react";
import { useState } from "react";
const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };
  return (
    <>
    <div className={`mt-8 bg-green-600 h-full ${isSidebarVisible ? 'w-1/2' : 'w-0'} sm:w-1/3 md:w-1/4 lg:w-1/5 fixed left-0 top-0 bottom-0 overflow-y-auto transition-width duration-300`}>
      {isSidebarVisible && (
        <>
        <h1 className="font-extrabold text-2xl mb-2 mt-8 font-serif">Welcome Admin</h1>
      
      <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full text-xl font-serif  p-4 " >
      
        <details open>
        <summary className="font-semibold" role="button" aria-expanded="true" aria-controls="users-section">Users</summary>
          <ul>
            <li> <span className="mr-2">👥</span> Register Users</li>
            <li><span className="mr-2">👥</span>View Users</li>
          </ul>
        </details>
        <details open>
          <summary className="font-semibold">Applications</summary>
          <ul>
            <li>View Applications</li>
          </ul>
        </details>
        <details>
          <summary className="font-semibold">Approvals</summary>
          <ul>
            <li>View Approvals</li>
          </ul>
        </details>
        <details open>
            <summary className="font-semibold">
                Reports
            </summary>
                <ul>
                    <li>
                      Employees Reports
                    </li>
                </ul>
           
        </details>
      </ul>
      </>
      )},
      
    </div>
    <button
    className="sm:hidden absolute top-4 right-4 text-black"
    onClick={toggleSidebar}
    aria-label={isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
  >
    
    {isSidebarVisible ? 'Hide' : 'Show'} Sidebar
  </button>
  </>
  );
};

export default Sidebar;
