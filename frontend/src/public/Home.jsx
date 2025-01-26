import React from 'react';
import Card from './components/Card';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen"> 
      <section className="container mx-auto py-14">
        {/* Main Heading */}
        <div className="text-center space-y-2"> 
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-6xl lg:text-7xl">
            Saylani Microfinance
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Empowering lives through Qarze Hasana. Get interest-free loans for 
            education, business, wedding, and home construction.
          </p>
        </div>

        <div className="p-5 border-2 border-gray-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 mt-10">
          {/* Loans Section Heading */}
          <h2 className="text-3xl mb-5 font-semibold text-center text-gray-800 dark:text-gray-100">
            Loans
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Loan Cards */}
            <Card 
              link="/wedding-loans" 
              head="Wedding Loans" 
              paras={["Maximum loan: PKR 5 lakhs", "Loan period: 3 years"]} 
            />
            <Card 
              link="/home-construction-loans" 
              head="Home Construction Loans" 
              paras={["Maximum loan: PKR 10 lakhs", "Loan period: 5 years"]} 
            />
            <Card 
              link="/business-startup-loans" 
              head="Business Startup Loans" 
              paras={["Maximum loan: PKR 10 lakhs", "Loan period: 5 years"]} 
            />
            <Card 
              link="/education-loans" 
              head="Education Loans" 
              paras={["Maximum loan: Based on requirements", "Loan period: 4 years"]} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;