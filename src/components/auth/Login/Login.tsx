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
import BasicAlerts from '../../featers/alerts/Alerts';
import { useDispatch } from 'react-redux';
import { loginTC } from '../../../store/auth/auth-reducers';
import ErrorSnackbar from '../../featers/alerts/ErrorSnackbar';
import { useAppSelector } from '../../../store/state';
import { Link, Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography/Typography';
import { PATH } from '../../../enums/routs';
import makeStyles from '@mui/styles/makeStyles/makeStyles';
import s from './../Login/Login.module.css'


const useStyles = makeStyles({
    btn: {
        margin: "0 auto",
    },
    recovery: {
        display: "flex",
        justifyContent: "end",
        marginBottom: "20px"
    }
});

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: "center",
    height: "600px",
    width: "413px",
}));


export const Login = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const isAuth = useAppSelector(state => state.login.isAuth)



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
    if (isAuth) return <Navigate to={PATH.MAIN} />


    return (
        <div className={s.generalContainer}>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <Item sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl >
                                <Typography variant="h4" >
                                    IT-incubator
                                </Typography>
                                <Typography variant="h4" sx={{ marginBottom: "20px" }} >
                                    Sign In
                                </Typography>
                                <FormGroup>
                                    <TextField
                                        label="Email"
                                        margin="normal"
                                        {...formik.getFieldProps('email')} />
                                    {formik.touched.email && formik.errors.email
                                        ? <div>< BasicAlerts error={formik.errors.email} /></div>
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
                                    <Link to={PATH.RECOVERY_PASSWORD}>
                                        <Typography className={classes.recovery} variant="h2">
                                            Forgot Password
                                        </Typography>
                                    </Link>
                                    <FormControlLabel sx={{ marginTop: '80px' }} label={'Remember me'} control={<Checkbox />}
                                        {...formik.getFieldProps('rememberMe')} />
                                    <Button className={classes.btn} type={'submit'} variant={'contained'} color={'primary'}>
                                        Login
                                    </Button>
                                </FormGroup>
                                <Typography sx={{ marginTop: '31px' }} variant="h3">
                                    Don’t have an account?
                                </Typography >
                                <Link to={PATH.REGISTRATION}>
                                    <Typography variant="h2">
                                        Sign Up
                                    </Typography>
                                </Link>
                            </FormControl>
                        </form>
                        <ErrorSnackbar />
                    </Item>
                </Grid>
            </Grid >
        </div >
    )
}