# EC-Design

#### By: Elvedin Cekic

# 

## Overview

#

EC-Design is a a mock e-commerce clothing app that allows users to navigate and utilize the application as if it were the real deal. The users are enabled
to sign up with email and password, sign in with username and password as well as signing in with a google account! Users are also able to check out various 
clothing sections that they can add to their shopping cart which can diractly navigate to a checkout page where you can increment your item quantity, 
decrement and remove all together!

#

## Code Snippet
```

export const createuser = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the ueer', error.message)
    }
  }
  return userDocRef
}
```
#

The code snippet about comes from my firebase utility folder. This function is used to generate new users inside the firebase database! Which can be later called in a component that utilizes can utilize this function to create users on the front-end of the application!

#

## Whimsical
[Click Here](https://whimsical.com/app-P1YRTdtyRrU7XLaxdc47U9) to review my component architecture.

# 

## Post-MVPs

- Using Stripe api to allow users to pay for items at checkout using a mock credit card.
- Creating a mobile variation of the application.

#

### Web-URL

[EC-Design](https://ec-design.netlify.app/)
