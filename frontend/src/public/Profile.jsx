
import React, { useState } from 'react'

function Profile() {

  const [data, setData] = useState({
    guarantor_1_name: "",
    guarantor_1_email: "",
    guarantor_1_location: "",
    guarantor_1_cnic: "",
    guarantor_2_name: "",
    guarantor_2_email: "",
    guarantor_2_location: "",
    guarantor_2_cnic: "",
    sheetFile: "",
    address: "",
    city: "",
    phone: "",
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data.guarantor_1_name || !data.guarantor_1_email || !data.guarantor_1_location || !data.guarantor_1_cnic || !data.guarantor_2_name || !data.guarantor_2_email || !data.guarantor_2_location || !data.guarantor_2_cnic || !data.sheetFile || !data.address || !data.city || !data.phone) {
      alert("Please fill all the fields");
      return;

    }
    console.log(data.guarantor_1_cnic);
    console.log(data.guarantor_2_email);
    console.log(data.phone);
    // and so on...
  }
  

  return (
    <>
      <section className="w-[90%] mx-auto py-14">

        <h1 className="text-3xl font-semibold mb-4">Profile</h1>
        <div className="p-5 border-2 border-gray-200 rounded-lg shadow-lg dark:border-gray-700">
          <div className="flex gap-3 ">
            <div className="border py-2 px-4 rounded-xl basis-1/2">
              <h4 className="mb-2 text-2xl font-bold">Personal Information</h4>
              <p><span className="font-semibold">Name:</span> Lorem</p>
              <p><span className="font-semibold">Email:</span> username@gmail.com</p>
              <p><span className="font-semibold">CNIC:</span> 12345-1234567-1</p>
            </div>
            <div className="border py-2 px-4 rounded-xl basis-1/2">
              <h4 className="mb-2 text-2xl font-bold">Loan Information</h4>
              <p><span className="font-semibold">Initial Amount:</span> Rs. 4000</p>
              <p><span className="font-semibold">Loan Period:</span> 2 years</p>
              <p><span className="font-semibold">Loan Amount:</span> 4 lakhs</p>
              <p><span className="font-semibold">Annual Interest Rate:</span> 4 lakhs</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Additional Details</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex gap-5 mt-5">
                <div className="basis-1/2 border p-4 rounded-xl border-gray-400 ">
                  <h5 className="text-xl underline font-semibold">First Guarantor Information</h5>
                  <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="name-1">Name </label>
                    <input type="text" value={data.guarantor_1_name} onChange={(e)=>setData({...data, guarantor_1_name: e.target.value})} id="name-1" placeholder="Enter Guarantor's Name" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
                  </div>
                  <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="email-1">Email</label>
                    <input type="email" value={data.guarantor_1_email} onChange={(e)=>setData({...data, guarantor_1_email: e.target.value})} id="email-1" placeholder="Enter Guarantor's Email" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
                  </div>
                  <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="location-1">Location</label>
                    <input type="text" value={data.guarantor_1_location} onChange={(e)=>setData({...data, guarantor_1_location: e.target.value})} id="location-1" placeholder="Enter Guarantor's Location" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
                  </div>
                  <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="cnic-1">CNIC</label>
                    <input type="number" value={data.guarantor_1_cnic} onChange={(e)=>setData({...data, guarantor_1_cnic: e.target.value})} id="cnic-1" placeholder="Enter Guarantor's CNIC" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
                  </div>
                </div>
                <div className="basis-1/2 border p-4 rounded-xl border-gray-400 ">
                  <h5 className="text-xl underline font-semibold">Second Guarantor Information</h5>
                  <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="name-2">Name</label>
                    <input type="text" value={data.guarantor_2_name} onChange={(e)=>setData({...data, guarantor_2_name: e.target.value})} id="name-2" placeholder="Enter Guarantor's Name" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
                  </div>
                  <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="email-2">Email</label>
                    <input type="email" value={data.guarantor_2_email} onChange={(e)=>setData({...data, guarantor_2_email: e.target.value})} id="email-2" placeholder="Enter Guarantor's Email" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
                  </div>
                  <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="location-2">Location</label>
                    <input type="text" value={data.guarantor_2_location} onChange={(e)=>setData({...data, guarantor_2_location: e.target.value})} id="location-2" placeholder="Enter Guarantor's Location" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
                  </div>
                  <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="cnic-2">CNIC</label>
                    <input type="number" value={data.guarantor_2_cnic} onChange={(e)=>setData({...data, guarantor_2_cnic: e.target.value})} id="cnic-2" placeholder="Enter Guarantor's CNIC" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 my-4">
                <label class="block mb-1 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Select statement and salary sheet </label>
                <input onChange={(e)=>setData({...data, sheetFile: e.target.files[0]})} class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
              </div>

              <div class="my-4">
                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <input type="text" value={data.address} onChange={(e)=>setData({...data, address: e.target.value})} id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
              </div>
              <div class="my-4">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                <input type="text" value={data.phone} onChange={(e)=>setData({...data, phone: e.target.value})} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
              </div>
              <div class="my-4">
                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                <input type="text" value={data.city} onChange={(e)=>setData({...data, city: e.target.value})} id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
              </div>



              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </div>

      </section>
    </>
  )
}

export default Profile