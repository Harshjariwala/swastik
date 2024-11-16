import React from "react";
import { useForm } from "react-hook-form"; // Import useForm from React Hook Form
import HeadeingImage from "../components/HeadingImage"; // Your image component

function CustomerDetailPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("", {
        // Replace with your API URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: data.customerName,
          customerAddress: data.customerAddress,
          contactPerson: data.contactPerson,
          designation: data.designation,
          contactNumber: data.contactNumber,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Customer Data Save success:", result);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Customer Data Save failed:", error.message);
    }
    reset()
  };

  return (
    <>
      <div className="login-container px-4 py-40 flex justify-center items-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-2xl space-y-6"
        >
          <h1 className="text-2xl font-medium mb-4">
            Customer Details
          </h1>
          <div className="form-group">
            <input
              type="text"
              id="customerName"
              placeholder="Customer Name"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              {...register("customerName", {
                required: "Customer Name is required",
              })}
            />
            {errors.customerName && (
              <p className="text-red-500 text-sm">
                {errors.customerName.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <textarea
              id="customerAddress"
              placeholder="Customer Address"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows="3"
              {...register("customerAddress", {
                required: "Address is required",
              })}
              onInput={(e) => {
                e.target.style.height = "auto"; // Reset height
                e.target.style.height = `${e.target.scrollHeight}px`; // Adjust height to content
              }}
            ></textarea>
            {errors.customerAddress && (
              <p className="text-red-500 text-sm">
                {errors.customerAddress.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="contactPerson"
              placeholder="Contact Person"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              {...register("contactPerson", {
                required: "Contact Person is required",
              })}
            />
            {errors.contactPerson && (
              <p className="text-red-500 text-sm">
                {errors.contactPerson.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="designation"
              placeholder="Designation"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              {...register("designation", {
                required: "Designation is required",
              })}
            />
            {errors.designation && (
              <p className="text-red-500 text-sm">
                {errors.designation.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              id="contactNumber"
              placeholder="Contact Number"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              {...register("contactNumber", {
                required: "Contact Number is required",
              })}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">
                {errors.contactNumber.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CustomerDetailPage;
