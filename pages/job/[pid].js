import { useRouter } from 'next/router'
import { dataJS } from '../api/dataJS'

const Job = () => {
  const router = useRouter()
  const { pid } = router.query

  const jobFound = pid === dataJS.code

  const {jobTitle, description, companyCountry, workModel} = dataJS

  return (
    <>
      <h2>Job Details</h2>
      {jobFound ? (
        <>
          <div>
            <p>Code: {pid}</p>
            <p>JobTitle: {jobTitle}</p>
            <p>Description: {description}</p>
            <p>Company Country: {companyCountry}</p>
            <p>Work Model: {workModel}</p>
          </div>
        </>
      ) : <p>No job found</p>
      }
    </>
  )
}

export default Job