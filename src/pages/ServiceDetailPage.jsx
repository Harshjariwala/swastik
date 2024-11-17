import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignaturePopup from "../components/SignaturePopup";
import '../assets/Styles/Form.css';

function ServiceDetailPage() {
  const [custSignatureData, setCustSignatureData] = useState(null);
  const [engSignatureData, setEngSignatureData] = useState(null);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    console.log("Customer Signature:", custSignatureData);
    console.log("Engineer Signature:", engSignatureData);
    reset();
    // Additional form submission logic here
  };

  const handleCustSaveSignature = (dataUrl) => {
    console.log("Saved customer signature:", dataUrl);
    setCustSignatureData(dataUrl);
  };

  const handleEngSaveSignature = (dataUrl) => {
    console.log("Saved engineer signature:", dataUrl);
    setEngSignatureData(dataUrl);
  };

  return (
    <>
      <div className="form-wrapper service-form-wrapper">
        <div className="shadow-3xl rounded-xl">
          <h2 className="form-title">Service Details</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Remark of Service Engineer */}
            <div className="form-group">
              <label
                htmlFor="remark"
                className="block text-black-800 font-medium mb-2"
              >
                Remark
              </label>
              <textarea
                {...register("remark", { required: "Remark is required" })}
                id="remark"
                placeholder="Remark of Service Engineer"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                rows="3"
              ></textarea>
              {errors.remark && (
                <p className="text-red-500 text-sm">{errors.remark.message}</p>
              )}
            </div>
            {/* Service Charge Detail */}
            <div className="form-group">
              <label
                htmlFor="charge"
                className="block text-black-800 font-medium mb-2"
              >
                Service Charge Detail
              </label>
              <textarea
                {...register("charge", {
                  required: "Service charge detail is required",
                })}
                id="charge"
                placeholder="Service Charge Detail"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                rows="3"
              ></textarea>
              {errors.charge && (
                <p className="text-red-500 text-sm">{errors.charge.message}</p>
              )}
            </div>
            {/* Customer Email */}
            <div className="form-group">
              <input
                {...register("email", {
                  required: "Customer email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                type="email"
                placeholder="Customer Email"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            {/* Mode of Payment */}
            <div className="form-group">
              <label
                htmlFor="paymentMode"
                className="block text-black-800 font-medium mb-2"
              >
                Mode of Payment
              </label>
              <select
                {...register("paymentMode", {
                  required: "Please select a mode of payment",
                })}
                id="paymentMode"
                name="paymentMode"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              >
                <option value="">Select payment mode</option>
                <option value="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
                <option value="NEFT">NEFT</option>
                <option value="RTGS">RTGS</option>
              </select>
              {errors.paymentMode && (
                <p className="text-red-500 text-sm">
                  {errors.paymentMode.message}
                </p>
              )}
            </div>
            {/* Signature Popups */}
            <div className="form-btn-group">
              <SignaturePopup
                onSave={handleCustSaveSignature}
                name="Sign of Customer"
              />
              {custSignatureData && (
                <div className="mt-4">
                  <h2 className="text-lg font-medium">Saved Signature of Customer</h2>
                  <img
                    src={custSignatureData}
                    alt="Customer Signature"
                    className="sign-box border mt-2"
                  />
                </div>
              )}
            </div>
            <div className="form-btn-group">
              <SignaturePopup
                onSave={handleEngSaveSignature}
                name="Sign of Engineer"
              />
              {engSignatureData && (
                <div className="mt-4">
                  <h2 className="text-lg font-medium">Saved Signature of Engineer</h2>
                  <img
                    src={engSignatureData}
                    alt="Engineer Signature"
                    className="sign-box border mt-2"
                  />
                </div>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
            >
              Email Service Report
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ServiceDetailPage;