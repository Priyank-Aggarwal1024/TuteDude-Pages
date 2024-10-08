import Navbar from "../components/Navbar";
import "../styles/About.css"
import person1 from '../assets/person1.svg'
import person2 from '../assets/person2.svg'
import person3 from '../assets/person3.svg'
import wwa from '../assets/wwa.svg'
import ov from '../assets/ov.svg'
function About() {
    return (
        <>
            <Navbar />
            <div className="tut-about">
                <div className="tut-ab-top">
                    <div className="tut-abt-top">
                        <h2 className="tut-about-heading">About Tutedude</h2>
                        <p className="tut-abt-text">&quot;Tutedude focuses on mentoring young creative minds in India, ensuring they receive guidance from the best to become the best.&quot;</p>
                    </div>
                    <div className="tut-abt-bottom">
                        <img src={person1} alt="Young Person Image" className="tut-abtb1" />
                        <img src={person2} alt="Young Person Image" className="tut-abtb2" />
                        <img src={person3} alt="Young Person Image" className="tut-abtb3" />
                    </div>
                </div>
                <div className="tut-ab-wwa">
                    <div className="t-wwa-left">
                        <div className="twwa-top">
                            Who We Are?
                        </div>
                        <div className="twwa-middle">
                            Tutedude focuses on catering the young creative minds of India. Our aim is to ensure that they get mentored by the best so that they themselves can be the best. To turn this into reality, we have taken up this initiative.The perks are that they would get mentorship by the successful people. This would also help them shorten their failure or struggle curves and reach their goal faster than ever before. We have listed some of the skills we are mentoring on at present.Those who want to learn any skill by experts in their respective field can learn by registering through us.
                        </div>
                        <div className="twwa-bottom">Enroll Now</div>
                    </div>
                    <img src={wwa} className="t-wwa-right" alt="WHO WE ARE" />
                </div>
                <div className="tut-ab-ov">

                    <img src={ov} className="t-wwa-right" alt="Our Vision" />
                    <div className="t-wwa-left">
                        <div className="tut-ab-ov-design">
                            <svg xmlns="http://www.w3.org/2000/svg" width="679" height="309" viewBox="0 0 679 309" fill="none">
                                <g opacity="0.2">
                                    <path d="M670.343 642.084C691.38 587.983 699.648 529.527 694.676 470.054C689.704 410.58 671.589 351.254 641.365 295.463C611.142 239.671 569.401 188.507 518.527 144.892C467.653 101.276 408.642 66.063 344.863 41.2632C281.083 16.4635 213.785 2.56256 146.811 0.354177C79.8358 -1.8542 14.4963 7.67323 -45.4776 28.3925C-105.451 49.1117 -158.885 80.617 -202.728 121.109C-246.57 161.602 -279.963 210.289 -301 264.39L184.672 453.237L670.343 642.084Z" fill="url(#paint0_linear_1024_1908)" fillOpacity="0.3" />
                                    <path d="M657.827 637.218C678.322 584.511 686.377 527.561 681.533 469.621C676.689 411.68 659.041 353.882 629.596 299.529C600.151 245.175 559.487 195.33 509.924 152.838C460.361 110.346 402.87 76.0407 340.735 51.8801C278.599 27.7194 213.035 14.1767 147.786 12.0252C82.5374 9.87375 18.8816 19.1557 -39.5467 39.3409C-97.9751 59.5262 -150.032 90.2196 -192.744 129.669C-235.457 169.118 -267.989 216.55 -288.484 269.257L184.672 453.237L657.827 637.218Z" fill="url(#paint1_linear_1024_1908)" fillOpacity="0.3" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1024_1908" x1="344.863" y1="41.2632" x2="268.355" y2="206.777" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#800080" />
                                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1024_1908" x1="344.863" y1="41.2632" x2="268.355" y2="206.777" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#800080" />
                                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="twwa-top">
                            Our Vision
                        </div>
                        <div className="twwa-middle">
                            To make education easily accessible to everyone.
                            I, Shivam Goyal(undergrad at IIT Delhi), always wanted to do a startup but was always engaged in college activities and was directionless on how to move forward then an idea struck that everyone needs a mentor in his/her life. And then the tutedude started. Even while making the website and app I wished I already had the platform because there was a dire need of mentoring in web development and app development.
                        </div>
                        <div className="twwa-bottom">Enroll Now</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;