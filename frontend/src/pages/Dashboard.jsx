import React from 'react'
import { Flex } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
function Dashboard() {
  return (
    <Flex>
      <Sidebar/>
      <h1>Dashboard Page</h1>
    
    </Flex>    
  )
}

export default Dashboard