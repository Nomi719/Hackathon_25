import React from 'react'
import Card from './components/Card'

function Home() {
    return (
      <>
      

      <section className="w-[90%] mx-auto py-14">

        <div className="p-5  border-2 border-gray-200 rounded-lg shadow-lg dark:border-gray-700">
          <h1 className="text-3xl mb-5 font-semibold">Loans</h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* <a href="#" class="block  p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wedding Loans</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Maximum loan: PKR 5 lakhs</p>
              <p class="font-normal text-gray-700 dark:text-gray-400">Loan period: 3 years</p>
            </a>
            <a href="#" class="block  p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Home Construction Loans</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Maximum loan: PKR 10 lakhs</p>
              <p class="font-normal text-gray-700 dark:text-gray-400">Loan period: 5 years</p>
            </a>
            <a href="#" class="block  p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Business Startup Loans</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Maximum loan: PKR 10 lakhs</p>
              <p class="font-normal text-gray-700 dark:text-gray-400">Loan period: 5 years</p>
            </a>
            <a href="#" class="block  p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Education Loans</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Maximum loan: Based on requirements</p>
              <p class="font-normal text-gray-700 dark:text-gray-400">Loan period: 4 years</p>
            </a> */}
            <Card link="/wedding-loans" head="Wedding Loans" paras={["Maximum loan: PKR 5 lakhs", "Loan period: 3 years"]} />
            <Card link="/home-construction-loans" head="Home Construction Loans" paras={["Maximum loan: PKR 10 lakhs", "Loan period: 5 years"]} />
            <Card link="/business-startup-loans" head="Business Startup Loans" paras={["Maximum loan: PKR 10 lakhs", "Loan period: 5 years"]} />
            <Card link="/education-loans" head="Education Loans" paras={["Maximum loan: Based on requirements", "Loan period: 4 years"]} />

          </div>
        </div>

      </section>
      </>
    )
}

export default Home