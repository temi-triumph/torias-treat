import React, { useState, useEffect } from 'react'
import {
    Stack, Button, FormControl, FormLabel,
    FormErrorMessage,
    Input, FormHelperText, InputGroup, InputRightElement, Heading
} from "@chakra-ui/react"
import { useFormik } from 'formik';


import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from "react-router-dom" 
import {login, reset} from "../../features/auth/authSlice"

function SigninForm() {

    //  const [name, setName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
    )

    useEffect(() => {
        if(isError){
            console.log("front end error response")
            console.log(message);
        }
        if(isSuccess){
            console.log("front end success response")
            console.log(message);
        }
        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch])



    const [showPassword, setShowPassword] = useState(false);

    const validate = values => {
        console.log("validation payload")
        console.log(values)
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is Required';
        }

        if (!values.password) {
            errors.password = 'Password is Required';
        } 
        // else if (values.password.length < 7) {
        //     errors.password = 'Password must be at least 7 characters';
        // }
        return errors;
    };


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: values => {
            console.log(values)
            console.log("vvv")
            dispatch(login(values));
        },
    })
    return (

        <Stack w="50%" bg="white" p="5">

            <Heading as='h2' size='xl'>
                Signin 
            </Heading>
            <form onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                    <FormLabel htmlFor='email' >Email Address</FormLabel>
                    <Input type="email" id="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    {formik.touched.email && formik.errors.email ? (
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    ) : null}
                </FormControl>

                <FormControl  mt="5" isInvalid={formik.touched.password && formik.errors.password}>
                    <FormLabel htmlFor='password'>Password</FormLabel>

                    <InputGroup>
                        <Input autoComplete='off' type={showPassword ? 'text' : 'password'} id="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    {formik.touched.password && formik.errors.password ? (
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    ) : null}
                </FormControl>


                <FormControl  mt="5">
                    <Button type='submit' colorScheme='red'>Signin</Button>
                </FormControl>


            </form>
        </Stack>



    )
}


export default SigninForm