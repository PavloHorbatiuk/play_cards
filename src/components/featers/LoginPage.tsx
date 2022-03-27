import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';
import BasicAlerts from './alerts/Alerts';
import { useDispatch } from 'react-redux';
import { loginTC } from '../../store/Login/auth-reducers';
import { useAppSelector } from '../../store/state';
import { Navigate } from 'react-router-dom';



type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const LoginPage = () => {

    const dispatch = useDispatch();
    const IsloggedIn = useAppSelector(state => state.login)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length <= 2) {
                errors.password = 'Invalid password'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm();
        },
    })
    if (IsloggedIn.isLoggedIn) {
        return <Navigate to='/' />
    }
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <Item>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <p>To log in get registered
                                <a href={'https://social-network.samuraijs.com/'}
                                    target={'_blank'}> here
                                </a>
                            </p>
                            <p>or use common test account credentials:</p>
                            <p>Email: free@samuraijs.com</p>
                            <p>Password: free</p>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email
                                ? <div >< BasicAlerts error={formik.errors.email} /></div>
                                : null
                            }
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password
                                ? <div><BasicAlerts error={formik.errors.password} /></div>
                                : null
                            }
                            <FormControlLabel label={'Remember me'} control={<Checkbox />}
                                {...formik.getFieldProps('rememberMe')} />
                           
                                <Button type={'submit'} variant={'contained'} color={'primary'}>
                                    Login
                                </Button>                          
                        </FormGroup>
                    </FormControl>
                </form>
            </Item>
        </Grid>
    </Grid >
}