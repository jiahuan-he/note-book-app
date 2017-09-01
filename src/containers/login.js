import React from 'react';
import { Button, Form, Segment, Input} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import { signUp} from '../util/fb';
import { connect } from 'react-redux';
import { loginAction } from '../actions/actionCreators';



const loginStyle = {
    width:'50%',
    margin: 'auto',
    marginTop: '200px'
};

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state =
            { redirectToReferrer: false }
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
                            icon='mail'
                            iconPosition='left'
                            placeholder='Email' />
                    </Form.Field>
                </Segment>
                <Segment>
                    <Form.Field>
                        <Input
                            icon='lock'
                            iconPosition='left'
                            placeholder='Passward' />
                    </Form.Field>
                </Segment>
                <Segment>
                    <Button onClick={() => this.props.dispatch(loginAction('tempemail@gmail.com', '123456'))}
                            type='submit'>Login
                    </Button>
                    <Button onClick={() => {signUp(
                        'tempemail@gmail.com',
                        '123456',
                        ( error )=>{
                            console.log(error.code + error.message);
                        }
                    )}}
                            type='submit'>Signup
                    </Button>
                </Segment>
            </Segment.Group>
        </Form>)
    }
}


export default connect()(Login);