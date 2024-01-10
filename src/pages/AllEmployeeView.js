import React, { useEffect } from "react";
import { getEmployee } from "../redux/employeeFormSlice";
import { useSelector, useDispatch } from "react-redux";

const AllEmployeeView = () => {
  const employees = useSelector((state) => state.employees);
  console.log(employees);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployee());
  });

  return (
    <div>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-xl font-serif mt-8">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-2 py-1 font-bold text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-2 py-1 font-bold text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-2 py-1 font-bold text-gray-900">
                E  Number
              </th>
              <th className="whitespace-nowrap px-2 py-1 font-bold text-gray-900">
               Contact
              </th>
              <th className="whitespace-nowrap px-2 py-1 font-bold text-gray-900">
                Department
              </th>
              <th className="whitespace-nowrap px-2 py-1 font-bold text-gray-900">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
          {employees.data.map((employee) =>(
            <tr className="odd:bg-gray-50" key={employee.employee_id}>
            <td className="whitespace-nowrap px-4 py-2  text-gray-900">
              {employee.employee_name}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {employee.employee_email}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {employee.employee_number}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {employee.employee_phone}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {employee.employee_department}
            </td>
          </tr>
          ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployeeView;
