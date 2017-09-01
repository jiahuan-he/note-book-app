import React from 'react';
import { Button, Form, Segment, Input} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction, signUpAction} from '../actions/actionCreators';



const loginStyle = {
    width:'50%',
    margin: 'auto',
    marginTop: '200px'
};

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state =
            {
                redirectToReferrer: false,
                email: '',
                password: '',
            }
        ;
    }

    render(){

        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to="/edit" push/>
            )
        }

        return (
            <Form style={loginStyle}>
            <Segment.Group >
                <Segment>
                    <Form.Field>
                        <Input
                            onChange = { (e) => this.setState({email: e.target.value})}
                            icon='mail'
                            iconPosition='left'
                            placeholder='Email' />
                    </Form.Field>
                </Segment>
                <Segment>
                    <Form.Field>
                        <Input
                            onChange={ (e) => this.setState({password: e.target.value}) }
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password' />
                    </Form.Field>
                </Segment>
                <Segment>
                    <Button onClick={() => this.props.dispatch(loginAction(this.state.email, this.state.password))}
                            type='submit'>Login
                    </Button>
                    <Button onClick={() => this.props.dispatch(signUpAction(this.state.email, this.state.password))}
                            type='submit'>Signup
                    </Button>
                </Segment>
            </Segment.Group>
        </Form>)
    }
}


export default connect()(Login);