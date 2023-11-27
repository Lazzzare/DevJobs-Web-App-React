import dataType from "./../components/dataTypes";

interface Props {
  data: (typeof dataType)[];
}

const Jobs = ({ data }: Props) => {
  return (
    <div className="px-6 mt-14">
      <div>
        {data.map((job) => {
          return (
            <div>
              <img src={job.logo} alt={`${job.company} Logo`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
