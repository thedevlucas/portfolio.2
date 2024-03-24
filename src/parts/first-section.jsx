import iconList from "../assets/images/mainIconsdark.svg";
import video from "../assets/images/bgvideo.mp4"
//import React, { useRef, useEffect } from 'react';

function FirstSection(){
    //const videoRef = useRef(null);

    //useEffect(() => {
        //if (videoRef.current) {
        //videoRef.current.play();
        //}
    //}, []);

    return(
        <>
            <section className="first-section" id="top-head">
                <video src={video} autoPlay muted loop/>
                <header>
                    <div id="bg"></div>
                    <div className="title">
                        <a href="https://www.google.com/"><span>Lucas Juarez |<a href="https://github.com/TheDevLucas"><i className='bx bxl-github'></i> Github</a><a href="https://www.google.com/"><i className='bx bxl-linkedin-square'></i> LinkedIn</a></span></a>
                    </div>
                    <ul>
                        <li><a id="btn" href="#top-head" className="selected">Home</a></li>
                        <li><a id="btn2" href="#overview">Overview</a></li>
                        <li><a id="btn3" href="#knowledge">Knowledge</a></li>
                    </ul>
                </header>
                <div className="intro">
                    <div className="desc">
                        <h2>LUCAS JUAREZ</h2>
                        <h1>Full Stack Developer and Web Designer</h1>

                        <img src={iconList} alt=""/>
                    </div>
                    <div className="media">
                        <a href="https://www.google.com/"><i className='bx bxs-file'></i> <b>Curriculum</b></a>
                        <a href="https://www.google.com/"><i className='bx bxs-file'></i> <b>Contact Me</b></a>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default FirstSection;