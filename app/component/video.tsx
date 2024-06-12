import { useState } from 'react';

const VideoPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const togglePlay = () => {
        const video = document.getElementById('video-player') as HTMLVideoElement;
        if (video) {
            if (playing) {
                video.pause?.();
            } else {
                video.play?.();
            }
            setPlaying(!playing);
        }
        setShowButton(!showButton);
    };

    const handleVideoEnded = () => {
        setPlaying(false);
        setShowButton(true); // Show button when video ends
    };

    return (
        <div className="relative"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => playing ? setShowButton(false) : setShowButton(true)}>

            <video
                id="video-player"
                width="580"
                height="320"
                className="mt-8 md:w-full xl:w-8/12 rounded-lg"
                onEnded={handleVideoEnded} // Call handleVideoEnded when video ends
            >
                <source src="assets/video/cinematic.mp4" type="video/mp4" />
            </video>
            {showButton && <button
                onClick={togglePlay}
                className="left-1/2 shadow-xl absolute top-1/2 md:left-1/2 lg:left-1/3 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-24 h-24 text-lg text-gray-800 font-medium  flex items-center justify-center"
                style={{ zIndex: 1 }} // Ensure button appears above the video
            >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
                    {playing ? <img src="assets/video/pause-solid.svg" alt="Pause" width="24" height="24" style={{ margin: 'auto' }} /> : <img src="assets/video/play-solid.svg" alt="Play" width="24" height="24" style={{ margin: 'auto' }} />}
                </div>
            </button>}

        </div>
    );
};

export default VideoPlayer;