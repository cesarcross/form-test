import styles from '../../styles/JobDescription.module.css'
import { useState, useEffect } from "react";
import Link from "next/link";

const JobDescription = () => {

const [isLoading, setIsLoading] = useState(true)
const [jobDescription, setJobDescription] = useState([])

useEffect(() => {
  fetchJobDescription()
  console.log('JOBDESC', jobDescription)
}, [])

const fetchInit = {
  method: 'GET', 
  headers: new Headers({
    'Content-Type': 'application/json'
  }), 
}

const fetchJobDescription = async () => {
  const res = await fetch('https://api.prod.workwolf.com/business/public/job-link/4KGQ5SRD', fetchInit)

  res.json().then(data => 
    {
      setJobDescription([data])
      console.log('DATA', [data])
      setIsLoading(false)
    }).catch(err => console.log(err))
}

return (
  <div className={styles.container}>
    <h1>Job Description</h1>
    
    <div>
      {isLoading ? <p>Loading...</p> : jobDescription.map((e) => {
        return (
          <div key={e.jobLinkId} className={styles.description}>
            <div className={styles.item}>{e.code}</div>
            <div>{e.jobTitle}:</div>
            <div>{e.description}</div>
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