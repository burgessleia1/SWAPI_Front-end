# Skeleton for CharacterViewer.js
$viewerSkeleton = @"
import React from 'react';

const CharacterViewer = () => {
    return <div>Character details will go here</div>;
};

export default CharacterViewer;
"@
Set-Content -Path ".\Components\CharacterViewer.js" -Value $viewerSkeleton

# Skeleton for NavBar.js
$navSkeleton = @"
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand as={Link} to='/'>SWAPI App</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
"@
Set-Content -Path ".\Components\NavBar.js" -Value $navSkeleton

Write-Host "Skeletons for CharacterViewer.js and NavBar.js created"
