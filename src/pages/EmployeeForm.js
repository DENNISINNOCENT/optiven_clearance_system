import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { postEmployee } from "../redux/employeeFormSlice";

const EmployeeForm = () => {
  const [error, setError] = useState({});
  const [data, setData] = useState({
    employee_name: "",
    employee_email: "",
    employee_number:"",
    employee_phone: "",
    employee_department: "",
  });
  const departments = ["ICT", "Finance", "Legal", "Sales"];
  const dispatch = useDispatch(); 


  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };
  // console.log(data);
  function handleSubmit(e) {
    e.preventDefault();
    // Validate form fields
    if (
      !data.employee_name ||
      !data.employee_email ||
      !data.employee_number ||
      !data.employee_phone ||
      !data.employee_department
    ) {
      setError({ message: `All fields is required` });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.employee_email)) {
      setError({ message: "Invalid email address." });
      return;
    }

    // Validate phone number (simple check for numeric value)
    if (isNaN(data.employee_phone) || data.employee_phone.length < 10) {
      setError({ message: "Invalid phone number." });
      return;
    }
    dispatch(postEmployee(data));
  
  console.log("Form data after reset:", data)
  }
  return (
    <div>
      <section className="bg-gray-100 font-serif">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                We as Optiven we congratulate you for your Service as our
                Employee.We appreciate you for upholding our core values
                Professionalism,Honesty,Customer obsession and innovation.It is
                much pleasure working with you. Optiven ,insipiring
                Possibilities.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  {Object.values(error).map((err, index) => (
                    <h3 key={index}>{err}</h3>
                  ))}
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                    placeholder="Name"
                    type="text"
                    id="employee_name"
                    name="employee_name"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                    placeholder="Email address"
                    type="email"
                    id="employee_email"
                    name="employee_email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="employee_number">
                   Employee Number
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                    placeholder="Employee Number"
                    type="text"
                    id="employee_number"
                    name="employee_number"
                    onChange={handleChange}
                  />
                </div>
                

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                    placeholder="Phone Number"
                    type=""
                    id="employee_phone"
                    name="employee_phone"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="department">
                    Department
                  </label>
                  <select
                    name="employee_department"
                    id="employee_department"
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled>Select Department</option>
                    {departments.map((department, index) => (
                      <option key={index} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeForm;
