import React from "react";

const OpenVacancies = () => {
  return (
    <section className="mt-20 py-8">
      <h1 className="text-3xl font-bold">Open Vacancies</h1>
      <div className="mt-12 flex justify-between gap-8">
        {[...Array(3)].map((val, index) => {
          return (
            <div className="rounded-lg bg-yellow-50 p-6 px-10">
              <h2 className="text-xl font-semibold">
                Senior Fullstack Developer
              </h2>
              <ul className="mt-6 font-normal list-disc pl-4">
                <li className="">Remote Job</li>
                <li className="">Competitive Pay</li>
                <li className="">Great Work Culture and awesome learning</li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OpenVacancies;
