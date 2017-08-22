import React from 'react';
import { connect } from 'react-redux'
import {addNotebook} from "../actions/action";

class Header extends React.Component{

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a onClick={()=> this.props.onAddButtonClick()} className="glyphicon glyphicon-plus" href="#"> </a></li>
                        <li><a  href="#">Link</a></li>
                        <li><a  href="#">Link</a></li>
                    </ul>
                </div>
            </nav>
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