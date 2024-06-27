import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


const App = () => {

let heroData = [
  {text1:"Welcome To",text2:"Faculty of Engineering"},
  {text1:"University of Ruhuna",text2:"Department of Electrical and Information Engineering"},
  {text1:"Seamless task tracking for ",text2:"students and mentors."},
  {text1:"Effortlessly manage",text2:" deadlines and milestones."},
  {text1:"Streamlined project completion",text2:" through efficient collaboration."},
]

const [heroCount,setHeroCount] = useState(0);
const [playStatus,setPlayStatus] = useState(false);

useEffect(()=>{
  setInterval(()=>{
      setHeroCount((count)=>{return count===4?0:count+1})
  },5000)
},[])

  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <Navbar/>
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        
        />

    </div>
  )
}

export default App;