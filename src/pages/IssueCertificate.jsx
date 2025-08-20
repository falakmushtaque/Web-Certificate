// src/components/pages/IssueCertificate.jsx
import React, { useState } from "react";

const IssueCertificate = () => {
  const [formData, setFormData] = useState({
    commonName: "",
    organization: "",
    organizationalUnit: "",
    country: "",
    state: "",
    locality: "",
    email: "",
    certificateType: "self-signed",
    keyAlgorithm: "RSA",
    keySize: "2048",
    validityDays: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting certificate data:", formData);
    setSubmitted(true);
  };

  return (
    <div className= "mt-[60px] bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-violet-800 dark:text-white mb-6">
        Issue New Certificate
      </h2>

      {submitted && (
        <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-4 rounded mb-4">
          ✅ Certificate request submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <label>Common Name (CN)*</label>
            <input
              type="text"
              name="commonName"
              required
              value={formData.commonName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
              placeholder="example.com"
            />
          </div>
          <div>
            <label>Organization (O)*</label>
            <input
              type="text"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
              placeholder="My Company"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <label>Organizational Unit (OU)</label>
            <input
              type="text"
              name="organizationalUnit"
              value={formData.organizationalUnit}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
              placeholder="IT Dept."
            />
          </div>
          <div>
            <label>Country (C)*</label>
            <select
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
            >
              <option value="">Select Country</option>
              <option value="PK">Pakistan</option>
              <option value="US">United States</option>
              <option value="IN">India</option>
              <option value="DE">Germany</option>
              <option value="UK">United Kingdom</option>
              {/* Add more as needed */}
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <label>State/Province (ST)</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
              placeholder="Punjab"
            />
          </div>
          <div>
            <label>Locality (L)</label>
            <input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
              placeholder="Lahore"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label>Certificate Type*</label>
            <select
              name="certificateType"
              required
              value={formData.certificateType}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
            >
              <option value="self-signed">Self-Signed</option>
              <option value="ca-signed">CA-Signed</option>
            </select>
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label>Key Algorithm</label>
            <select
              name="keyAlgorithm"
              value={formData.keyAlgorithm}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
            >
              <option value="RSA">RSA</option>
              <option value="ECDSA">ECDSA</option>
            </select>
          </div>
          <div>
            <label>Key Size</label>
            <select
              name="keySize"
              value={formData.keySize}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 focus:outline-[#612782] dark:text-white"
            >
              <option value="2048">2048</option>
              <option value="4096">4096</option>
            </select>
          </div>
          <div>
            <label>Validity Period (days)*</label>
            <input
              type="number"
              name="validityDays"
              required
              value={formData.validityDays}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="365"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#4a1e64] text-white rounded-md hover:bg-[#321144]"
          >
            Submit Certificate Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueCertificate;
