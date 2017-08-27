import React from 'react';
import Editor from '../components/Editor';
import { Grid } from 'semantic-ui-react';
import {saveNoteAction} from '../actions/actionCreators';

import {connect} from 'react-redux';


class EditorPanel extends React.Component{

    render(){
        return (
            <Grid.Column width={this.props.width}>
                <Editor currentPageId={this.props.currentPageId} saveNotes={this.props.saveNotes}/>
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

const mapStateToProps = (state) => {
    return {
        currentPageId : state.currentPageId,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditorPanel);

