import React,{useState,useEffect} from "react";
import image from '/Portfolio_Image.jpg'
import { Carousel,Card,Label,TextInput,Checkbox,Button } from "flowbite-react";
import mongodb from '/mongodb.png'
import node from '/node.png';
import express from '/express.png'
import react from '/react.png'
import udemy from '/certi_udemy.png'
import google from '/google.png'
import aiesec from '/aiesec.png'
import innovate from '/Innovate4india.jpeg'
import coordinator from '/coordinator.png'
import niyukti from '/niyukti.jpeg'
import facebook from '/facebook_proj.png'
import yelp_camp from '/yelpcamp_proj.png'
import Rentofy from '/Rentofy_proj.png'
import portfolio from '/portfolio_proj.png'
import resume from '/Nishant_Asnani_Resume.pdf'

const Test = () => {
  const [istheme,Setistheme]=useState("dark-theme");
  const changetheme=()=>{
    if(istheme==="dark")
    {
      Setistheme('light')
    }
    else{
      Setistheme('dark')
    }
  }

  useEffect(()=>{
    document.body.className=istheme;
  },[istheme])
  return (
    <React.Fragment>
      <div className="text-xl mt-[3%]  inline-flex mx-auto max-w-[1000px] flex-row justify-around ">
        
        
        <ul className="flex justify-evenly max-w-[800px] font-semibold">
          <li><a href={resume} download><div>
    <Button
      color="success"
      pill={true}
      className="xxs:w-28 xs:w-28"
    >
      My Resume
    </Button>
  </div>
            </a></li>
          <a href="#skills"><li className="items">Skills</li></a>
          <a href="#certifications"><li className="items">Certifications</li></a>
          <a href="#experience"><li className="items">Experience</li></a>
          <a href="#projects"><li className="items">Projects</li></a>
          <a href="#contactme"><li className="items">Contact me</li></a>
        </ul>

        <div className="pt-[10px]  pl-10">
  <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" onChange={changetheme} className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
      </div>


       
        
      </div>


      <div className="w-full flex xs:flex justify-center">

        <div className="ml-[20%] object-contain mt-[2%]  xs:ml-[5%] xs:h-[700px] xxs:h-[15%] xxs:ml-[10%]  xxs:mt-[10%]">
        <img src={image} 
          alt=""  className="transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer xxs:h-[250px] xxs:ml-[10%]  xxs:mt-[10%]"/>
        </div>

        
          
        <div className="flex w-[30%] right-36 relative mt-10 justify-start xs:ml-5 xs:mt-1 xs:left-8 xs:mb-10 ">
          <p className={`${istheme==='dark'?"text-2xl text-slate-300  xxs:relative xxs:left-52 ":"text-2xl  text-black xxs:relative xxs:left-52" }` }>Hi, I'm <br></br>
          <span className={`${istheme==='dark'?"text-white font-bold xxs:relative":"text-black font-bold xxs:relative" }`}>Nishant Asnani</span><br></br>
          <span className="font-bold text-xl xxs:relative">Web Enthusiast</span><br></br>
          <p className="text-base xs:w-[300px] sm:w-[350px] xxs:w-[400px] xxs:relative">
            Hardworking and focused , A pre-final year computer engineering student.
            Interested in MERN Stack development , Computer Networks ,Operating Systems and 
            C Programming.Looking for experience in domain of web-development.<br></br>
           <br></br>  
            
          </p>
          <div className="flex w-[100px] justify-between">

            <a href="https://github.com/NishantAsnani" className={`${istheme==='dark'?"bg-white":"text-black"}`}>
            
            <img className="w-16 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          
            </a>
          
            <a href="https://www.linkedin.com/in/nishant-asnani-aa6093208/" className={`${istheme==='dark'?"text-white":"text-black"}`} >
            <img className="w-11 h-14 ml-7 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          

            </a>
          </div>
          </p>
        </div>       
      </div>

<div className=" relative bottom-12">
<div className="flex justify-center mb-[2%]">
<h1 id='skills' className="xs:text-3xl xxs:text-2xl text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Skills &#x2BC1;</h1>
</div>


<div className="flex justify-center flex-row flex-wrap">
  

<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          

<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          

<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          

<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" />

<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />

<img  className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          
   
<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
          

<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />


<img  className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                      
   
<img className="w-20 h-14 xxs:w-10 cursor-pointer xxs:h-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                 
          
</div>
</div>


<div className="flex justify-center mb-[2%] mt-[5%]">
<h1 id='certifications' className="xs:text-3xl xxs:text-2xl text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Certificates &#x2BC1;</h1>
</div>


<div className="flex justify-center flex-row flex-wrap-reverse">
<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={udemy} className="xxs:mt-4 xs:mt-4">
    <a href="https://www.udemy.com/certificate/UC-5f5c6928-c62b-4020-9f1f-58124763e3e3/">
    <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      See certificate
    </h6>
    </a>
  </Card>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={google} className="xxs:mt-4 xs:mt-4">
    <a href="https://www.cloudskillsboost.google/public_profiles/9b7d27ce-d52e-4421-8b38-9b3f1fa1b7fc">
    <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      See certificate
    </h6>
    </a>
  </Card>
</div>

</div>



<div className="flex justify-center mb-[2%] mt-[5%]">
<h1 id='experience' className="xs:text-3xl xxs:text-2xl text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Experience &#x2BC1;</h1>
</div>


<div className="flex justify-center flex-row flex-wrap-reverse">


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={aiesec} className="xxs:mt-4 xs:mt-3 ">
    <h6 className="text-lg tracking-tight text-gray-900 dark:text-white">
      Member of IGT Team AIESEC surat conducted meetings with international AIESEC  firms 
      for exchange of interns.
    </h6>
  </Card>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%] rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={innovate} className="xxs:mt-4 xs:mt-3" >
    <h6 className="text-lg tracking-tight text-gray-900 dark:text-white">
      Conducted door-to-door surveys and created awareness regarding 
      dry and wet waste  uder Innovate4India NGO.
    </h6>
  </Card>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={coordinator} className="xxs:mt-4 xs:mt-3" >
    <h6 className="text-lg tracking-tight text-gray-900 dark:text-white">
      Hosted a web based tech event in my college tech-fest named Updates.
    </h6>
  </Card>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl  hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
  <Card imgSrc={niyukti} className="xxs:mt-4 xs:mt-3" >
    <h6 className="text-lg tracking-tight text-gray-900 dark:text-white">
      Stood first in a mock interview based evnent in my college tech-fest
      named Updates.
    </h6>
  </Card>
</div>

</div>


<div className="flex justify-center mb-[2%] mt-[5%]">
<h1 id='projects' className="xs:text-3xl xxs:text-2xl text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Projects &#x2BC1;</h1>
</div>


<div className="flex justify-center flex-row flex-wrap-reverse">
<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl mt-5 hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
 <a href="https://github.com/NishantAsnani/FACEBOOK_CLONE"> <Card imgSrc={facebook} className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Facebook clone
    </h5>
  </Card>
  </a>
</div>


<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl mt-5 hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
 <a href="https://github.com/NishantAsnani/Portfolio"> <Card imgSrc={portfolio} className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Personal portfolio
    </h5>
  </Card>
  </a>
</div>



<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl mt-5 hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
 <a href="https://github.com/Colt/YelpCamp"> <Card imgSrc={yelp_camp} className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Yelp_camp (Part of course code along)
    </h5>
  </Card>
  </a>
</div>

<div className="max-w-sm ml-[10%] transition duration-200 h-[50%]  rounded-2xl mt-5 hover:shadow-[#ff3c78] hover:shadow-lg hover:scale-110 hover:cursor-pointer">
 <a href="https://github.com/NishantAsnani/Rentofy"> <Card imgSrc={Rentofy} className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Rentofy a renting e-commerece
    </h5>
  </Card>
  </a>
</div>

</div>

<div className="flex justify-center mb-[2%] mt-[5%]">
<h1 id='contactme' className="text-5xl transition-all duration-200 ease-in-out hover:tracking-widest cursor-pointer xxs:mt-[40%]">
  &#x2BC1; Let's Talk &#x2BC1;</h1>
</div>

<div className="flex justify-center">
  <ul>
  <li className="text-4xl xs:text-2xl xxs:text-xl">	&#9742; You can call me at: &nbsp; 
  <span className="text-2xl transition duration-200 text-[#ff3c78]  hover:scale-110 hover:cursor-pointer xs:text-xl xxs:text-lg ">
  (+91) 7043680624
    </span> 
  </li>


  <li className="text-4xl mt-2 xs:text-2xl xxs:text-lg">&#128231; Mail me at:&nbsp; 
  <span className="text-2xl transition duration-200 text-[#ff3c78]  hover:scale-110 hover:cursor-pointer xs:text-xl xxs:text-lg ">
     asnaninishant2@gmail.com
    </span> 
  </li>


  <li className="text-4xl mt-2 xs:text-2xl xxs:text-lg">&#128241; You can message me at:&nbsp; 
  <span className="text-2xl transition duration-200 text-[#ff3c78]  hover:scale-110 hover:cursor-pointer xs:text-xl xxs:text-lg ">
     <a href="https://www.linkedin.com/in/nishant-asnani-aa6093208/">Linkedin</a>  
    </span> 
  </li>
  </ul>

  
  
</div>

<footer className="flex justify-center">
<span className="mt-4">&#169; Nishant Asnani All rights reserved</span>

</footer>
    </React.Fragment>
  );
};

export default Test;