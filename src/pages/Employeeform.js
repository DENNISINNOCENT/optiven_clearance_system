import { React } from "react";


const Employeeform = () => {
  return (
    <div>
      
      <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg">
                We as Optiven we congratulate you for your Service as our
                Employee.We appreciate you for upholding our core values
                Professionalism,Honesty,Customer obsession and innovation.It is
                much pleasure working with you. Optiven ,insipiring
                Possibilities.
              </p>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4">
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="text"
                    id="department"
                  />
                </div>
                <div>
                  <label class="sr-only" for="department">
                    Phone
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Department"
                    type="tel"
                    id="phone"
                  />
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
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
