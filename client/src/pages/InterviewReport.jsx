import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Step3Report from "../components/Step3Report";

const ServerUrl = "https://ai-interview-fpa2.onrender.com";

function InterviewReport() {
  const { id } = useParams();
  const [report, setReport] = useState(null);
  

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/interview/report/" + id,
          { withCredentials: true },
        );

        console.log(result.data);
        setReport(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReport();
  }, []);

  return (
    <Step3Report report={report} />
  );
}

export default InterviewReport;
