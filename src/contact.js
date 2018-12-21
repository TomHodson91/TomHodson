import React from 'react';
import { Link } from "react-router-dom";
import cv from './Images/tomHodsonCV.pdf'

export default function contact(){
    return (
        <div>
            <Link to= {"/"}>
                    <div className='links'>
                        Home
                    </div>
            </Link>
            <h1><a href={cv}>Tom HODSON CV</a></h1>
            <h1><a href='mailto:tomhodson91@hotmail.com'>Email: tomhodson91@hotmail.com</a></h1>
            <h1><a href='https://www.linkedin.com/in/tom-hodson-684ab6169/'>LinkedIn: Junior JavaScript/React Developer</a></h1>
            <h1>Phone: 07816390638</h1>
        </div>
    )}