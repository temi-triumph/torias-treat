import React from 'react'
import { Flex } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'

import RegisterForm from "../components/Form/SigninForm"



function Home() {
  return (
    <Flex>
      <Sidebar/>
      <h1>Home Page</h1>
    </Flex>    

  )
}

export default Home