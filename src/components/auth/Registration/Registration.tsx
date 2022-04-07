import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';
import { useDispatch } from 'react-redux';
import BasicAlerts from '../../featers/alerts/Alerts';
import { registrationTC } from '../../../store/auth/auth-reducers';
import s from './../Login/Login.module.css'
import ErrorSnackbar from '../../featers/alerts/ErrorSnackbar';
import { Link } from 'react-router-dom';



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



function Registration() {
    const dispatch = useDispatch();


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
            dispatch(registrationTC(values))
            formik.resetForm();
        },
    })

    return <div className={s.generalContainer}>
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <Item>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
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
                                <Button type={'submit'} variant={'contained'} color={'primary'}>
                                    Registration
                                </Button>
                                <Link to="/login">Login</Link>
                            </FormGroup>
                        </FormControl>
                    </form>
                    <ErrorSnackbar />
                </Item>
            </Grid>
        </Grid >
    </div>
}

export default Registration