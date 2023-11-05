'use client'

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Container, Navbar } from "react-bootstrap"; 
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  // const router = useRouter();
  const pathname = usePathname();
  // const userSearchParams = useSearchParams();
  return (
    <div style={{position:"sticky",top:"0px",zIndex:"123456"}}>
      <Navbar bg="primary" variant="dark" sticky="top" expand='sm' collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} href="/">NEXTjs 13.4 image gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/static" active={pathname==='/static'}>Static</Nav.Link>
            <Nav.Link as={Link} href="/dynamic" active={pathname==='/dynamic'}>Dynamic</Nav.Link>
            <Nav.Link as={Link} href="/ISR" active={pathname==='/ISR'}>ISR</Nav.Link>
            <Nav.Link as={Link} href="/search" active={pathname==='/search'}>Search</Nav.Link>
            <NavDropdown title="topics" id="topics-dropdown">
              <NavDropdown.Item  as={Link} href="/topics/coding">Coding</NavDropdown.Item>
              <NavDropdown.Item  as={Link} href="/topics/fitness">Fitness</NavDropdown.Item>
              <NavDropdown.Item  as={Link} href="/topics/health">Health</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
