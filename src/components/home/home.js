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

export default function home() {
    const listOfSkills = [
        {
            name: 'Frontend',
            technologies: [{
                name: 'HTML',
                experiance: '5 years',
                lastVersionUsed: 'HTML5'
            },
            {
                name: 'CSS',
                experiance: '5 years',
                lastVersionUsed: 'CSS3'
            },
            {
                name: 'Javascript',
                experiance: '5 years',
                lastVersionUsed: 'ES6, ES7'
            },
            {
                name: 'Typescript',
                experiance: '3 years',
                lastVersionUsed: '4.0.2'
            },
            {
                name: 'React',
                experiance: '2 years',
                lastVersionUsed: '16, 17'
            },
            {
                name: 'Redux',
                experiance: '2 years',
                lastVersionUsed: '4.0'
            },
            {
                name: 'Angular',
                experiance: '3 years',
                lastVersionUsed: '9, 10'
            },
            {
                name: 'Jest / Jasmin',
                experiance: '2 years',
                lastVersionUsed: '5.11 / 3.5'
            },
            {
                name: 'Cypress',
                experiance: 'Working knowledge'
            },
            {
                name: 'Karma / Protector',
                experiance: 'Working knowledge'
            },
            {
                name: 'npm / yarn / webpack',
                experiance: 'Working knowledge'
            }
            ]
        },
        {
            name: 'Backend',
            technologies: [
                {
                    name: 'Java',
                    experiance: '5 years',
                    lastVersionUsed: '12'
                },
                {
                    name: 'Node.js',
                    experiance: '3 years',
                    lastVersionUsed: '12.3.1'
                },
                {
                    name: 'Kotlin',
                    experiance: '2 years',
                    lastVersionUsed: '1.4.10'
                },
                {
                    name: 'Hibernate',
                    experiance: '2 years',
                    lastVersionUsed: '5.1'
                },
                {
                    name: 'Spring Boot',
                    experiance: '2 years',
                    lastVersionUsed: '2.0'
                },
                {
                    name: 'Jooby',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'Junit',
                    experiance: '2 years',
                    lastVersionUsed: '4, 5'
                },
                {
                    name: 'Mockito / mockk',
                    experiance: '2 years'
                }
            ]
        },
        {
            name: 'Databases',
            technologies: [
                {
                    name: 'MySql',
                    experiance: '5 years',
                    lastVersionUsed: '5.7'
                },
                {
                    name: 'MongoDB',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'PostgresQL',
                    experiance: 'Working knowledge'
                }
            ]
        },
        {
            name: 'DevOps',
            technologies: [
                {
                    name: 'Git / BitBucket',
                    experiance: '3 years'
                },
                {
                    name: 'Trello / JIRA',
                    experiance: '3 years'
                },
                {
                    name: 'Confluence',
                    experiance: '3 years'
                },
                {
                    name: 'Sonar',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'Jenkins',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'GitHub Actions',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'Docker',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'Kubernetes',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'Azure',
                    experiance: 'Working knowledge'
                }
            ]
        },
        {
            name: 'Mobile',
            technologies: [
                {
                    name: 'Android-Native',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'Ionic framework',
                    experiance: 'Working knowledge'
                },
                {
                    name: 'Apache Cordova',
                    experiance: 'Working knowledge'
                }
            ]
        },
        {
            name: 'OS',
            technologies: [
                {
                    name: 'MacOS',
                    experiance: '4 years'
                },
                {
                    name: 'Windows',
                    experiance: '>10 years',
                },
                {
                    name: 'Linux',
                    experiance: 'Working knowledge'
                }
            ]
        }
    ];

    const listOfWork = [
        {
            name: 'HacktoberFest Celebration',
            about: 'A small application to introduce people in open source community',
            technologies: 'Angular8, GitHub Action (for CI/CD)',
            codeLink: 'https://github.com/mhaider110/web-tech-hacktoberfest2020',
            liveLink: 'https://mhaider110.github.io/web-tech-hacktoberfest2020/#/',
        },
        {
            name: 'Npm package',
            about: 'A small Angular package published in NPM for Auto-Select (dropdown)',
            technologies: 'Angular5, NPM, Angular CLI',
            codeLink: 'https://github.com/mhaider110/ng-simple-autocomplete',
            liveLink: 'https://www.npmjs.com/package/ng-simple-autocomplete2',
        }
    ]
    return (
        <Container>
            <Container className="home">
                <Container className="intro">
                    <h3>Hello <span role="img" aria-label="wave">👋</span> </h3>
                    <h2>My Name is Mohd Haider</h2>
                    <h2>I Am A Web Developer</h2>
                    <h2>From New Delhi, India</h2>
                </Container>
                <Container className="profile-picture">
                </Container>
                <Container centerContent marginTop={'0.5rem'}>
                    <Container spaceEvenly width={'8rem'} className="social-icons">
                        <a href="https://www.linkedin.com/in/mohd-haider-035ba868/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/mhaider110" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com/haider5755/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://twitter.com/mannuuu" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    </Container>
                </Container>
                <Container centerContent>
                    <a href="#contact"><Button>Contact me</Button></a>
                </Container>
            </Container>
            <Container innerShadow height={'17.6vh'} padding={'0.5rem'}>
                <Container leftBorder padding={'0.5rem'}>
                    <Heading>What I do</Heading>
                    <p>I have more than 5 years' experiance building web application end to end from scratch! checkout my <i>skills</i> and <i>resume</i></p>
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
                <Contact></Contact>
            </Container>
            <a href="#home" className="goto-top">
                <FontAwesomeIcon icon={faAngleDoubleUp}></FontAwesomeIcon>
            </a>
        </Container>
    )
}
