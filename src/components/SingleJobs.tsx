import { useParams } from "react-router-dom";
import dataType from "./dataTypes";
import { motion } from "framer-motion";

interface Props {
  data: (typeof dataType)[];
  darkMode: boolean;
}

const SingleJobs = ({ data, darkMode }: Props) => {
  const { id } = useParams<{ id: string }>();
  const singleJob = data.filter((item) => {
    return item.id === Number(id);
  });

  return (
    <div className="w-[327px] md:w-[730px] mx-auto">
      {singleJob.map((job) => {
        return (
          <div key={job.id}>
            {/* <div> */}
            <motion.div
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 6, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                className={`${
                  darkMode ? "bg-[#19202D]" : "bg-white"
                } flex flex-col md:flex-row justify-center md:justify-between items-center text-center -mt-10 mb-6  rounded-md`}
              >
                <div className="md:flex md:flex-row md:gap-x-4 md:items-center">
                  <img
                    src={job.logo}
                    alt={`${job.id} Image`}
                    className="-mt-5 mb-6 ml-4 md:ml-0 md:-mt-0 md:mb-0 md:w-[140px]"
                  />
                  <div className="flex flex-col md:items-start md:ml-4 mb-7 md:mb-0 gap-y-3 md:gap-y-1">
                    <h1
                      className={`${
                        darkMode ? "text-white" : "text-VeryDarkBlue"
                      } text-xl font-bold`}
                    >
                      {job.company}
                    </h1>
                    <span className="text-DarkGrey">{job.company}.com</span>
                  </div>
                </div>
                <button className="mb-8 md:mr-10 md:mt-8 bg-Blue bg-opacity-10 rounded-md px-5 py-3 hover:opacity-80 hover:scale-105 duration-500">
                  <a href={`${job.website}`} className="text-Blue font-bold">
                    Company Site
                  </a>
                </button>
              </div>
            </motion.div>
            {/*  */}
            {/* </div> */}
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 6, y: 0 }}
              transition={{ duration: 1 }}
              key={job.id}
            >
              <div
                className={`${
                  darkMode ? "#19202D" : "bg-white"
                } pt-10 px-6 md:px-12 pb-16 rounded-md`}
              >
                <div className="inline-flex text-DarkGrey">
                  <span className="mr-1">{job.postedAt}</span>
                  <span className="mr-1">.</span>
                  <span>{job.contract}</span>
                </div>
                <h1
                  className={`${
                    darkMode ? "text-white" : "text-VeryDarkBlue"
                  }  text-xl font-bold mt-3 mb-3`}
                >
                  {job.position}
                </h1>
                <h2 className="text-Blue text-sm font-bold">{job.location}</h2>
                <button className="mt-14 text-white font-bold bg-Blue py-4 w-full rounded-lg hover:opacity-80 duration-500">
                  <a href={``}>Apply Now</a>
                </button>
                <p className="mt-8 mb-10 text-DarkGrey leading-7">
                  {job.description}
                </p>
                <h1
                  className={`${
                    darkMode ? "text-white" : "text-VeryDarkBlue"
                  } text-xl font-bold mb-7`}
                >
                  Requirements
                </h1>
                <p className="text-DarkGrey leading-7 mb-8">
                  {job.requirements.content}
                </p>
                <ul className="flex flex-col gap-y-2 text-DarkGrey leading-7 mb-10">
                  {job.requirements.items.map((requirement, index) => {
                    return (
                      <li key={index} className="list-disc">
                        {requirement}
                      </li>
                    );
                  })}
                </ul>
                <h1
                  className={`${
                    darkMode ? "text-white" : "text-VeryDarkBlue"
                  } text-xl font-bold mb-7`}
                >
                  What You Will Do
                </h1>
                <p className="text-DarkGrey leading-7 mb-8">
                  {job.role.content}
                </p>
                <ul className="flex flex-col gap-y-2 text-DarkGrey leading-7 mb-10">
                  {job.role.items.map((role, index) => {
                    return (
                      <li key={index} className="list-decimal">
                        {role}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>

            <div className="mt-4 p-6">
              <button className="py-4 w-full bg-Blue text-white font-bold text-center items-center rounded-md hover:opacity-80 duration-500">
                <a href={``}>Apply Now</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleJobs;
