import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact
} from '@fortawesome/free-brands-svg-icons';
import {
    faHeart
} from '@fortawesome/free-solid-svg-icons';

export default function footer() {
    return (
        <div className="footer">
            <div className="message">
                Made with <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                <span className="heart">
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </span>
            </div>
            <div className="rights">
                All rights not reserved
            </div>
        </div>
    )
}
