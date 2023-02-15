import { useState, useContext } from "react"
import Button from "../button/button.componen"
import { createauthuser, createuser } from "../../utilities/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'
import { UserContext } from "../../contexts/user.context"


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext)
  // console.log(formFields)
  const resetForm = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const { user } = await createauthuser(email, password)
      // console.log(res)
      setCurrentUser(user)
      await createuser(user, { displayName })
      resetForm()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, Email already in use')
      } else {

        console.log('user creation encoutered an error', error)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label={'Display Name'}
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName} />


        <FormInput
          label={'Email'}
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email} />

        <FormInput
          label={'Password'}
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password} />


        <FormInput
          label={'Confirm Password'}
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword} />

        <Button type='submit'>Sign Up </Button>
      </form>
    </div>
  )
}
export default SignUpForm