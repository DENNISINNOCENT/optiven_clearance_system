import React, { useEffect } from "react";
import { getEmployee, updateEmployeeStatus } from "../redux/employeeFormSlice";
import { useDispatch, useSelector } from "react-redux";

const Hrview = () => {
  // const[status,setStatus] = useState()
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  const handleApproval = (employee_id) => {
    // Add logic for handling approval here
    dispatch(updateEmployeeStatus({ employee_id, newStatus: "Hr Approved" }));
    console.log("HR Approved!");
  };

  const handleReject = () => {
    // Add logic for handling rejection here
    console.log("HR Rejected!");
  };

  return (
    <div>
      <div className="rounded-lg border border-gray-200">
        <div className=" rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm border">
            <thead className="ltr:text-left rtl:text-right border-b border-gray-900">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  E. Number
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Department
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {employees.data.map((employee) => (
                <tr className="border-b border-gray-900">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border">
                    1
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border">
                    {employee.employee_name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
                    {employee.employee_email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
                    {employee.employee_number}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
                    {employee.employee_department}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
                    {employee.status}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleApproval(employee.employee_id)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleReject}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hrview;
