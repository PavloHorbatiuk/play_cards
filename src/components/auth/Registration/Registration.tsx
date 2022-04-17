import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
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
import makeStyles from '@mui/styles/makeStyles/makeStyles';
import Typography from '@mui/material/Typography/Typography';



type FormikErrorType = {
    email?: string
    password?: string
}

const useStyles = makeStyles({
    txtItem: {
        fontWeight: "600, Semi Bold",
        fontSize: '26px',
        lineHeight: "39px",
        color: "#2D2E46",
        marginBottom: "20px"
    },
    btn: {
        margin: "0 auto",
        marginTop: "20px"
    },
    link: {
        color: "#2D2E46",
        fontSize: '26px',
        backgroundColor: "#D7D8EF",
        marginTop: '20px'
    }
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: "413px",
    height: '540px',

}));



function Registration() {
    const dispatch = useDispatch();
    const classes = useStyles();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
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
            } if (!values.confirmPassword) {
                errors.password = "Required"
            } else if (values.password !== values.confirmPassword) {
                errors.password = "passwords do not match"
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
                    <Typography className={classes.txtItem} variant="h4">It-incubator</Typography>
                    <Typography className={classes.txtItem} variant="h4">Sign Up</Typography>
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
                                <TextField
                                    type="password"
                                    label="Confirm password"
                                    margin="normal"
                                    {...formik.getFieldProps('confirmPassword')}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword
                                    ? <div><BasicAlerts error={formik.errors.confirmPassword} /></div>
                                    : null
                                }
                                <Button className={classes.btn} type={'submit'} variant={'contained'} color={'primary'}>
                                    Registration
                                </Button>
                                <Link className={classes.link} to="/login">Cancel</Link>
                            </FormGroup>
                        </FormControl>
                    </form>
                    <ErrorSnackbar />
                </Item>
            </Grid>
        </Grid >
    </div >
}

export default Registration