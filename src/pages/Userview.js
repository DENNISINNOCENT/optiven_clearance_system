import React, { useEffect } from "react";
import { getUsers } from "../redux/userSlice";
import { useDispatch,useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { deleteUsers } from "../redux/userSlice";


const UserView = () => {
  const usersData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  // console.log(usersData);

  return (
    <div>
      <div className=" font-[Poppin] mt-12">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white rounded-lg ">
          <thead className="ltr:text-left rtl:text-right ">
            <tr>
              <th className=" px-4 py-2 font-bold text-xl text-gray-900 ">
                Name
              </th>
              <th className=" px-4 py-2 text-xl text-gray-900 font-bold">
                Email
              </th>
              <th className=" px-4 py-2 text-xl text-gray-900 font-bold">
                Role
              </th>
              <th className=" px-4 py-2 text-xl text-gray-900 font-bold">
                Contact
              </th>
              <th className=" px-4 py-2 text-xl text-gray-900 font-bold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {usersData.users &&
              usersData.users.map((user) => (
                <tr key={user.user_id}>
                  <td className=" px-4 py-2 font-medium text-gray-900 text-lg">
                    {user.first_name} {user.middle_name} {user.surname}
                  </td>
                  <td className=" px-4 py-2 font-medium text-gray-700 text-lg">
                    {user.user_email}
                  </td>
                  <td className=" px-4 py-2 font-medium text-gray-700 text-lg">
                    {user.user_role}
                  </td>
                  <td className=" px-4 py-2 font-medium text-gray-700 text-lg">
                    {user.user_contact}
                  </td>
                  <td className=" px-4 py-2 font-medium text-lg" >
                    <Link
                      to={`/admin/edit/${user.user_id}`}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 m-3"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => dispatch(deleteUsers(user.user_id))}
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 m-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserView;
