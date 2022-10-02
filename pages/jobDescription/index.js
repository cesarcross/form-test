import { dataJS } from "../api/dataJS";
import styles from '../../styles/JobDescription.module.css'
import { useState } from "react";
import Link from "next/link";

const JobDescription = () => {

const [isLoading, setIsLoading] = useState(true)
const [jobPost, setJobPost] = useState([])

setTimeout(() => {
  setJobPost(Object.entries(dataJS))
  setIsLoading(false)
}, 2000);

return (
  <div className={styles.container}>
    <h1>Job Description</h1>
    
    <div>
      {isLoading ? <p>Loading...</p> : jobPost.map((e) => {
        return (
          <div key={e.jobLinkId} className={styles.description}>
            <div className={styles.item}>{e[0]}:</div>
            <div>{e[1]}</div>
          </div>
          )
        })}
    </div>
    <Link href={'/'}>
      <button>Back</button>
    </Link>
  </div>
  );
}

export default JobDescription