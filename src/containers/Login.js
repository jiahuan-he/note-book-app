import React from 'react';
import { Button, Form, Segment, Input, Message} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction, signUpAction, detectLoggedInAction} from '../actions/actionCreators';
import {onLoginStateChange} from '../util/fb';


const loginStyle = {
    margin: 'auto',
    paddingTop : '200px'
};

const containerStyle = {
    width: "500px",
    margin: 'auto'
};

class Login extends React.Component {

    constructor(props){
        super(props);
        let shouldRedirect = false;
        this.state =
            {
                redirectToReferrer: shouldRedirect,
                email: '',
                password: '',
                onSignup: false,
                name: ''
            };
    }

    componentDidMount(){

        this.unsubscrib = onLoginStateChange( (user) => {
            if (user) {
                this.props.onDetectLoggedIn(user);
            }
            else {
                console.log(user);
            }
        });
    }

    componentWillUnmount () {
        this.unsubscrib()
    }

    render(){
        if (this.props.currentUser) {
            return (
                <Redirect to="/edit"/>
            )
        }

        return (
            <div style={containerStyle}>
            <Form style={loginStyle}>
            <Segment.Group >
                {this.state.onSignup &&
                    <Segment>
                        <Form.Field>
                            <Input
                                onChange={ (e) => this.setState({name: e.target.value}) }
                                icon='user'
                                iconPosition='left'
                                placeholder='Name'
                                value = {this.state.name}
                            />
                        </Form.Field>
                    </Segment>
                }
                <Segment>
                    <Form.Field>
                        <Input
                            onChange = { (e) => this.setState({email: e.target.value})}
                            icon='mail'
                            iconPosition='left'
                            placeholder='Email'
                        />
                    </Form.Field>
                </Segment>
                <Segment>
                    <Form.Field>
                        <Input
                            onChange={ (e) => this.setState({password: e.target.value}) }
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type = "password"
                        />
                    </Form.Field>
                </Segment>
                <Segment>
                    {this.state.onSignup?
                        <Button
                            primary
                            onClick={() => this.props.signUp(this.state.email, this.state.password, this.state.name)}
                            type='submit'>Done
                        </Button>
                        :
                        <Button onClick={() => this.props.login(this.state.email, this.state.password)}
                                type='submit'>Login
                        </Button>
                    }
                    {/*<Button onClick={() => this.props.signUp(this.state.email, this.state.password)}*/}
                            {/*type='submit'>Signup*/}
                    {/*</Button>*/}
                    <Button onClick={() => this.setState({onSignup: true})}
                            type='submit'>Signup
                    </Button>
                </Segment>
            </Segment.Group>
        </Form>
                {this.props.error
                &&
                <Message negative>
                    <Message.Header>Error</Message.Header>
                    <p>{this.props.error}</p>
                </Message>}

            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onDetectLoggedIn: (user) => {
            dispatch(detectLoggedInAction(user))
        },
        login: (email, password) => {
            dispatch(loginAction(email, password));
        },
        signUp: (email, password, name) => {
            dispatch(signUpAction(email, password, name));
        }
    }
};

const mapStateToProps = (state) => {
    return {
        currentUser : state.currentUser,
        error: state.authError
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Login);