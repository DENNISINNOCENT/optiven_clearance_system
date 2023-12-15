import { React, useState } from "react";

const Employeeform = () => {
  const [data, setData] = useState({});
  const departments = ["ICT", "Finance", "Legal"];
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data)
  };
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div>
      <section className="bg-gray-100">
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
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                   
                    onChange={handleChange}
                    
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="number"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="department">
                    Department
                  </label>
                  <select 
                  name="department"
                  type="text"
                  id="department"
                 
                  onChange={handleChange}>
                <option>Please choose your department</option>
                {departments.map((department, index) => {
                    return (
                        <option key={index}>
                            {department}
                        </option>
                    );
                })}
            </select>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
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

export default Employeeform;
