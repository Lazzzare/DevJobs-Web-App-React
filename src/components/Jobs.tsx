import dataType from "./../components/dataTypes";

interface Props {
  data: (typeof dataType)[];
  darkMode: boolean;
}

const Jobs = ({ data, darkMode }: Props) => {
  return (
    <div className="px-6 mt-14 flex flex-col space-y-11">
      {data.map((job) => {
        return (
          <div
            key={job.id}
            className={`relative pt-12 pb-9 px-8 ${
              darkMode ? "bg-VeryDarkBlue" : "bg-white"
            } duration-1000 transition-all`}
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
            <p className="mt-11 text-Blue text-sm font-bold">{job.location}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
