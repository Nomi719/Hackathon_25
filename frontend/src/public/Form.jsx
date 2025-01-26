import React, { useState } from 'react'
import { useParams } from 'react-router';

function Form() {
  const { type } = useParams();

  const [emi, setEmi] = useState(0);

  const annualInterestRate = 5; // Annual interest rate
  const [initialAmount, setInitialAmount] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [loanAmount, setLoanAmount] = useState("");

  const businessLoan_types = ["buyStall", "advanceRentForShop", "shopAssets", "shopMachinery"];
  const weddingLoan_types = ["valima", "furniture", "valimaFood", "jahez"];
  const educationLoan_types = ['universityFees', 'childFeesLoan'];
  const homeConstructionLoan_types = ['structure', 'finishing'];
  
  const handleCalculatorSubmit = (e)=>{
    e.preventDefault()

    if (!initialAmount || !loanPeriod || (educationLoan_types.includes(type) && !loanAmount)) {
      alert("Please fill all the fields");
      return;
    }

    let fianlLoanAmount;
    if(weddingLoan_types.includes(type)){
      fianlLoanAmount = 500000;
    }
    else if(businessLoan_types.includes(type)){
      fianlLoanAmount = 1000000;
    }
    else if(homeConstructionLoan_types.includes(type)){
      fianlLoanAmount = 1000000;
    }
    else if(educationLoan_types.includes(type)){
      fianlLoanAmount = loanAmount;
    }
    else{
      alert("Invalid Loan Type");
      return;
    }

    const principal = fianlLoanAmount - initialAmount; // Remaining loan amount
    const interestRate = annualInterestRate / 100 / 12; // Monthly interest rate
    const totalMonths = loanPeriod * 12; // Total number of months

    // EMI formula
    const calculatedEmi =
      (principal * interestRate * Math.pow(1 + interestRate, totalMonths)) /
      (Math.pow(1 + interestRate, totalMonths) - 1);

    setEmi(calculatedEmi.toFixed(2)); // Round to 2 decimal places
    alert("EMI: " + calculatedEmi.toFixed(2));

    openModal();
    // console.log(type);
    // console.log("Initial Amount: ", initialAmount);
    // console.log("Loan Period: ", loanPeriod);
  }



  // modal form handling
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");


  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    if (!name || !email || !cnic) {
      alert("Please fill all the fields");
      return;
    }

    if (cnic.length !== 13) {
      alert("CNIC must be 13 characters long");
      return;
    }

    closeModal();
  };

  return (
    <>
      
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0000007a] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Enter Your Details</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                ✖
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleModalSubmit}>
              {/* CNIC Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">CNIC</label>
                <input
                  type="number"
                  placeholder="Enter your CNIC"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                />
              </div>

              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}


      <section className="w-[90%] mx-auto py-14">

        <div className="p-5  border-2 border-gray-200 rounded-lg shadow-lg dark:border-gray-700">

          <form action="" onSubmit={handleCalculatorSubmit}>
            <h2 className="text-2xl font-bold">Form</h2>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="initial-amount">Initial Amount</label>
              <input type="number" value={initialAmount} onChange={(e) => setInitialAmount(e.target.value)} id="initial-amount" placeholder="Enter Initial Amount" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="loan-period">Loan Period (years)</label>
              <input type="number" value={loanPeriod} onChange={(e) => setLoanPeriod(e.target.value)} id="loan-period" placeholder="Enter Loan Period" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
            </div>

            {educationLoan_types.includes(type) && 
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="loan-amount">Loan Amount</label>
              <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} id="loan-amount" placeholder="Enter Loan Amount" className="border-2 border-gray-200 rounded-lg shadow-lg p-2" />
            </div>
            }

            <button className="rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5" >Proceed</button>

          </form>
        </div>

      </section>
    </>

  )
}

export default Form