import React from "react";

const SelfImprovement = () => {
  return (
    <section className="mt-10   px-8 py-20">
      <div className="mb-12">
        <p className="font-semibold">
          Wrong with self improvement & how are we fixing it
        </p>
        <h1 className="text-[2.5rem] font-bold">Self Improvement. Ugh</h1>
      </div>
      <div className="px-36">
        <div className="border-l-2 border-l-violet-300  px-16 flex  flex-col gap-6">
          {[...Array(4)].map(() => {
            return (
              <div className="max-w-[40rem]">
                <p className="font-bold">It's not easy as 1-2-3</p>
                <p className="">
                  The journey may be long but our sessions are quick. We get to
                  the point and tell you what you want to know (and nothing
                  else).
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelfImprovement;
