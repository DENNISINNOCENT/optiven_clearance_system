import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { postUsers } from '../redux/userSlice';

const UserForm = () => {
  const roles = ["ict", "marketer", "legal"];
  const[error,setError] = useState("")
  const dispatch = useDispatch();
  const[users,setUsers] = useState({
    first_name:"",
    middle_name:"",
    surname:"",
    user_email:"",
    user_contact:"",
    user_role:"",
    user_password:"",
    confirm_password:""
  })
  const handleChange = (e) =>{
    const name = e.target.name;
    let value = e.target.value;
    setUsers({...users,[name]:value})
  }
  console.log(users)

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Submitting users:', users); 
    
    if(!users.first_name || !users.middle_name || !users.surname || !users.user_email || !users.user_contact || !users.user_role || !users.user_password || !users.confirm_password){
      setError({message:"All fields required"})
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(users.user_email)) {
      setError({ message: "Invalid email address." });
      return;
    }

    if (isNaN(users.user_contact) || users.user_contact.length < 10) {
      setError({ message: "Invalid phone number." });
      return;
    }
    setError({});

    dispatch(postUsers(users))

    console.log(users)


  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <section className="bg-white font-serif">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl w-full">
            
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Create Account.
              </h1>
              <div>
                {Object.values(error).map((err,index) =>(
                  <h3 key ={index}>{err}</h3>
                ))}
              </div>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
                
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    autoComplete="off"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-10 border-2"
                    onChange={handleChange}
                    
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="MiddleName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    MiddleName
                  </label>

                  <input
                    type="text"
                    id="MiddleName"
                    name="middle_name"
                    autoComplete="off"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-10 border-2"
                    onChange={handleChange}
                   
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Surname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Surname
                  </label>

                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    autoComplete="off"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-10 border-2"
                    onChange={handleChange}

                  
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    autoComplete="off"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-5 border-2"
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Phone Contact"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Contact
                  </label>

                  <input
                    type="text"
                    id="user_contact"
                    name="user_contact"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-5 border-2"
                    onChange={handleChange}
                    autoComplete="off"
                  
                  />
                </div>
                <div className="col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="role"
                  >
                    Role
                  </label>
                  <select
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-5 border-2"
                    name="user_role"
                    id="user_role"
                    defaultValue=""
                    autoComplete="off"
                    onChange={handleChange}
                    
                  >
                    <option  value =""disabled >Select Role</option>
                    {roles.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="user_Password"
                    name="user_password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-5 border-2"
                    onChange={handleChange}
                   
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                   
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-10 border-2"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Create  Account
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default UserForm;
