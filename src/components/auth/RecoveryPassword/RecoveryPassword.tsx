import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginTC } from '../../../store/auth/auth-reducers';
import ErrorSnackbar from '../../featers/alerts/ErrorSnackbar';
import { useAppSelector } from '../../../store/state';
import { Link, Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography/Typography';
import { PATH } from '../../../enums/routs';
import s from './../Login/Login.module.css'
import BasicAlerts from '../../featers/alerts/Alerts';
import Paper from '@mui/material/Paper/Paper';
import makeStyles from '@mui/styles/makeStyles/makeStyles';
import styled from '@mui/material/styles/styled';


const useStyles = makeStyles({

});

type FormikErrorType = {
	email?: string
}

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	// alignItems: "stretch",
	height: "600px",
	width: "413px",
}));

function RecoveryPassword() {

	const dispatch = useDispatch();
	const classes = useStyles();
	// const isAuth = useAppSelector(state => state.login.isAuth)



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
			return errors;
		},
		onSubmit: values => {
			dispatch(loginTC(values))
			formik.resetForm();
		},
	})

	return (
		<div className={s.generalContainer}>
			<Grid container justifyContent={'center'}>
				<Grid item justifyContent={'center'}>
					<Item sx={{
						display: "flex",
						justifyContent: "center",
					}}>
						<form onSubmit={formik.handleSubmit}>
							<FormControl >
								<Typography variant="h4"  >
									IT-incubator
								</Typography>
								<Typography sx={{ marginTop: "40px" }} variant="h4"  >
									Forgot your password?
								</Typography>

								<FormGroup>
									<TextField sx={{ marginTop: "85px" }}
										label="Email"
										margin="normal"
										{...formik.getFieldProps('email')} />
									{formik.touched.email && formik.errors.email
										? <div>< BasicAlerts error={formik.errors.email} /></div>
										: null
									}
									<FormLabel>
										<Typography variant="h3" sx={{ marginTop: "30px" }} >
											Enter your email address and we will send you further instructions
										</Typography>
									</FormLabel>
									<Button sx={{ marginTop: "50px" }}
										type={'submit'} variant={'contained'} color={'primary'}>
										Send Instructions
									</Button>
								</FormGroup>
							</FormControl>
							<Typography sx={{ marginTop: "30px" }} variant="h3">
								Did you remember your password?
							</Typography>
							<Link to={PATH.LOGIN}>
								<Typography sx={{ marginTop: "11px" }} variant="h2">
									Try logging in
								</Typography>
							</Link>
						</form>
						<ErrorSnackbar />
					</Item>
				</Grid>
			</Grid >
		</div>
	)
}

export default RecoveryPassword