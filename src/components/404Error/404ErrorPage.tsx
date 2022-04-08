import { Button } from '@mui/material'
import Typography from '@mui/material/Typography/Typography'
import React from 'react'
import Header from '../header/Header'
import pageNotFoundSVG from './../../assets/404Error.svg'
import s from './404ErrorPage.module.scss'
import { useNavigate } from "react-router-dom"



function PageNotFound() {

	let navigate = useNavigate()
	const onClickHandler = () => {
		let path = `/`;
		navigate(path);
	}

	return (
		<div>
			<Header />
			<div className={`${s.mainContainer} ${"_container"}`}>
				<div className={s.textContainer}>
					<Typography variant='h3'  >
						Oops....
					</Typography>
					<Typography variant='h4' sx={{ marginTop: "15px" }} >
						Page  not found
					</Typography>
					<Typography sx={{ marginTop: "15px" }}>
						This Page doesn`t exist or was removed!
					</Typography>
					<Typography>
						We suggest you  back to home.
					</Typography>
					<Button sx={{
						width: "200px",
						marginTop: "30px"
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