import React from 'react'
import AuthPageComponent from '../../components/application/authcomponents/authpagecomponent'
import LoginComponent from '../../components/application/authcomponents/logincomponent'

export default function LoginPage() {
    return (
        <AuthPageComponent formComponent={LoginComponent}/>
    )
}
