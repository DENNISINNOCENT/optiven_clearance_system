import React from "react";

const EmployeeView = () => {
  return (
    <div className="mx-auto max-w-screen-md">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-6 flex flex-col gap-4 border">
          <div className="flex items-center border-b py-2">
            <strong className="text-gray-900 flex-shrink-0 w-24 border-r pr-2">Name:</strong>
            <span className="text-gray-700">Dennis Mwendwa</span>
          </div>
          <div className="flex items-center border-b py-2">
            <strong className="text-gray-900 flex-shrink-0 w-24 border-r pr-2">Email:</strong>
            <span className="text-gray-700">devsupport@optiven.co.ke</span>
          </div>
          <div className="flex items-center border-b py-2">
            <strong className="text-gray-900 flex-shrink-0 w-24 border-r pr-2">Phone Number:</strong>
            <span className="text-gray-700">0741991874</span>
          </div>
          <div className="flex items-center border-b py-2">
            <strong className="text-gray-900 flex-shrink-0 w-24 border-r pr-2">Department:</strong>
            <span className="text-gray-700">ICT</span>
          </div>
          <div className="flex items-center border-b py-2">
            <strong className="text-gray-900 flex-shrink-0 w-24 border-r pr-2">Role:</strong>
            <span className="text-gray-700">Marketer</span>
          </div>
          <div className="flex items-center py-2">
            <strong className="text-gray-900 flex-shrink-0 w-24">Progress:</strong>
            <span className="text-gray-700">Pending HR approval</span>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default EmployeeView;
