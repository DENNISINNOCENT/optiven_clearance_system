import React from 'react'

const OperationsView = () => {
  return (
    <div> <div className="overflow-x-auto rounded-t-lg">
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
            Phone Number
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Department
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Role
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Actions
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        <tr className="border-b border-gray-900">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border">
            1
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border">
            Dennis Mwendwa
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
            devsupport@optiven.co.ke
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
            0741991874
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
            ICT
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
            Marketer
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleApproval}
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
      </tbody>
    </table>
  </div>
</div></div>
  )
}

export default OperationsView