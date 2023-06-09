"use client";
import { motion } from "framer-motion";
import React from "react";

const WorkWithUs = () => {
  return (
    <section className="mt-16 rounded-2xl bg-violet-100 p-12 px-16">
      <div className="flex  justify-between items-center text-3xl font-bold">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
            hidden: { opacity: 0, scale: 0.5, x: "-50%" },
          }}
        >
          <span className="">Work with us</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
            hidden: { opacity: 0, scale: 0.5, x: "50%" },
          }}
        >
          <span className="text-violet-800">ahead</span>
        </motion.div>
      </div>
      <div className="mt-12 flex gap-20 overflow-hidden">
        <div className="grow">
          <div className="rounded-2xl bg-white  pt-8 max-w-[30rem] shadow-lg">
            <div className="flex flex-col gap-3 p-4">
              <p className="text-2xl">😊</p>
              <h2 className="font-bold">About</h2>
              <p className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus fugit ipsum voluptate deserunt, non velit a blanditiis
                officia dolor eligendi eveniet cumque quasi reprehenderit minus?
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-8  p-4 rounded-2xl  mt-8 bg-orange-50">
              <h2 className="font-bold">About</h2>
              <p className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus fugit ipsum voluptate deserunt, non velit a blanditiis
                officia dolor eligendi eveniet cumque quasi reprehenderit minus?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 max-h-[75vh] overflow-y-auto pr-6 custom-scrollbar">
          {[...Array(6)].map((val, index) => (
            <div className="p-4 bg-white rounded-2xl w-[20rem]" key={index}>
              <h2 className="font-bold">About</h2>
              <p className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus fugit ipsum voluptate deserunt, non velit a blanditiis
                officia dolor eligendi eveniet cumque quasi reprehenderit minus?
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
