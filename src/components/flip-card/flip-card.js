import React from 'react'
import './flip-card.css'

export default function flipcard({ technology }) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h4>{technology.name}</h4>
                </div>
                <div className="flip-card-back">
                    <p>{technology.experience && 'Experience: ' + technology.experience}</p>
                    <p>{technology.lastVersionUsed && 'Version: ' + technology.lastVersionUsed}</p>
                </div>
            </div>
        </div>
    )
}
