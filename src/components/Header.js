import React from 'react';
import { connect } from 'react-redux'
import {addNotebook} from "../actions/action";

import {
    Button,
    Container,
    Menu,
} from 'semantic-ui-react'

class Header extends React.Component{

    render() {
        return (
            <Menu inverted fixed='top' size='large'>
                <Container>
                    <Menu.Item as='a' active>Home</Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item className='item'>
                            <Button inverted as='a'>Log in</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button onClick={this.props.onAddButtonClick} as='a' primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddButtonClick: () => {
            dispatch(addNotebook());
        }
    }
};



export default connect(null, mapDispatchToProps)(Header);