import React from "react";
import { useState } from "react";
import imagensCarrosel from "./ObjCarrosel";
import styled from "styled-components";

export default function Carrosel (){

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== imagensCarrosel.length){
            setSlideIndex(slideIndex+1)
        }else if(slideIndex === imagensCarrosel.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(imagensCarrosel.length)
        }
    }
}