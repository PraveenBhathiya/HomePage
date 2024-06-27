import './Background.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import video from '../../assets/video.mp4';


const Background = ({playStatus,heroCount}) => {
    
   if (playStatus){
    return(
        <video className='background' autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
    )
    }

    else if(heroCount===0){
        return(
           <img src={img1} className='background  fade-in ' alt="" />
        )
    }
    else if(heroCount===1){
        return(
           <img src={img2} className='background fade-in ' alt="" />
        )
    }
    else if(heroCount===2){
        return(
           <img src={img3} className='background fade-in ' alt="" />
        )
    }
    else if(heroCount===3){
        return(
           <img src={img4} className='background fade-in ' alt="" />
        )
    }
    else if(heroCount===4){
        return(
           <img src={img5} className='background fade-in ' alt="" />
        )
    }
    
}
export default Background;