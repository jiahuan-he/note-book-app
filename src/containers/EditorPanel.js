import React from 'react';
import Editor from '../components/Editor';
import { Grid } from 'semantic-ui-react'
class EditorPanel extends React.Component{

    //TODO
    // word count

    render(){
        return (
            <Grid.Column width={this.props.width}>
                <Editor/>
            </Grid.Column>
        );
    }
}

export default EditorPanel;