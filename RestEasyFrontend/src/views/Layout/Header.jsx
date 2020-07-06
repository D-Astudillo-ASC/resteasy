import React from 'react';
import {Button} from "antd";
import {
    ACCESS_TOKEN,
    APP_USER_DATA,
    QUESTIONS_CURRENT_STEP,
    REGISTRY_FIRST_NAME,
    REGISTRY_LAST_NAME,
    REGISTRY_MIDDLE_NAME,
    REGISTRY_PERSON_DATE_MANUAL,
    REGISTRY_PERSON_END_DATE,
    REGISTRY_PERSON_RELATION,
    REGISTRY_PERSON_START_DATE,
    REGISTRY_SUFFIX
} from "../../constants";

class Header extends React.Component {

    login(){
        window.location.href = "/login";
    }

    logout(){
        localStorage.removeItem(APP_USER_DATA);
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(QUESTIONS_CURRENT_STEP);
        localStorage.removeItem(REGISTRY_FIRST_NAME);
        localStorage.removeItem(REGISTRY_MIDDLE_NAME);
        localStorage.removeItem(REGISTRY_LAST_NAME);
        localStorage.removeItem(REGISTRY_SUFFIX);
        localStorage.removeItem(REGISTRY_PERSON_DATE_MANUAL);
        localStorage.removeItem(REGISTRY_PERSON_END_DATE);
        localStorage.removeItem(REGISTRY_PERSON_START_DATE);
        localStorage.removeItem(REGISTRY_PERSON_RELATION);
        window.location.href = "/";
    }

    homePage(){
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                <div className="header flexSpaceBetween">
                    <div className="flexVCenter">
                        <div className="flexVCenter cursor" onClick={this.homePage}>
                            <img alt="company logo" className="logo" src="/logo64.png" />
                            <div className="l">RestEasy</div>
                        </div>
                        <div id="headerLinks">
                            <a href="#">About</a>
                            <a href="#rootFAQ">FAQ</a>
                            <a href="#">What To Do Now Guide</a>
                            <a href="#">Help a Friend in Need</a>
                            <a href="/my/create">Registry</a>
                        </div>
                    </div>

                    {this.props.search &&
                    <div className="flexVCenter">

                        {/*<Input.Search*/}
                        {/*    className="myInput"*/}
                        {/*    placeholder="Search for a memorial"*/}
                        {/*    onSearch={value => console.log(value)}*/}
                        {/*    enterButton*/}
                        {/*/>*/}

                        {
                            localStorage.getItem(APP_USER_DATA) == null ?
                                <Button className="myButton ml-2" type="primary" onClick={this.login}>
                                    Login
                                </Button> :
                                <div>
                                    <Button className="myButton ml-2" type="primary" >
                                        Hi {JSON.parse(localStorage.getItem(APP_USER_DATA)).first_name}!
                                    </Button>
                                    <Button className="myButton ml-2" type="primary" onClick={this.logout} >
                                        Logout
                                    </Button>
                                </div>
                        }

                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default Header;
