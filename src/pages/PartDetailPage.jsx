import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const PartDetailPage = () => {
  // Initialize the form hook
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parts: [{ quantity: "", detail: "" }], // Default initial state
    },
  });

  // Manage an array of input fields dynamically
  const { fields, append } = useFieldArray({
    control,
    name: "parts", // This should match the field array name
  });

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    reset();
    // You can handle the form data here
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white border rounded-lg px-8 py-6 max-w-3xl w-full">
          <h1 className="text-2xl font-medium mb-4">Part/Parts Details</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item, index) => (
              <div key={item.id} className="form-group space-y-4">
                <div className="mb-4">
                  <input
                    type="number"
                    placeholder="Quantity"
                    {...register(`parts.${index}.quantity`, {
                      required: "Quantity is required",
                    })}
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  />
                  {errors.parts && errors.parts[index]?.quantity && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.parts[index].quantity.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="remark"
                    className="block text-black-800 font-medium mb-2"
                  >
                    Part Description
                  </label>
                  <textarea
                    placeholder="Part Description"
                    {...register(`parts.${index}.detail`, {
                      required: "Part Description is required",
                    })}
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    rows="3"
                  ></textarea>
                  {errors.parts && errors.parts[index]?.detail && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.parts[index].detail.message}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div className="mb-4 flex flex-col space-y-5">
              <button
                type="button"
                onClick={() => append({ quantity: "", detail: "" })}
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Add New Part
              </button>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartDetailPage;
