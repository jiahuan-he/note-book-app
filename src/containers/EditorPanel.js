import React from 'react';
import Editor from '../components/Editor';
import { Grid } from 'semantic-ui-react';
import {asyncSaveNoteAction} from '../actions/actionCreators';

import {connect} from 'react-redux';


class EditorPanel extends React.Component{

    render(){
        return (
            <Grid.Column width={this.props.width}>
                {
                    this.props.currentPageId
                    && this.props.currentPageId!== '0'
                    && <Editor currentPageId={this.props.currentPageId} saveNote={this.props.saveNote}/>
                }
            </Grid.Column>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveNote: (note, currentPageId) => {
            dispatch(asyncSaveNoteAction(note, currentPageId));
        },
    }
};

// workaround: clear editor panel when current page is deleted
const getCurrentPageId = ( currentPageId, pages)=>{
    if(pages[currentPageId]){
        return currentPageId;
    }
    return "0";
};

const mapStateToProps = (state) => {
    return {
        currentPageId : getCurrentPageId(state.currentPageId, state.pages),
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(EditorPanel);

