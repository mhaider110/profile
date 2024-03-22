
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import profile from '../../assets/data/profile.json';
import './social-links.css'

export default function SocialLinks() {
  return (
    <ul className='social-media-links'>
       <li className="item">
        <a href={profile.linkedinLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
      </li>
      <li className="item">
        <a href={profile.githubLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
      </li>
      <li className="item">
        <a href={profile.instagramLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
      </li>
      <li className="item">
        <a href={profile.twitterLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} className='icon' /></a>
      </li>
    </ul>
  )
}