import React from 'react'
import AuthPageComponent from '../../components/application/authcomponents/authpagecomponent'
import SignupComponent from '../../components/application/authcomponents/signupcomponent'

export default function SignupPage() {
  return (
    <AuthPageComponent formComponent={SignupComponent}/>
  )
}
