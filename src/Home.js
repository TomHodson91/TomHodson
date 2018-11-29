import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg">
            <div className='banner'>
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
                Hi, I'm Tom. I'm 21 years old and this is my first ever website!
            </div>
        </div>
    );
  }