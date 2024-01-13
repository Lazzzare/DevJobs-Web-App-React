import { useParams } from "react-router-dom";
import dataType from "./dataTypes";
import { motion } from "framer-motion";

interface Props {
  data: (typeof dataType)[];
}

const SingleJobs = ({ data }: Props) => {
  const { id } = useParams<{ id: string }>();
  const singleJob = data.filter((item) => {
    return item.id === Number(id);
  });

  return (
    <div className="w-[327px] mx-auto">
      {singleJob.map((job) => {
        console.log(job);
        return (
          <>
            <div key={job.id}>
              <motion.div
                initial={{ opacity: 0, y: -150 }}
                animate={{ opacity: 6, y: 0 }}
                transition={{ duration: 1 }}
                key={job.id}
              >
                <div className="bg-white flex flex-col justify-center items-center text-center -mt-10 mb-6  rounded-md">
                  <img
                    src={job.logo}
                    alt={`${job.id} Image`}
                    className="-mt-5 mb-6"
                  />
                  <div className="flex flex-col mb-7 gap-y-3">
                    <h1 className="text-VeryDarkBlue text-xl font-bold">
                      {job.company}
                    </h1>
                    <span className="text-DarkGrey">{job.company}.com</span>
                  </div>
                  <button className="mb-8 bg-Blue bg-opacity-10 rounded-md px-5 py-3">
                    <a href={`${job.website}`} className="text-Blue font-bold">
                      Company Site
                    </a>
                  </button>
                </div>
              </motion.div>
              {/*  */}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 6, y: 0 }}
              transition={{ duration: 1 }}
              key={job.id}
            >
              <div className="bg-white pt-10 px-6 pb-16 rounded-md">
                <div className="inline-flex text-DarkGrey">
                  <span className="mr-1">{job.postedAt}</span>
                  <span className="mr-1">.</span>
                  <span>{job.contract}</span>
                </div>
                <h1 className="text-VeryDarkBlue text-xl font-bold mt-3 mb-3">
                  {job.position}
                </h1>
                <h2 className="text-Blue text-sm font-bold">{job.location}</h2>
                <button className="mt-14 text-white font-bold bg-Blue py-4 w-full rounded-lg">
                  <a href={`${job.company}.com`}>Apply Now</a>
                </button>
                <p className="mt-8 mb-10 text-DarkGrey leading-7">
                  {job.description}
                </p>
                <h1 className="text-VeryDarkBlue text-xl font-bold mb-7">
                  Requirements
                </h1>
                <p className="text-DarkGrey leading-7 mb-8">
                  {job.requirements.content}
                </p>
                <ul className="flex flex-col gap-y-2 text-DarkGrey leading-7 mb-10">
                  {job.requirements.items.map((requirement) => {
                    return <li className="list-disc">{requirement}</li>;
                  })}
                </ul>
                <h1 className="text-VeryDarkBlue text-xl font-bold mb-7">
                  What You Will Do
                </h1>
                <p className="text-DarkGrey leading-7 mb-8">
                  {job.role.content}
                </p>
                <ul className="flex flex-col gap-y-2 text-DarkGrey leading-7 mb-10">
                  {job.role.items.map((role) => {
                    return <li className="list-decimal">{role}</li>;
                  })}
                </ul>
              </div>
            </motion.div>

            <div className="mt-4 p-6 ">
              <button className="py-4 w-full bg-Blue text-white font-bold text-center items-center rounded-md">
                <a href={`${job.company}.com`}>Apply Now</a>
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SingleJobs;
