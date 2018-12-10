import React from 'react';
import { Link } from "react-router-dom";
import github from './Images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png'
import linkedIn from './Images/iconmonstr-linkedin-3-240.png'
import email from './Images/iconmonstr-email-1-240.png'
import phone from './Images/iconmonstr-phone-8.svg'

export default function Home() {
    return (
        <div className="bg">
            <div className='banner'>
            <Link to= {"/contact"}>
                    <div className='icon'>
                    <img src={github} alt="" />
                    </div>
            </Link>
            <Link to= {"/contact"}>
                    <div className='icon'>
                    <img src={linkedIn} alt="" />
                    </div>
            </Link>
            <Link to= {"/contact"}>
                    <div className='icon'>
                    <img src={email} alt="" />
                    </div>
            </Link>
            <Link to= {"/contact"}>
                    <div className='icon'>
                    <img src={phone} alt="" />
                    </div>
            </Link>
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
            <div className='title'>
                Hi, I'm Tom - Junior JavaScript/React developer!
            </div>
        </div>
    );
  }