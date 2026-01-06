import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetCharacterById } from '../API/CharacterAPI';
import { Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { sentenceCase } from 'change-case';

const CharacterViewer = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    GetCharacterById(id)
      .then((res) => setCharacter(res.data.result))
      .catch((err) => console.error(err));
  }, [id]);

  if (!character) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="grow" />
      </Container>
    );
  }

  const props = character.properties;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="display-5 mb-3">{props.name}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">{sentenceCase(props.gender)}</Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Height:</strong> {props.height} cm</ListGroup.Item>
                <ListGroup.Item><strong>Weight:</strong> {props.mass} kg</ListGroup.Item>
                <ListGroup.Item><strong>Eye Color:</strong> {sentenceCase(props.eye_color)}</ListGroup.Item>
                <ListGroup.Item><strong>Hair Color:</strong> {sentenceCase(props.hair_color)}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Skin Color:</strong> {sentenceCase(props.skin_color)}</ListGroup.Item>
                <ListGroup.Item><strong>Birth Year:</strong> {props.birth_year}</ListGroup.Item>
                <ListGroup.Item><strong>Description:</strong> {character.description}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterViewer;



