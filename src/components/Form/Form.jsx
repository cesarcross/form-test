import * as React from 'react'
import axios from 'axios'
import '../../../styles/Form.module.css'
import Image from 'next/image'

import uploadIcon from '../../../public/upload-icon.png'

import styles from '../../../styles/Form.module.css'
import { FILE_TYPE, UPLOAD_RESUME } from '../../../utils/constants'

const Form = () => {

  const [appendedFile, setAppendedFile] = React.useState()

  const [userInfo, setUserInfo] = React.useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleUploadFile = (e) => {
    setAppendedFile(e.target.files[0])
  }

  const fileUpload = () => {
    const url = 'http://localhost:3000/';
    const formData = new FormData();
    formData.append('file', appendedFile);
    formData.append('fileName', appendedFile.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

    alert('File successfully uploaded!')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(typeof appendedFile)
    if (appendedFile) fileUpload()

    console.log('NEW USER', userInfo)
  }

  console.log('UPLOAD FILE', appendedFile)

  const onChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form className={styles.formcontainer}>
        <label htmlFor="first name">First name</label>
        <input type="text" id="first" name="firstName" required onChange={onChange} />

        <label htmlFor="last name">Last name</label>
        <input type="text" id="last" name="lastName" required onChange={onChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required onChange={onChange} />

        <h2>{UPLOAD_RESUME}</h2>

        <div className={styles.uploadfilecontainer}>
          <label htmlFor='file-input'>
            <Image
              src={uploadIcon}
              alt='upload file'
            />
          </label>
          <input id="file-input" type="file" onChange={handleUploadFile}  />
          <p>Drag your file here or <strong>Browse</strong></p>
          <p>{FILE_TYPE}</p>
        </div>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )

}

export default Form