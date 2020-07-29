import React, {useState, useEffect} from "react"
import "./Header.css"
import {Col, Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, InputGroup} from "react-bootstrap"
import { withRouter } from "react-router-dom";
import { Input } from 'antd';
import { withContext } from "../../AppContext"

const { Search } = Input;

function Header(props){

    
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
        
    })
    const handleLogout = () => {
        props.logout()
    }

    return (
        <div className="header">
            <Navbar className={scroll ?  "navBar-custom" : "navBar-custom-dark"} fixed="top" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src={require('../../assets/img/logo.png')}
                        width="99px"
                        height="79px"
                        className="d-inline-block align-top"
                        alt="RestEasylogo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="menu-options">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about"><span className="header-link">About</span></Nav.Link>
                        <Nav.Link href="/faq"><span className="header-link">FAQ</span></Nav.Link>
                        <Nav.Link href="/whattodonow"><span className="header-link">What to do Now?</span></Nav.Link>
                        <Nav.Link href=""><span className="header-link">Help a friend in need</span></Nav.Link>
                        <Nav.Link href="/registry"><span className="header-link">Registry</span></Nav.Link>
                        <Nav.Link href="/my/create"><span className="header-link">Create</span></Nav.Link>
                        <Nav.Link href="/contact"><span className="header-link">Contact Us!</span></Nav.Link>
                    </Nav>
                    <div className="search-area">
                        <Form inline>
                            <FormControl className="search-bar"
                                type="text"
                                placeholder="Search"
                            />
                        </Form>
                    </div>
                    
                    <Form inline>

                        {props.user ? <span className="username"> Hello {props.user.firstName}!</span> : null}
                        {props.token ? <Button variant="success" onClick={() => {handleLogout()}}>Logout</Button>:<Button variant="success" href="/login">Login</Button> }
                        
                    </Form>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default withContext(Header)
