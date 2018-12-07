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
            <a href={cv}>Recruiters HMU</a>
        </div>
    )}