import React from 'react'
import { Link as RouteLink } from "react-router-dom";
import { Flex, Text, Icon, Link, Menu, MenuButton, MenuList } from "@chakra-ui/react"



function NavItem({ navSize, title, icon, active, dest }) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}>

      <Menu>
        <RouteLink to={dest}>
        <Link
          backgroundColor={active && "palevioletred"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "palevioletred" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" color={active ? "white" : "grey"} />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>

        </Link>
        </RouteLink>
        

      </Menu>
    </Flex>



  )
}

export default NavItem