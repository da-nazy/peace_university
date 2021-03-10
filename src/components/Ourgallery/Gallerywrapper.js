import React from 'react';
import Gallery from './Gallery.js';
import '../../style/Gallerywrapper.css';
export default function Gallerywrapper() {
    return (
        <div className="gwrapper">
            <h2>Our Gallery</h2>
            <Gallery/>
        </div>
    )
}
