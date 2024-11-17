import React, { useRef } from 'react';
import SignaturePad from 'react-signature-canvas';
import Popup from 'reactjs-popup';
import '../assets/Styles/Popup.css';

const SignaturePopup = ({ onSave, name }) => {
  const signCanvas = useRef();

  // Handle clearing the signature within the component itself
  const handleClear = () => {
    if (signCanvas.current) {
      signCanvas.current.clear(); // Clear the signature pad
    }
    console.log('Signature cleared'); // Optional: Log or handle additional behavior if needed
  };

  // Handle saving the signature
  const handleSave = () => {
    if (onSave) {
      const dataUrl = signCanvas.current.toDataURL(); // Capture the signature as a data URL
      onSave(dataUrl);
    }
  };

  return (
  
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
           {name}
          </button>
        }
      >
        {(close) => (
          <div className="w-full min-h-48 p-8 rounded-lg">
            <SignaturePad
              ref={signCanvas}
              canvasProps={{ className: "w-full min-h-48" }}
            />
            <div className='flex gap-x-3 mt-4'>
              <button
                type="button"
                className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                onClick={()=>{
                  handleSave()
                  close()
              }}
              >
                Save
              </button>
            </div>
            <button
              type="button"
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
              onClick={close}
            >
              Close
            </button>
          </div>
        )}
      </Popup>
  );
};

export default SignaturePopup;
