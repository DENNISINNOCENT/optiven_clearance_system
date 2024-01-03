import React, { useEffect } from "react";
import { getUsers } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Userview = () => {
  const usersData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  });
  console.log(usersData)

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Contact
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {usersData.users.map((user) =>(
                 <tr key={user.user_id}>
                 <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {user.first_name}
                 </td>
                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                   {user.user_email}
                 </td>
                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {user.user_role}
                 </td>
                 <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user.user_contact}
                 </td>
                 <td className="whitespace-nowrap px-4 py-2">
                   <a
                     href="#"
                     className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 m-3"
                   >
                     Edit
                   </a>
                   <a
                     href="#"
                     className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 m-3"
                   >
                     Delete
                   </a>
                 </td>
               </tr>
            ) )}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userview;
