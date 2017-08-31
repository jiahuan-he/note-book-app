import React from 'react';
import { Button, Form, Segment, Input} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';


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

    login = () => {
        this.setState({ redirectToReferrer: true })
    };



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
                    <Button onClick={this.login} type='submit'>Login</Button>
                    <Button type='submit'>Signup</Button>
                </Segment>
            </Segment.Group>
        </Form>)
    }


}

export default Login