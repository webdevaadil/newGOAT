import React, { useRef, useEffect } from "react"

export default function AutoPlaySilentVideo(props) {
    const videoEl = useRef(undefined);
    const attemptPlay = () => {
        videoEl &&
          videoEl.current &&
          videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
          });
      };
    const onVidLoaded = () => {
        //setShowVidDIV(true);
        //vidRef.current.play();
        attemptPlay();
        props.changeFunc();
    };
    useEffect(() => {
        videoEl.current.defaultMuted = true;
        //onVidLoaded();
    })
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
            <source src={props.data.video} type="video/mp4" />
        </video>
    );
}