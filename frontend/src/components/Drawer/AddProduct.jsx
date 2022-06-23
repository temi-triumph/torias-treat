import React, { useState, useEffect } from 'react'
import {
    Stack, VStack, Button, FormControl, FormLabel,
    FormErrorMessage,
    Input, FormHelperText, InputGroup, InputRightElement, Heading, Flex, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Alert,AlertIcon
} from "@chakra-ui/react"
import { useFormik } from 'formik';



import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { save,reset, resetAddProduct } from "../../features/product/productSlice"


function AddProduct() {

    //   const [isOpen, setIsOpen] = useState(false);
    //   const [onClose, setOnClose] = useState(false);


    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message, addProduct, } = useSelector(
        (state) => state.product
    )

    useEffect(() => {
        if (isError) {
            console.log("front end error response")
            console.log(message);
        }
        if (isSuccess) {
            console.log("front end success response")
            console.log(message);
            //// redirect user to main dashboard here
        }

        if (addProduct) {
            //// is the modal opens
            // clearthe dea=fault fields in the form
            // clear the state too

            //// redirect user to main dashboard here
        }
        //  dispatch(reset());

    }, [user, isError, isSuccess, message, dispatch])




    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'name is required';
        }

        if (!values.description) {
            errors.description = 'description is required';
        }

        if (!values.price) {
            errors.price = 'price is required';
        }

        if (!values.category) {
            errors.category = 'category is required';
        }
        // else if (values.description.length < 7) {
        //     errors.description = 'description must be at least 7 characters';
        // }
        return errors;
    };


    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            category: "",
            price: 0,
            media: ""
        },
        validate,
        onSubmit: values => {
            console.log("product form values below")
            console.log(values)
            
            /// calls the save action in the product slice
            dispatch(save(values));
            /// reset the product state excluding the products array
            dispatch(reset);

        },
    })



    return (
        <Drawer onClose={() => { }} isOpen={addProduct} size='md'>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerHeader>New Product</DrawerHeader>
                <DrawerCloseButton onClick={() => {
                    dispatch(resetAddProduct(false));
                }} />
                <DrawerBody pt="10" pb="10">
            

                {isError ? (
                            <Alert mb="6" status='error'>
                                <AlertIcon />
                               {message}
                            </Alert>
                        ) : null}

                    <form onSubmit={formik.handleSubmit}>
                    
                        <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                            <FormLabel >Name</FormLabel>
                            <Input type="text" id="name" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} />

                            {formik.touched.name && formik.errors.name ? (
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                            ) : null}
                        </FormControl>

                        <FormControl mt="5" isInvalid={formik.touched.description && formik.errors.description}>
                            <FormLabel >Description</FormLabel>

                            {/* this should be a text area */}
                            <Input type="text" id="description" onBlur={formik.handleBlur} value={formik.values.description} onChange={formik.handleChange} />

                            {formik.touched.description && formik.errors.description ? (
                                <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
                            ) : null}
                        </FormControl>

                        <FormControl mt="5" isInvalid={formik.touched.category && formik.errors.category}>
                            <FormLabel >Category</FormLabel>

                            {/* this should be a text area */}
                            <Input type="text" id="category" onBlur={formik.handleBlur} value={formik.values.category} onChange={formik.handleChange} />

                            {formik.touched.category && formik.errors.category ? (
                                <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
                            ) : null}
                        </FormControl>

                        <FormControl mt="5" isInvalid={formik.touched.price && formik.errors.price}>
                            <FormLabel >Price</FormLabel>
                            <Input type="text" id="price" onBlur={formik.handleBlur} value={formik.values.price} onChange={formik.handleChange} />
                            {formik.touched.price && formik.errors.price ? (
                                <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
                            ) : null}
                        </FormControl>

                        <FormControl mt="5">
                            <Button type='submit' colorScheme='pink'>Save</Button>
                        </FormControl>

                    </form>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default AddProduct