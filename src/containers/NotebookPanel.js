import React from 'react';
import NotebookItem from '../components/NotebookItem'
import {  Grid, List, Transition, Input, } from 'semantic-ui-react'
import NotebookPanelHeader from './NotebookPanelHeader';

class NotebookPanel extends React.Component{


    state = {
        notebooks: [
            <NotebookItem title="Notebook title" createDate="2017 Aug 10"/>],
        visible: false
    };

    handleAdd = () =>
        {
            this.setState(
                {notebooks: this.state.notebooks.concat(<NotebookItem title="Notebook title" createDate="2017 Aug 10"/>) }
            );
        console.log("handleAdd");
    };


    //TODO
    // Title
    // Create date
    // Number of notes
    // Delete

    render(){

        return (
            <Grid.Column width={this.props.width}>
                <NotebookPanelHeader onClick={this.handleAdd}/>
                    <List.List >
                        <Transition.Group
                            as={List}
                            duration={500}
                            divided
                            size='large'
                            verticalAlign='middle'>
                            {this.state.notebooks.map(item => (
                                <List.Item key={item.id}>
                                    {item}
                                </List.Item>
                            ))}
                        </Transition.Group>
                    </List.List>
            </Grid.Column>
        );
    }
}

export default NotebookPanel;