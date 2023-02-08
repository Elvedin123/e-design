import { signInWithGooglePopup, createuser } from '../../utilities/firebase/firebase.utils'

const Signin = () => {
  const logGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createuser(user)
  }

  return (
    <div>
      <h1> Sign in page </h1>
      <button onClick={logGoogle}>
        Sign in with Google Popup
      </button>
    </div>
  )
}
export default Signin