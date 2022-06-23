import React, { useState, useEffect } from 'react'
import {
    Stack, VStack, Button, FormControl,
     Heading,Flex
} from "@chakra-ui/react"
import { useFormik } from 'formik';
import Sidebar from '../components/Sidebar'



import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { setAddProduct } from "../features/product/productSlice"

function Product() {

    //  const [name, setName] = useState("");
    //  dispatch(resetAddProduct());
    const dispatch = useDispatch();

    return (
        <Flex>
            <Sidebar />
            <Stack
                p="5"
                bg="">
                <Heading as='h2' size='xl'>
                    All Product
                </Heading>

                <FormControl mt="5">
                        <Button  onClick={() => {
                              dispatch(setAddProduct(true));
                            
                    }} colorScheme='red'>Save Product</Button>
                </FormControl>

            </Stack>

        </Flex>

    )
}

export default Product;