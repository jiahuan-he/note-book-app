import React from 'react';
import NotebookItem from '../components/NotebookItem'

import { Grid, List,Button, Modal, Input} from 'semantic-ui-react'
import {ButtonTop} from '../components/PanelComponents'
import {TYPE_ITEM} from '../util/constants';
import { connect } from 'react-redux'
import {
    editNotebookAction,
    deleteNotebookAction,
    selectNotebookAction,
    asyncAddNotebookAction,
    fetchNotebooksAction} from '../actions/actionCreators';
import {ACTION} from "../util/constants";
import PropTypes from 'prop-types';
import {getCurrentUser} from '../util/fb';
import "../styles/notebook.css";

class NotebookPanel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            inputValue: '',
            editingNotebookId: null,
        };
    }

    openModal = ()=>{
        this.setState({modalOpen: true});
    };

    handleDone = ()=>{
        const actionType = this.state.editingNotebookId ? ACTION.NOTEBOOK_EDIT : ACTION.NOTEBOOK_ADD;

        switch (actionType){
            case ACTION.NOTEBOOK_ADD:
                // this.props.addNotebook(this.state.inputValue);
                this.props.aysncAddNotebook(this.state.inputValue);
                break;
            case ACTION.NOTEBOOK_EDIT:
                const data = { title: this.state.inputValue};
                this.props.editNotebook(this.state.editingNotebookId, data);
                this.setState({editingNotebookId : null});
                break;
            default:
                break;
        }
        this.setState( {modalOpen: false, inputValue: ''});
    };

    handleCancel = ()=> {
        this.setState( {inputValue: ''});
        this.setState({modalOpen: false})
    };

    openEditModal = (editingNotebook)=> {
        this.setState({inputValue: editingNotebook.title, modalOpen: true});
        this.setState ({editingNotebookId: editingNotebook.notebookId});
    };

    handleNotebookItemClick = (id)=>{
        if(id === this.props.currentNotebookId){
            return;
        }
        this.props.selectNotebook(id);
    };

    componentDidMount(){
        const uid = getCurrentUser().uid;
        this.props.fetchNotebookFromServer(uid);
    }

    render(){

        const itemType = TYPE_ITEM.NOTEBOOK;


        const notebooks = Object.values(this.props.notebooks).map( (notebook)=>{
            const id = notebook.notebookId;
            const title = notebook.title;
            const createDate = notebook.createDate.slice(0, 10);
            const selected = id === this.props.currentNotebookId;
            const beingDeleted = this.props.deleteStatus.includes(id);
            return (<NotebookItem
                onClick = {()=> this.handleNotebookItemClick(id)}
                selected = {selected}
                onDeleteButtonClicked = { beingDeleted ? ()=> null : () => this.props.deleteNotebook(id)}
                onEditButtonClicked = {() => this.openEditModal(notebook)}
                key={id}
                title= {title}
                createDate= {createDate}
                pageCount = {notebook.pages ? notebook.pages.length : 0}
                />
            )
        }
        );

        return (
            <Grid.Column id="notebook-panel" width={this.props.width}>
                <ButtonTop  type={itemType} onClick={this.openModal} />
                <Modal open={this.state.modalOpen}>
                    <Modal.Header>{itemType} TITLE</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Input onChange={e => this.setState({inputValue: e.target.value}) }
                                   fluid
                                   placeholder='Title'
                                   defaultValue = {this.state.inputValue}
                            />
                            <Button onClick={ this.handleCancel }>Cancel</Button>
                            <Button disabled={ this.state.inputValue.trim().length === 0 }
                                    onClick={ () => {
                                        this.handleDone()
                                    }} primary>Done</Button>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <ul className="item-list notebook-list">
                    {notebooks}
                </ul>
            </Grid.Column>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // addNotebook: (title) => {
        //     dispatch(addNotebookAction(title));
        // },
        selectNotebook: (id) => {
            dispatch(selectNotebookAction(id));
        },
        deleteNotebook: (id) => {
            dispatch(deleteNotebookAction(id));
        },
        editNotebook: (editingNotebookId, data) => {
            dispatch(editNotebookAction(editingNotebookId, data));
        },
        aysncAddNotebook: (title) => {
            dispatch(asyncAddNotebookAction(title))
        },

        fetchNotebookFromServer: (uid)=> {
            dispatch(fetchNotebooksAction(uid));
        }


    }
};

const mapStateToProps = ( state ) => {
    return {
        notebooks: state.notebooks,
        //TODO change current notebook's appearance
        currentNotebookId: state.currentNotebookId,
        deleteStatus: state.notebookDeleteStatus,
    };
};

NotebookPanel.propTypes = {
    notebooks: PropTypes.object,
    currentNotebookId: PropTypes.string,
};


export default connect(mapStateToProps, mapDispatchToProps)(NotebookPanel);
