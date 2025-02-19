// import axios from "axios";
// import { useState } from "react";

// export default function Table() {
//   const [inputs, setInputs] = useState({});
//   const [errors, setErrors] = useState({});

//   const handleChanged = (event) => {
//     const { name, value } = event.target;
//     setInputs((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!inputs.firstname) {
//       newErrors.firstname = "First name is required";
//     }
//     if (!inputs.secondname) {
//       newErrors.secondname = "Second name is required";
//     }
//     if (!inputs.email) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!inputs.mobile) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!/^\d{10,}$/.test(inputs.mobile)) {
//       newErrors.mobile = "Mobile number must be at least 10 digits";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const clickBtn = async (event) => {
//     event.preventDefault();

//     if (!validate()) {
//       console.log("Validation errors", errors);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://localhost:3030/registrationTable/register",
//         inputs
//       );

//       console.log("Server response:", response.data);

//       setInputs({});
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <form
//       className="w-[60%] m-auto border border-solid p-4"
//       onSubmit={clickBtn}
//     >
//       <label className="block mb-2">First Name:</label>
//       <input
//         type="text"
//         name="firstname"
//         value={inputs.firstname || ""}
//         className="w-full p-2 mb-2 border border-gray-300 rounded"
//         placeholder="Enter your first name"
//         onChange={handleChanged}
//       />
//       {errors.firstname && <p className="text-red-600">{errors.firstname}</p>}

//       <label className="block mb-2">Second Name:</label>
//       <input
//         type="text"
//         name="secondname"
//         value={inputs.secondname || ""}
//         className="w-full p-2 mb-2 border border-gray-300 rounded"
//         placeholder="Enter your second name"
//         onChange={handleChanged}
//       />
//       {errors.secondname && <p className="text-red-600">{errors.secondname}</p>}

//       <label className="block mb-2">Enter Your Email Address:</label>
//       <input
//         type="email"
//         name="email"
//         value={inputs.email || ""}
//         className="w-full p-2 mb-2 border border-gray-300 rounded"
//         placeholder="Enter your email"
//         onChange={handleChanged}
//       />
//       {errors.email && <p className="text-red-600">{errors.email}</p>}

//       <label className="block mb-2">Enter Your Mobile Number:</label>
//       <input
//         type="tel"
//         name="mobile"
//         value={inputs.mobile || ""}
//         className="w-full p-2 mb-2 border border-gray-300 rounded"
//         placeholder="Enter your mobile number"
//         onChange={handleChanged}
//       />
//       {errors.mobile && <p className="text-red-600">{errors.mobile}</p>}

//       <label className="block mb-2">Enter Your Address:</label>
//       <input
//         type="text"
//         name="address"
//         value={inputs.address || ""}
//         className="w-full p-2 mb-2 border border-gray-300 rounded"
//         placeholder="Enter Your Current Address"
//         onChange={handleChanged}
//       />

//       <label className="block mb-2">Select Your Degree:</label>
//       <select
//         name="degree"
//         value={inputs.degree || ""}
//         className="w-full p-2 mb-2 border border-gray-300 rounded"
//         onChange={handleChanged}
//       >
//         <option value="">Select Your Degree</option>
//         <option value="B.Sc">Bachelor of Science (B.Sc)</option>
//         <option value="B.A">Bachelor of Arts (B.A)</option>
//         <option value="B.Com">Bachelor of Commerce (B.Com)</option>
//         <option value="B.Tech">Bachelor of Technology (B.Tech)</option>
//         <option value="B.E">Bachelor of Engineering (B.E)</option>
//       </select>

//       <label className="block mb-2">Select Gender:</label>
//       <div className="flex items-center gap-4 mb-4">
//         <label className="flex items-center gap-1">
//           <input
//             type="radio"
//             name="gender"
//             value="Female"
//             checked={inputs.gender === "Female"}
//             onChange={handleChanged}
//           />
//           Female
//         </label>
//         <label className="flex items-center gap-1">
//           <input
//             type="radio"
//             name="gender"
//             value="Male"
//             checked={inputs.gender === "Male"}
//             onChange={handleChanged}
//           />
//           Male
//         </label>
//       </div>

//       <button
//         type="submit"
//         className="bg-red-600 text-white p-3 rounded-2xl cursor-pointer"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }
