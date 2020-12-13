import React from 'react';
import { Container } from '../../primitives/Container';
import { Heading } from '../../primitives/Heading';
import { Card } from '../../primitives/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
    faRocket
} from '@fortawesome/free-solid-svg-icons';
import './work.css'

export default function work({workDetails}) {
    return (
        <Container padding={'0.5rem'} className="work-item">
            <Container leftBorder padding={'0.5rem'}>
                <Heading>{workDetails.name}</Heading>
            </Container>
            <Container>
                <Card width={'20rem'} noPointer>
                    <p><strong>About work</strong></p>
                    <p>{workDetails.about}</p>
                    <p><strong>Technologies Used</strong></p>
                    <p>{workDetails.technologies}</p>

                    <Container spaceEvenly className="work-links">
                        <Container>
                            <a href={workDetails.codeLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        </Container>
                        <Container>
                            <a href={workDetails.liveLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faRocket} /></a>
                        </Container>
                    </Container>
                </Card>
            </Container>
        </Container>
    )
}
