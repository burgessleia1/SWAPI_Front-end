import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetCharacterById } from '../API/CharacterAPI';
import { Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { sentenceCase } from 'change-case';

const CharacterViewer = () => {
    const { id } = useParams(); // Get character ID from URL params
    const [character, setCharacter] = useState(null);

    // Fetch character data by ID
    useEffect(() => {
        GetCharacterById(id).then((res) => {
            setCharacter(res.data.result);
        });
    }, [id]);

    return (
        <Container className="my-5">
            {character ? (
                <Row>
                    {/* Left Column - Character Details */}
                    <Col md={6} className='mb-4'>
                        <Card className='shadow-sm'>
                            <Card.Body>
                                <Card.Title className='display-5 mb-3'>
                                    {character.properties.name}
                                </Card.Title>
                                <Card.Subtitle className='mb-3 text-muted'>
                                    {sentenceCase(character.properties.gender)}
                                </Card.Subtitle>
                                <Card.Text>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <strong>Height:</strong> {character.properties.height} cm
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Weight:</strong> {character.properties.mass} kg
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Eye Color:</strong> {sentenceCase(character.properties.eye_color)}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Hair Color:</strong> {sentenceCase(character.properties.hair_color)}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <Card.Footer className='bg-white'>
                                    <Card.Link>
                                        Add link to planet here
                                    </Card.Link>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Column - Additional Details */}
                    <Col md={6}>
                        <Card className='shadow-sm'>
                            <Card.Body>
                                <Card.Text>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <strong>Skin Color:</strong> {sentenceCase(character.properties.skin_color)}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Description:</strong> {character.description}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Birth Year:</strong> {character.properties.birth_year}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) : (
                // Loading Spinner
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <Spinner animation='grow' />
                </Container>
            )}
        </Container>
    );
};

export default CharacterViewer;
