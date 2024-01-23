import dataType from "./../components/dataTypes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface JobsProps {
  filteredData: (typeof dataType)[];
  darkMode: boolean;
}

const Jobs = ({ filteredData, darkMode }: JobsProps) => {
  return (
    <div className="mt-14 mx-auto grid-flow-row max-w-[327px] md:max-w-[689px] lg:max-w-[1110px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredData.map((job) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 6, y: 0 }}
            transition={{ duration: 1 }}
            key={job.id}
          >
            <Link to={`/${job.id}`}>
              <div
                className={`relative pt-12 pb-9 px-8 max-w-[327px] md:max-w-[339px] lg:max-w-[350px] mb-10 ${
                  darkMode ? "bg-VeryDarkBlue" : "bg-white"
                } duration-1000 transition-all hover:scale-105 ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-slate-200"
                }`}
              >
                <img
                  src={job.logo}
                  alt={`${job.company} Logo`}
                  className="absolute -top-5 left-8"
                />
                <p className="text-DarkGrey">
                  {job.postedAt} <span>.</span> {job.contract}
                </p>
                <h1
                  className={`mt-4 mb-[17px] ${
                    darkMode ? "text-white" : "text-VeryDarkBlue"
                  } text-xl font-bold`}
                >
                  {job.position}
                </h1>
                <h2 className="text-DarkGrey">{job.company}</h2>
                <p className="mt-11 text-Blue text-sm font-bold">
                  {job.location}
                </p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Jobs;
