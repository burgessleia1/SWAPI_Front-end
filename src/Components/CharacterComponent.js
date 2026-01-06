# Define the complete code for CharacterComponent.js
$characterComponentCode = @"
import React, { useEffect, useState } from 'react';
import { GetCharacters } from '../API/CharacterAPI';
import { Card, Stack, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CharacterComponent = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        GetCharacters().then((response) => {
            const characters = response.data.results; // Fix: axios returns data inside .data
            setCharacters(characters);
        });
    }, []);

    return (
        <Container className="my-4">
            <Stack gap={3}>
                {characters.length > 0 ? (
                    characters.map((character, index) => (
                        <Card key={index} className='shadow-sm'>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <Card.Title className='mb-0'>{character.name}</Card.Title>
                                    <Card.Text className='text-muted'>Character ID: {character.uid}</Card.Text>
                                </div>
                                <Link to={`/ViewCharacter/${character.uid}`} className='btn btn-outline-primary'>View Details</Link>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                        <Spinner animation="grow" />
                    </Container>
                )}
            </Stack>
        </Container>
    );
};

export default CharacterComponent;
"@

# Write the code into CharacterComponent.js
Set-Content -Path ".\Components\CharacterComponent.js" -Value $characterComponentCode
Write-Host "CharacterComponent.js updated with complete code"

