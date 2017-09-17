import React from 'react';
import { Button, Form, Segment, Input} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction, signUpAction, detectLoggedInAction} from '../actions/actionCreators';
import {onLoginStateChange} from '../util/fb';
import {ACTION} from '../util/constants';


const loginStyle = {
    width:'50%',
    margin: 'auto',
    marginTop: '200px'
};

class Login extends React.Component {

    constructor(props){
        super(props);
        console.log(" CONSTRUCTOR LOGIN");
        let shouldRedirect = false;
        this.state =
            {
                redirectToReferrer: shouldRedirect,
                email: '',
                password: '123456',
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
                            placeholder='Password'
                            type = "password"
                        />
                    </Form.Field>
                </Segment>
                <Segment>
                    <Button onClick={() => this.props.login(this.state.email, this.state.password)}
                            type='submit'>Login
                    </Button>
                    <Button onClick={() => this.props.signUp(this.state.email, this.state.password)}
                            type='submit'>Signup
                    </Button>
                </Segment>
            </Segment.Group>
        </Form>)
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
        signUp: (email, password) => {
            dispatch(signUpAction(email, password));
        }
    }
};

const mapStateToProps = (state) => {
    return {
        currentUser : state.currentUser,
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Login);