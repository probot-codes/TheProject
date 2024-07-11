// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [youtubeLink, setYoutubeLink] = useState('');
    const [videoId, setVideoId] = useState('');

    const handleInputChange = (e) => {
        setYoutubeLink(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const videoId = youtubeLink.split('v=')[1];
        setVideoId(videoId);
    };

    return (
        <div className="container">
            <div className="gameplay">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/your_subway_surfer_video_id_here?autoplay=1&mute=1" 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                ></iframe>
            </div>
            <div className="youtube-video">
                {videoId && (
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                        frameBorder="0" 
                        allow="autoplay; encrypted-media" 
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={youtubeLink} 
                        onChange={handleInputChange} 
                        placeholder="Paste YouTube link here" 
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default App;
