import React from 'react';
import './contact.css';
import { Container } from '../../primitives/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWhatsapp,
    faGithub,
    faInstagram,
    faTwitter,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faMobileAlt
} from '@fortawesome/free-solid-svg-icons';

import './contact.css'


export default function contact({ contactDetails }) {
    return (
        <Container padding={'0.5rem'}>
            <Container centerContent padding={'0.5rem'} className="contact-details">
                <h3><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></h3>
                <h3>{contactDetails.email}</h3>
            </Container>
            <Container centerContent className="contact-details">
                <h3>
                    <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>{' '}
                    <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </h3>
                <h3>{contactDetails.phone}</h3>
            </Container>
            <Container centerContent marginTop={'0.5rem'}>
                <Container spaceEvenly width={'8rem'} className="contact-social-icons">
                    <a href={contactDetails.linkedinLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href={contactDetails.githubLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href={contactDetails.instagramLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href={contactDetails.twitterLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                </Container>
            </Container>

        </Container>
    )
}
