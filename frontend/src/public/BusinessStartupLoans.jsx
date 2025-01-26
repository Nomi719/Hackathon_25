import React from 'react';
import Card from './components/Card';

function BusinessStartupLoans() {
  return (
    <section className="w-[90%] mx-auto py-14">
      <div className="p-6 border-2 border-gray-200 rounded-lg shadow-lg bg-white dark:bg-black dark:border-gray-700">
        <h1 className="text-4xl mb-8 font-bold text-gray-800 dark:text-gray-100">
          Business Startup Loans
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <Card link="/form/buyStall" head="Buy Stall" />
          <Card link="/form/advanceRentForShop" head="Advance Rent for Shop" />
          <Card link="/form/shopAssets" head="Shop Assets" />
          <Card link="/form/shopMachinery" head="Shop Machinery" />
        </div>
      </div>
    </section>
  );
}

export default BusinessStartupLoans;
