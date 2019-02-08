import React from 'react';
import { Link } from "react-router-dom";
import github from './Images/iconmonstr-github-1.svg'
import linkedIn from './Images/iconmonstr-linkedin-3.svg'
import email from './Images/iconmonstr-email-1.svg'
import phone from './Images/iconmonstr-phone-8.svg'

export default function Home() {
    return (
        <div>
        <div className="background"></div>
        <div className='container'>
            <div className='banner'>
                <div className='banner1'>
                    <a href='https://github.com/TomHodson91'>
                            <div className='icon'>
                            <img src={github} alt="" />
                            </div>
                    </a>
                    <a href='https://www.linkedin.com/in/tom-hodson-684ab6169/'>
                            <div className='icon'>
                            <img src={linkedIn} alt="" />
                            </div>
                    </a>
                    <a href='mailto:tomhodson91@hotmail.com'>
                            <div className='icon'>
                            <img src={email} alt="" />
                            </div>
                    </a>
                    <a href='tel:07816390638'>
                            <div className='icon'>
                            <img src={phone} alt="" />
                            </div>
                    </a>
                </div>
                <div className='banner2'>
                    <Link to= {"/"}>
                        <div className='links'>
                            Home
                        </div>
                    </Link>
                    <Link to= {"/about"}>
                        <div className='links'>
                            About Me
                        </div>
                    </Link>
                    <Link to= {"/projects"}>
                        <div className='links'>
                            Projects
                        </div>
                    </Link>
                    <Link to= {"/contact"}>
                        <div className='links'>
                            Contact Me
                        </div>
                    </Link>
                </div>
            </div>
            <div className='title'>
                Hi, I'm Tom. Junior JavaScript/Reactjs developer!
            </div>
        </div>
        </div>
    );
  }