import React from 'react';
import Editor from '../components/Editor';
import { Grid } from 'semantic-ui-react';
import {saveNoteAction} from '../actions/actionCreators';

import {connect} from 'react-redux';


class EditorPanel extends React.Component{

    render(){
        return (
            <Grid.Column width={this.props.width}>
                {
                    this.props.currentPageId
                    && this.props.currentPageId!== '0'
                    && <Editor currentPageId={this.props.currentPageId} saveNotes={this.props.saveNotes}/>
                }
            </Grid.Column>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveNotes: (notes, currentPageId) => {
            dispatch(saveNoteAction(notes, currentPageId));
        },
    }
};

const getCurrentPageId = ( currentPageId )=>{

};

const mapStateToProps = (state) => {
    return {
        currentPageId : state.currentPageId,
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(EditorPanel);

