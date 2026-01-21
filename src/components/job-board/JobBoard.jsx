import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import "./jobs.css";

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [jobIds, setJobIds] = useState([]);
  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const res = await axios.get(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        const latestJobIds = res.data.splice(0, 9);
        setJobIds(res.data);
        fetchJobs(latestJobIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobIds();
  }, []);

  const fetchJobs = async (latestJobIds) => {
    try {
      const promises = latestJobIds.map((ids) => {
        return axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${ids}.json`
        );
      });
      const res = await Promise.all(promises);
      const jobMetaData = res.map((r) => {
        return r.data;
      });
      setJobs((prev) => {
        let copy = [...prev];
        copy = [...copy, ...jobMetaData];
        return copy;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    const copyJobIds = [...jobIds];
    if (copyJobIds.length > 0) {
      const ids = copyJobIds.splice(0, 6);
      fetchJobs(ids);
      setJobIds(copyJobIds);
    }
  };

  console.log(jobIds);
  //   console.log(jobs);

  return (
    <div className="">
      <h1>Job Board</h1>

      <div className="cards">
        {jobs.map(({ id, time, title }) => (
          <JobCard key={id} time={time} title={title} />
        ))}
        {jobIds.length > 0 && (
          <button
            className="border-2 p-2 rounded-xl h-10 w-30 cursor-pointer"
            onClick={handleClick}
          >
            Load More...
          </button>
        )}
      </div>
    </div>
  );
}
