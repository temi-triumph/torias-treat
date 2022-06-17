
import React, { useState } from "react";
import {
    Flex, Text, IconButton, Divider, Avatar, Heading
} from "@chakra-ui/react"

import { FiMenu, FiHome, FiUser, FiSettings, FiActivity } from "react-icons/fi"

import NavItem from "./Navigation/NavItem";

function Sidebar() {

    const [navSize, changeNavSize] = useState("large");

    return (
        <Flex
            pos="sticky"
            left="0" // 4
            h="100vh"
            marginTop="0"
           // backgroundColor="black"
            //borderRadius={navSize == "small" ? "15px" : "30px"}
             boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >

            <Flex p="5%"
                flexDir="column"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: "none" }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Home" dest="/home"/>
                <NavItem navSize={navSize} icon={FiActivity} title="Dashboard" dest="/dashboard"/>
                <NavItem navSize={navSize} icon={FiSettings} title="Account" dest="/account"/>
              
            </Flex>



            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"}></Divider>

                <Flex mt={4} align="center">
                    <Avatar size="sm" />
                    <Flex
                        display={navSize == "small" ? "none" : "flex"}
                        flexDir="column"
                        ml={4}>
                        <Heading size="sm" as="h3">Temi</Heading>
                        <Text color="gray">Admin</Text>

                    </Flex>

                </Flex>

            </Flex>

        </Flex>
    )
}

export default Sidebar