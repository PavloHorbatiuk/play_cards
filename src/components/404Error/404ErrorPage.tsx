import { Button } from '@mui/material'
import Typography from '@mui/material/Typography/Typography'
import React from 'react'
import Header from '../header/Header'
import pageNotFoundSVG from './../../assets/404Error.svg'
import s from './404ErrorPage.module.scss'


function PageNotFound() {
	return (
		<>
			<Header />
			<div className={`${s.mainContainer} ${"_container"}`}>
				<div className={s.textContainer}>
					<Typography variant='h3' >
						Oops....
					</Typography>
					<Typography variant='h4'>
						Page  not found
					</Typography>
					<Typography>
						This Page doesn`t exist or was removed!
						We suggest you  back to home.
					</Typography>
					<Button sx={{ width: "200px" }} variant='contained' >Back to home</Button>
				</div>
				<div className={s.imageContainer}>
					<img className={s.img} src={pageNotFoundSVG} alt="404" />
				</div>
			</div>
		</>
	)
}

export default PageNotFound