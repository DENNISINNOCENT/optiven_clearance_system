import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div
        className={` bg-green-600 h-full ${
          isSidebarVisible ? "w-1/2" : "w-0"
        } sm:w-1/3 md:w-1/4 lg:w-1/5 fixed left-0 top-0 bottom-0 overflow-y-auto transition-width duration-300`}
      >
        {isSidebarVisible && (
          <>
            <h1 className="font-extrabold text-2xl mb-2 mt-8 font-serif px-4">
              Welcome Admin
            </h1>

            <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full text-xl font-serif p-4">
              <details open>
                <summary
                  className="font-semibold"
                  role="button"
                  aria-expanded="true"
                  aria-controls="users-section"
                >
                  Users
                </summary>
                <ul>
                  <li>
                    <span role="img" aria-label="Register Users" className="mr-2">
                      👥
                    </span>{" "}
                    <Link to= "/admin/users">Register Users</Link>
                   
                  </li>
                  <li>
                    <span role="img" aria-label="View Users" className="mr-2">
                      👥
                    </span>
                    <Link to ="/admin/view-users">View Users</Link>
                   
                  </li>
                </ul>
              </details>
              <details >
                <summary className="font-semibold">Applications</summary>
                <ul>
                  <li>
                    <span role="img" aria-label="Apply" className="mr-2">
                      📝
                    </span>{" "}
                    
                    <Link to ="/admin/employeeform">Apply</Link>
                  </li>
                  <li>
                    <span role="img" aria-label="View Applications" className="mr-2">
                      👀
                    </span>
                    <Link to ='/admin/view-applications'> View Applications</Link>
                   
                  </li>
                </ul>
              </details>
              <details>
                <summary className="font-semibold">Approvals</summary>
                <ul>
                  <li>View Approvals</li>
                </ul>
              </details>
              <details >
                <summary className="font-semibold">Reports</summary>
                <ul>
                  <li>
                    <span role="img" aria-label="Employees Reports" className="mr-2">
                      📊
                    </span>{" "}
                    Employees Reports
                  </li>
                </ul>
              </details>
            </ul>
            <ul className="">
              <li>
                <Link
                  to="/"
                  className="px-2 m-2 text-xl font-semibold font-serif"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
      <button
        className="sm:hidden absolute top-4 right-4 text-white bg-green-600 p-2 rounded-md"
        onClick={toggleSidebar}
        aria-label={isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
        aria-pressed={isSidebarVisible}
      >
        {isSidebarVisible ? "Hide" : "Show"} Sidebar
      </button>
    </>
  );
};

export default Sidebar;
