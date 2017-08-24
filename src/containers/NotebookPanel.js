import React from 'react';
import NotebookItem from '../components/NotebookItem'

import { Grid, List,Button, Modal, Input} from 'semantic-ui-react'
import {ButtonTop} from './PanelComponents'
import {TYPE_ITEM} from '../util/constants';
import { connect } from 'react-redux'
import {addNotebookAction, selectNotebookAction} from '../actions/actionCreators';

class NotebookPanel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            inputValue: ''
        };
    }

    openModal = ()=>{
        this.setState({modalOpen: true});
    };

    handleDone = ()=>{
        this.props.addNotebook(this.state.inputValue);
        this.setState({modalOpen: false})
    };

    handleCancel = ()=> {
        this.setState({modalOpen: false})
    };

    render(){

        const type = TYPE_ITEM.NOTEBOOK;
        const notebooks = this.props.notebooks.map( (notebook)=>{
            const id = notebook.notebookId;
            const title = notebook.title;
            const createDate = notebook.createDate;
            return (<NotebookItem
                onClick = {()=> {this.props.selectNotebook(id);}
                }
                key={id}
                title= {title}
                createDate= {createDate} />)
        }

        );

        return (
            <Grid.Column width={this.props.width}>
                <ButtonTop  type={type} onClick={this.openModal} />
                <Modal open={this.state.modalOpen}>
                    <Modal.Header>{type} TITLE</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Input onChange={e => this.setState({inputValue: e.target.value}) }
                                   fluid
                                   placeholder='Title'/>
                            <Button onClick={ this.handleCancel }>Cancel</Button>
                            <Button disabled={ this.state.inputValue.trim().length === 0 }
                                    onClick={ this.handleDone } primary>Done</Button>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <List.List >
                    {notebooks}
                </List.List>
            </Grid.Column>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNotebook: (title) => {
            dispatch(addNotebookAction(title));
        },
        selectNotebook: (id) => {
            dispatch(selectNotebookAction(id));
        }
    }
};

const mapStateToProps = ( state ) => {
    return {
        notebooks: state.notebooks,

        //TODO change current notebook's appearance
        currentNotebookId: state.currentNotebookId,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(NotebookPanel);
