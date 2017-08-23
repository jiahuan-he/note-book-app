import React from 'react';
import NotebookItem from '../components/NotebookItem'
import { Grid, List } from 'semantic-ui-react'
import NotebookPanelHeader from './NotebookPanelHeader';

class NotebookPanel extends React.Component{

    //TODO
    // Title
    // Create date
    // Number of notes
    // Delete

    render(){

        return (
            <Grid.Column width={this.props.width}>
                <NotebookPanelHeader/>
                <List.List >
                    <NotebookItem title="Notebook title" createDate="2017 Aug 10"/>
                    <NotebookItem title="Notebook title" createDate="2017 Aug 10"/>
                    <NotebookItem title="Notebook title" createDate="2017 Aug 10"/>
                </List.List>
            </Grid.Column>
        );
    }
}

export default NotebookPanel;