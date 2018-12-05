import React from 'react';
import { Link } from "react-router-dom";

export default function about() {
    return (
        <div>
        <Link to= {"/"}>
            <div className='links'>
                Back to Home
            </div>
        </Link>
        <h1>About Me</h1>
        <h2>I'm a junior reactJs developer looking for a role within an agile development team in London!
        Graduating from University of York summer 2018 with a degree in Economics,
        I began coding and I'm currently enrolled on the Kodiri bootcamp.
        I'm learning and familiar with JavaScript ES6+, reactJS, HTML, CSS, github workflow and agile methodlogies.
        </h2>
        <h2>
            Looking for a Junior JavaScript Developer who's keen to learn? Where to find me below!
        </h2>
        <Link to= {"/contact"}>
            <div className='links'>
                Contact Me!
            </div>
        </Link>
        </div>
    );
}