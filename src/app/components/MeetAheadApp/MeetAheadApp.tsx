import Image from "next/image";
import React from "react";

const MeetAheadApp = () => {
  return (
    <section className="mt-10 mb-10  rounded-3xl h-[500px] bg-orange-50 px-8 py-20">
      <div className="mb-12">
        <p className="font-semibold">Built out of frustation</p>
        <h1 className="text-[2.5rem] font-bold">Meet the ahead team</h1>
      </div>
      <div className="grid grid-cols-2 gap-6 px-8">
        <div className="grid place-items-center">
          <Image src={"/MeetVirtual.png"} alt="d" width={300} height={300} />
        </div>
        <div className="grid  place-items-center text-gray-600 font-semibold">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur dolorem architecto aperiam iusto maiores nostrum odio.
          </p>
          <p className="">
            Animi iste, perspiciatis porro distinctio est atque, et rem harum
            delectus architecto consectetur optio explicabo molestiae
            blanditiis! Doloremque, officiis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetAheadApp;
