import React from 'react'
import Card from './components/Card'

function EducationLoans() {
  return (
    <section className="w-[90%] mx-auto py-14">

      <div className="p-5  border-2 border-gray-200 rounded-lg shadow-lg dark:border-gray-700">
        <h1 className="text-3xl mb-5 font-semibold">Education Loans</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <Card link="/form/universityFees" head="University Fees" />
          <Card link="/form/childFeesLoan" head="Child Fees loan" />
        </div>
      </div>

    </section>
  )
}

export default EducationLoans