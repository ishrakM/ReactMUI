//import React from 'react'
import bg_video from './../assets/bg_video_com.mp4'
import { Typography } from '@mui/material'


const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={bg_video} autoPlay loop muted />
        <div className="content">
   
        <Typography variant='h2'>My name is Ishrak. Welcome To My world</Typography>

        <Typography variant='subtitle1'>Here you will find my career profile, education and </Typography>
        <Typography variant='subtitle1'>experience along with the career goal I am aiming for. </Typography>
        <Typography variant='subtitle1'>Contacting me is as simple as pushing some buttons.</Typography>     
        <Typography variant='subtitle1'>Feel free to roam around, watch amazing memories I have or just play a game !</Typography>
            {/* <h1>Welcome</h1>
            <p>To my site.</p> */}
        </div>
    </div>
  )
}

export default Main