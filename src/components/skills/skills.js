import React from 'react'
import { Container } from '../../primitives/Container';
import './skills.css';
import { Heading } from '../../primitives/Heading';
import FlipCard from '../flip-card/flip-card'

export default function skills({ skill }) {
    return (
        <Container padding={'0.5rem'}>
            <Container leftBorder padding={'0.5rem'}>
                <Heading>{skill.name}</Heading>
            </Container>
            <Container marginTop={'0.5rem'}>
                {skill.technologies.map((tech, index) =>
                    <FlipCard key={tech.name + index} technology={tech}></FlipCard>
                )}
            </Container>
        </Container>
    )
}
