import React from "react";
import { useForm } from "react-hook-form";
import '../assets/Styles/Form.css';

function ProductDetailPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("", {
        // Replace with your actual API URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productDescription: data.productDescription,
          valveSerialNumber: data.valveSerialNumber,
          uW: data.uW, // assuming checkboxes are handled with boolean values
          oW: data.oW, // assuming checkboxes are handled with boolean values
          observation: data.observation,
          stepsTaken: data.stepsTaken,
          statusOfService: data.statusOfService,
          workingSatisfactory: data.workingSatisfactory,
          underObservation: data.underObservation,
          runningWithDefect: data.runningWithDefect,
          pending: data.pending,
          timeIn: data.timeIn,
          timeOut: data.timeOut,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Product Data Save success:", result);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Product Data Save failed:", error.message);
    }
    reset();
  };

  return (
    <div className="form-wrapper product-form-wrapper overflow-y-auto h-[80vh]">
    <div className="shadow-3xl rounded-xl">
      <h2 className="form-title">Product Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Description */}
        <div className="form-group">
          <label htmlFor="productDescription" className="block text-black-800 font-medium mb-2">
            Product Description
          </label>
          <textarea
            id="productDescription"
            placeholder="Product Description"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="3"
            {...register("productDescription", {
              required: "Product description is required",
            })}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          ></textarea>
          {errors.productDescription && (
            <p className="text-red-500 text-sm">{errors.productDescription.message}</p>
          )}
        </div>
        {/* Valve Serial Number */}
        <div className="form-group">
          <input
            type="text"
            id="valveSerialNumber"
            placeholder="Valve Serial Number"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            {...register("valveSerialNumber", {
              required: "Valve serial number is required",
            })}
          />
          {errors.valveSerialNumber && (
            <p className="text-red-500 text-sm">{errors.valveSerialNumber.message}</p>
          )}
        </div>
        {/* Checkboxes (U/W, O/W, etc.) */}
        <div className="form-group checkbox-ele flex items-center">
          <input type="checkbox" id="uw" {...register("uw")} className="mr-2" />
          <label htmlFor="uw">U/W</label>
        </div>
        <div className="form-group flex items-center">
          <input type="checkbox" id="ow" {...register("ow")} className="mr-2" />
          <label htmlFor="ow">O/W</label>
        </div>
        {/* Observation */}
        <div className="form-group">
          <input
            type="text"
            id="observation"
            placeholder="Observation"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            {...register("observation", {
              required: "Observation is required",
            })}
          />
          {errors.observation && (
            <p className="text-red-500 text-sm">{errors.observation.message}</p>
          )}
        </div>
        {/* Steps Taken */}
        <div className="form-group">
          <input
            type="text"
            id="stepsTaken"
            placeholder="Steps Taken"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            {...register("stepsTaken", {
              required: "Steps taken is required",
            })}
          />
          {errors.stepsTaken && (
            <p className="text-red-500 text-sm">{errors.stepsTaken.message}</p>
          )}
        </div>
        {/* Status of Service */}
        <div className="form-group">
          <label htmlFor="statusOfService" className="block text-black-800 font-medium mb-2">
            Status Of Service
          </label>
          <select
            id="statusOfService"
            {...register("statusOfService", {
              required: "Status of service is required",
            })}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          >
            <option value="">Select</option>
            <option value="Open">Open</option>
            <option value="Close">Close</option>
          </select>
          {errors.statusOfService && (
            <p className="text-red-500 text-sm">{errors.statusOfService.message}</p>
          )}
        </div>
        {/* Additional Checkboxes */}
        <div className="form-group checkbox-ele flex items-center">
          <input
            type="checkbox"
            id="workingSatisfactory"
            {...register("workingSatisfactory")}
            className="mr-2"
          />
          <label htmlFor="workingSatisfactory">Working Satisfactory</label>
        </div>
        <div className="form-group checkbox-ele flex items-center">
          <input
            type="checkbox"
            id="underObservation"
            {...register("underObservation")}
            className="mr-2"
          />
          <label htmlFor="underObservation">Under Observation</label>
        </div>
        <div className="form-group checkbox-ele flex items-center">
          <input
            type="checkbox"
            id="runningWithDefect"
            {...register("runningWithDefect")}
            className="mr-2"
          />
          <label htmlFor="runningWithDefect">Running with Defect</label>
        </div>
        <div className="form-group flex items-center">
          <input
            type="checkbox"
            id="pending"
            {...register("pending")}
            className="mr-2"
          />
          <label htmlFor="pending">Pending</label>
        </div>
        {/* Time-In */}
        <div className="form-group">
          <input
            type="text"
            id="timeIn"
            placeholder="Time-In"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            {...register("timeIn", { required: "Time-In is required" })}
          />
          {errors.timeIn && (
            <p className="text-red-500 text-sm">{errors.timeIn.message}</p>
          )}
        </div>
        {/* Time-Out */}
        <div className="form-group">
          <input
            type="text"
            id="timeOut"
            placeholder="Time-Out"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            {...register("timeOut", { required: "Time-Out is required" })}
          />
          {errors.timeOut && (
            <p className="text-red-500 text-sm">{errors.timeOut.message}</p>
          )}
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          SAVE AND NEXT
        </button>
      </form>
    </div>
  </div>
  
  );
}

export default ProductDetailPage;