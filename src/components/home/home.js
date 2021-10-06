import React from 'react'
import './home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faTwitter,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../primitives/Button';
import { Container } from '../../primitives/Container';
import { Heading } from '../../primitives/Heading';
import Skills from '../skills/skills';
import Work from '../work/work';
import Contact from '../contact/contact';
import listOfSkills from '../../assets/data/skils.json';
import listOfWork from '../../assets/data/recent-work.json';
import profile from '../../assets/data/profile.json';
import resume from '../../assets/resume/resume_haider_v4.pdf'

export default function home() {

    return (
        <Container>
            <Container className="home">
                <Container className="intro">
                    <h3>Hello <span role="img" aria-label="wave">👋</span> </h3>
                    <h2>My Name is {profile.firstName}{' '}{profile.lastName}</h2>
                    <h2>{profile.aboutLine1}</h2>
                </Container>
                <Container className="profile-picture">
                </Container>
                <Container centerContent marginTop={'0.5rem'} className="social-icons-parent">
                    <Container spaceEvenly width={'8rem'} className="social-icons">
                        <a href={profile.linkedinLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href={profile.githubLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={profile.instagramLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href={profile.twitterLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    </Container>
                </Container>
                <Container centerContent className="contact-me">
                    <a href="#contact"><Button>Contact me</Button></a>
                    <a href={resume} target="_blank" rel="noreferrer" data-title="Resume"><Button>My Resume</Button></a>
                </Container>
            </Container>
            <Container innerShadow height={'17.6vh'} padding={'0.5rem'}>
                <Container leftBorder padding={'0.5rem'} className="about">
                    <Heading>What I do</Heading>
                    <p>I have more than 6 years' experience building web application end to end from scratch! checkout my <a href="#skills"><i>skills</i></a> and <a href={resume} target="_blank" rel="noreferrer" data-title="Resume"><i>resume</i></a></p>
                </Container>
            </Container>
            <Container id="skills" className="skill-section">
                <Container centerContent innerShadow padding={'1.2rem'}>
                    <Heading>Technologies I've used at work</Heading>
                </Container>
                {listOfSkills.map((skill, index) => <Skills skill={skill} key={skill.name + index}></Skills>)}
            </Container>
            <Container id="work" className="work-section">
                <Container centerContent innerShadow padding={'1.2rem'}>
                    <Heading>Some of my recent work</Heading>
                </Container>
                {listOfWork.map((work, index) => <Work key={'work' + index} workDetails={work}></Work>)}
            </Container>
            <Container id="contact" className="contact-section">
                <Contact contactDetails={profile}></Contact>
            </Container>
            <a href="#home" className="goto-top">
                <FontAwesomeIcon icon={faAngleDoubleUp}></FontAwesomeIcon>
            </a>
        </Container>
    )
}
