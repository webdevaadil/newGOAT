import React, { useRef, useState, useEffect } from "react"

export default function AutoPlaySilentVideo(props) {
    const videoEl = useRef(undefined);

    const [vloading, setvLoading] = useState(false);
    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };
    const onVidLoaded = () => {
        attemptPlay();
        setvLoading(true);
        props.changeFunc(videoEl);
    };
    const getRandomNumber=() => {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        return rand.toString();
    };
    useEffect(() => {
        videoEl.current.defaultMuted = true;
        attemptPlay();
        //onVidLoaded();
    }, []);

    useEffect(() => {
        attemptPlay();
    }, [vloading]);
   
    return (
        <video
            className={props.data.className}
            ref={videoEl}
            loop
            autoPlay
            muted
            playsInline
            onLoadedData={() => {
                onVidLoaded();
            }}>
            <source src={props.data.video+'?v='+getRandomNumber()} type="video/mp4" />
        </video>
    );
}