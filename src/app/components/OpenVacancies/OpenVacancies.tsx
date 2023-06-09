"use client";
import React from "react";
import { motion } from "framer-motion";

const OpenVacancies = () => {
  return (
    <section className="mt-20 py-8">
      <h1 className="text-3xl font-bold">Open Vacancies</h1>
      <div className="mt-12 flex justify-between gap-8">
        {[...Array(3)].map((val, index) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                hidden: { opacity: 0, scale: 0.5 },
              }}
              key={index}
            >
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OpenVacancies;
