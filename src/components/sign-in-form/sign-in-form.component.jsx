import { useState } from "react"
import Button from "../button/button.componen"
import { createuser, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'


const defaultFormFields = {
  email: '',
  password: ''
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields;

  // console.log(formFields)
  const resetForm = () => {
    setFormFields(defaultFormFields)
  }


  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    createuser(user)
    // console.log(userDocRef)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    resetForm(defaultFormFields)
    try {
      await signInAuthUserWithEmailAndPassword(email, password)

    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email!')
          break
        case 'auth/user-not-found':
          alert('No user associated with this email!')
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value })
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

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

        <div className="buttons-container">
          <Button type='submit'>Sign In </Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In </Button>
        </div>

      </form>
    </div>
  )
}
export default SignInForm