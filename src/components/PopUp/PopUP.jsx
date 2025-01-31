import React, { useState } from "react";
import axios from "axios";

const QueryForm = ({ pupUpToggle }) => {
  const { popupVisiblity, setPopupVisiblity } = pupUpToggle;
  let isVisible = popupVisiblity;

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("YOUR_BACKEND_API_URL", formData);
      console.log("Form submitted successfully:", response.data);

      // Reset form and close popup
      setFormData({ name: "", email: "", phone: "", city: "", message: "" });
      setPopupVisiblity(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-11/12 sm:w-2/3 lg:w-1/3 p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-red-600 text-xl"
          onClick={() => setPopupVisiblity(false)}
        >
          &times;
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <div className="text-red-600 font-bold text-xl mb-2">
            PLEASE WAIT...
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            We're Here for You! Share Your Query
          </h2>
        </div>

        {/* Form */}
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            placeholder="How Can We Help?"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-red-500 sm:col-span-2"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 sm:col-span-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default QueryForm;
