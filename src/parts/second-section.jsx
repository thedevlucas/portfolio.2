// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Copyright from "../components/copyright.jsx";

//import the projects
import starbucks from "../assets/images/projects/starbucks.png";
import vr from "../assets/images/projects/vr.png";
import chevrolet from "../assets/images/projects/chevrolet.png";
import burgerking from "../assets/images/projects/burgerking.png";
import apple from "../assets/images/projects/apple.png";


import SkillsComponent from "../components/skills";

//Import icons
import developerIcon from "../assets/images/mobile-896ef2f5.png";
import designerIcon from "../assets/images/web-0d05165f.png";

function SecondSection(){
    var elements = document.getElementsByClassName("loadingscreen");
    let borrado = 0;
    window.onload = () => {
        document.querySelector(".path").style.animation = "swipe-dot 2s 0.5s infinite";
  
        document.querySelector(".hand-icon").style.animation = "swipe-hand 2s infinite";
    }
    
    setTimeout(() => {
        if (elements && elements.length > 0) {
            const firstElement = elements[0];
            if (firstElement) {
                firstElement.classList.add("appear");
                setTimeout(() => {
                    firstElement.remove();
                }, 2000);
            }
        }    
    }, 2000);

    document.addEventListener("scroll", () => {
        let header = document.getElementById("bg");
        let btn = document.getElementById("btn");
        let btn2 = document.getElementById("btn2");
        let btn3 = document.getElementById("btn3");
        //document.querySelector(".path").style.animation = "swipe-dot 2s 0.5s infinite";

        if (window.scrollY > 200){
            header.classList.add("bg");
        } else {
            header.classList.remove("bg");
        }

        if (window.scrollY > 300) {
            btn.classList.remove("selected");
            btn3.classList.remove("selected");
            btn2.classList.add("selected");
            document.getElementById("upBtn").classList.add("visible");
            document.getElementById("upBtn").classList.remove("invisible");
        } else if(window.scrollY < 200) {
            btn.classList.add("selected");
            btn2.classList.remove("selected");
            btn3.classList.remove("selected");
            document.getElementById("upBtn").classList.add("invisible");
            document.getElementById("upBtn").classList.remove("visible");
        }
        if (borrado === 0) {
            if (window.scrollY > 1200) {
                borrado = 1;
                var swipe = document.querySelector(".swipe");
                var swiperbg = document.querySelector(".swiperbg");
                swipe.style.animation = "aparecer 5s ease-in-out forwards";
                swiperbg.style.animation = "aparecer 5s ease-in-out forwards";
    
                setTimeout(() => {
                    swipe.remove();
                    swiperbg.remove();
                    document.querySelector(".arrow").style.animation = "arrowAnim 2s infinite";
                    document.querySelector(".arrow2").style.animation = "arrowAnim2 2s infinite";
                }, 5000);
                
            }
        }
    })
    
    return(
        <>
            <section className="second-section">
                <div className="overview">
                    <div className="desc">
                        <h2>INTRODUCTION</h2>
                        <h1>Overview</h1>
                        <p>As a dynamic professional with an advanced level of English, I bring a diverse skill set encompassing Full Stack Development, Video Game Development, and expertise in Deep Learning and Machine Learning. My experience extends to content editing, pre-production, production of multimedia systems, and social network management. Driven to make a significant impact in the fourth industrial revolution.</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img src={developerIcon} alt=""/>
                            <div className="titles">
                                <h3>FullStack Developer</h3>
                            </div>
                        </div>
                        <div className="card">
                            <img src={designerIcon}alt=""/>
                            <div className="titles">
                                <h3>Website Designer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="desc2">
                        <h2>SOME PROJECTS I HAVE CREATED</h2>
                        <h1>Projects</h1>
                    </div>
                    
                    <Swiper
                    spaceBetween={340}
                    slidesPerView={2}
                    navigation= {{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                    pagination={{ clickable: true}}
                    scrollbar={{ draggable: true }}
    
                    
                    >
                        <div className="swiperbg"></div>
                        <SwiperSlide>
                            <div className="pcard">
                                <img src={starbucks} alt=""/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pcard">
                                <img src={vr} alt=""/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pcard">
                                <img src={chevrolet} alt=""/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pcard">
                                <img src={burgerking} alt=""/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pcard">
                                <img src={apple} alt=""/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swipe">
                        <div className="path"></div>
                        <div className="hand-icon"></div>
                        <span>Swipe to check out all my projects</span>
                    </div>
                    <div className="arrow">
                        <i class='bx bx-chevron-right'></i>
                    </div>

                    <div className="arrow2">
                        <i class='bx bx-chevron-left'></i>
                    </div>
                </div>
                <div className="knowledge" id="knowledge">
                    <div className="desc">
                        <h2>SOME OF THE TECHNOLOGIES I USE</h2>
                        <h1>Technologies</h1>
                    </div>
                    <div className="programming">
                        <SkillsComponent/>
                    </div>
                    <Copyright/>
                </div>
                
            </section>  

            
        </>
    )
}

export default SecondSection;