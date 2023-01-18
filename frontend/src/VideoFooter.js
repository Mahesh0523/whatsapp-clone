import React from 'react'
import './VideoFooter.css'
import { MusicNote } from '@material-ui/icons'
import Ticker from 'react-ticker'

const VideoFooter = ({channel, description, song}) => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@{channel}</h3>
            <p>{description}</p>
            <div className='videoFooter__ticker'>
                <MusicNote className='videoFooter__icon'/>
                {/* <Ticker mode='smooth'>
                    {({index})=>(
                        <>
                           <p> I am windows</p>
                        </>
                    )}
                </Ticker> */}
            </div>
        </div>
        <img className='videoFooter__record' src='https://tse1.mm.bing.net/th?id=OIP.uE2mFYxNH-2t0HvE1CmkrgHaFj&pid=Api&P=0' alt='video footer'/>
    </div>
  )
}

export default VideoFooter