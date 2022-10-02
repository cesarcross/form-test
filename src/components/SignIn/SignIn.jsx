import styles from '../../../styles/SignIn.module.css'

const SignIn = () => {

const onClick = () => {
  alert('Going to SignIn page')
}

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <p>_______</p>
        <p>
          Already have an account?
        </p>
        <p>_______</p>
      </div>
      <button type='submit' onClick={onClick}>
        Sign in
      </button>
    </div>
  )
}

export default SignIn