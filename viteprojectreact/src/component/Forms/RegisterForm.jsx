import axios from "axios";
import { useState } from "react";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", inputs);
      //   alert("Form submitted successfully! ✅");
    }
  };

  const handleChange = (event) => {
    console.log(event, "event");

    const name = event.target.name;
    const value = event.target.value;   
    console.log(value, "value");

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!inputs.name) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!inputs.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
      newErrors.email = "Invalid email format";
    }

    // Mobile number validation
    if (!inputs.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10,}$/.test(inputs.mobile)) {
      newErrors.mobile = "Mobile number must be at least 10 digits";
    }

    setErrors(newErrors);

    // If no errors, return true
    return Object.keys(newErrors).length === 0;
  };
  return (
    <>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <label>Mobile number:</label>
        <input
          type="number"
          name="mobile"
          value={inputs.mobile || ""}
          onChange={handleChange}
        />
        {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
