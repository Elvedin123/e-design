

import { signInWithGooglePopup, createuser } from '../../utilities/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Signin = () => {



  const logGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createuser(user)
    // console.log(userDocRef)
  }


  return (
    <div>
      <h1> Sign in page </h1>
      <button onClick={logGoogle}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  )
}
export default Signin