"use client";
import { useState } from "react";
import Image  from "next/image";

export default function Card() {
    interface CardContent {
        title: String[],
        subTitle: String[]
    }

    interface ObjValue {
        value: object;
    }

    const ContentValue: CardContent = {
        title: [
            "Finding your T-Shape as a Generalist Designer", 
            "A Designer's Balancing Act: Staying Creative and Organized in Figma", 
            "Navigating the Discovery Phase", 
            "From Web Page to Web Player: How Spotify Designed a New Homepage Experience",
            "Making Moves: Designing Motion for 2022 Wrapped"
        ],
        subTitle: [
            "Finding your T-Shape as a Generalist Designer", 
            "A Designer's Balancing Act: Staying Creative and Organized in Figma", 
            "Navigating the Discovery Phase", 
            "From Web Page to Web Player: How Spotify Designed a New Homepage Experience",
            "Making Moves: Designing Motion for 2022 Wrapped"
        ],
        
    }

    const output: ObjValue = {
        value: {
            title: "This is placeholder",
            subtitle: "This is placeholder"
        }
    }

    const testRandom = (num:number) => {
        output.value = {title: ContentValue.title[num], subTitle: ContentValue.subTitle[num]}
        console.log(output.value);
    }

    testRandom(Math.floor(Math.random() * 5));

    return (
        <div className="">

        </div>
    );
}