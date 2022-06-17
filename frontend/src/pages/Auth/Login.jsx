import React from 'react'
import SigninForm from "../../components/Form/SigninForm"
import {
  Stack,
} from "@chakra-ui/react"

function Login() {
  return (
    <Stack h="100vh" w="100vw"
      justify="center"
      align="center"
       bg="#dddddd">

  
      <SigninForm />
    </Stack>



  )
}

export default Login