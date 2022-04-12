import { Button, styled } from '@mui/material'
import Typography from '@mui/material/Typography/Typography'
import React from 'react'
import Header from '../header/Header'
import pageNotFoundSVG from './../../assets/404Error.svg'
import s from './404ErrorPage.module.scss'
import { useNavigate } from "react-router-dom"
import styles from './../../index.module.scss'

const MyTypography = styled(Typography)({
	marginBottom: "20px"
});

function PageNotFound() {
	let navigate = useNavigate()
	const onClickHandler = () => {
		let path = `/`;
		navigate(path);
	}

	return (
		<div>
			<Header />
			<div className={`${s.mainContainer} ${styles.container}`}>
				<div className={s.textContainer}>
					<Typography variant='h3'  >
						Oops....
					</Typography>
					<Typography variant='h4' sx={{ marginBottom: "20px" }}>
						Page  not found
					</Typography>
					<Typography >
						This Page doesn`t exist or was removed!
					</Typography>
					<MyTypography>
						We suggest you  back to home.
					</MyTypography>
					<Button sx={{
						width: "200px",
						marginTop: "20px"
					}} variant='contained'
						onClick={onClickHandler}
					>
						Back to home
					</Button>
				</div>
				<div className={s.imageContainer}>
					<img className={s.img} src={pageNotFoundSVG} alt="404" />
				</div>

			</div>
		</div>
	)
}

export default PageNotFound