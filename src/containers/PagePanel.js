import React from 'react';
import PageItem from '../components/PageItem'
import { Grid, List,Button, Modal, Input, Header} from 'semantic-ui-react'
import {ButtonTop} from './PanelComponents'
import {TYPE_ITEM} from '../util/constants';
import { connect } from 'react-redux'
import {selectPageAction , asyncAddPageAction, fetchPagesAction, editPageAction, deletePageAction} from '../actions/actionCreators';
import PropTypes from 'prop-types';
import {getCurrentUser} from "../util/fb";
import {ACTION} from "../util/constants";


class PagePanel extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            inputValue: '',
            editingPageId: null,
        };
    }

    openModal = ()=>{
        this.setState({modalOpen: true});
    };

    handleDone = ()=>{
        const actionType = this.state.editingPageId ? ACTION.PAGE_EDIT : ACTION.PAGE_ADD;

        switch (actionType){
            case ACTION.PAGE_ADD:
                // this.props.addNotebook(this.state.inputValue);
                this.props.addPage(this.props.currentNotebookId, this.state.inputValue);
                break;
            case ACTION.PAGE_EDIT:
                const data = { title: this.state.inputValue};
                this.props.editPage(this.state.editingPageId, data);
                this.setState({editingPageId : null});
                break;
            default:
                break;
        }
        this.setState( {modalOpen: false, inputValue: ''});
    };

    handleCancel = ()=> {
        this.setState({modalOpen: false})
    };

    componentDidMount(){
        const uid = getCurrentUser().uid;
        this.props.fetchPagesFromServer(uid);
    }

    openEditModal = (editingPage)=> {
        console.log(editingPage);
        this.setState({inputValue: editingPage.title, modalOpen: true});
        this.setState ({editingPageId: editingPage.pageId});
    };

    render(){

        const type = TYPE_ITEM.PAGE;

        const pages = Object.values(this.props.pages).map( (page)=>{

            const id = page.pageId;
            const notebookId = page.notebookId;
            const title = page.title;
            const createDate = page.createDate.slice(0, 10);


            return (<PageItem key={id}
                       title= {title}
                       createDate= {createDate}
                       onClick = {() => this.props.selectPage(id)}
                       onDeleteButtonClicked = {() => this.props.deletePage(id, notebookId)}
                       onEditButtonClicked = {() => this.openEditModal(page)}
            />)
        });

        return (
            <Grid.Column width={this.props.width}>
                <ButtonTop disabled={!this.props.currentNotebookId || this.props.currentNotebookId ==='0'} type={type} onClick={this.openModal} />
                {this.props.currentNotebook &&
                    <Header size='large'>{this.props.currentNotebook.title}</Header>
                }
                <Modal open={this.state.modalOpen}>
                    <Modal.Header>{type} TITLE</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Input onChange={e => this.setState({inputValue: e.target.value}) }
                                   fluid
                                   placeholder='Title'
                                   defaultValue = {this.state.inputValue}
                            />
                            <Button onClick={ this.handleCancel }>Cancel</Button>
                            <Button disabled={ this.state.inputValue.trim().length === 0 }
                                    onClick={ this.handleDone } primary>Done</Button>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <List.List >
                    {pages}
                </List.List>
            </Grid.Column>
        );
    }
}

const getCurrentNotebook = (id, notebooks) => {
    let currentNotebook = Object.values(notebooks).filter( (notebookValue)=> {
            return notebookValue.notebookId === id
        }
    );

    return currentNotebook[0];
};


const mapDispatchToProps = dispatch => {
    return {
        addPage: (currentNotebookId, title) => dispatch(asyncAddPageAction(currentNotebookId, title)),
        selectPage: (pageId) => dispatch(selectPageAction(pageId)),

        fetchPagesFromServer: (uid)=> {
            dispatch(fetchPagesAction(uid));
        },
        editPage: (editingPageId, data) => {
            dispatch(editPageAction(editingPageId, data));
        },
        deletePage: (pageId, notebookId) => {
            dispatch(deletePageAction(pageId, notebookId));
        }
    }
};


const getCurrentPages = (currentNotebookId, notebooks, pages)=> {
    const currentNotebook = getCurrentNotebook(currentNotebookId, notebooks);
    if (!currentNotebook){
        return [];
    }
    let currentPages = [];
    if (currentNotebook && currentNotebook.pages){
        const pageIds = currentNotebook.pages;
        currentPages = pageIds.map( (pageId)=> pages[pageId]);
    }
    return currentPages;

};


const mapStateToProps = ( state ) => {
    return {
        pages: getCurrentPages(state.currentNotebookId, state.notebooks, state.pages),
        currentNotebook: getCurrentNotebook(state.currentNotebookId, state.notebooks),
        currentNotebookId: state.currentNotebookId,
    };
};

PagePanel.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object),
    currentNotebook: PropTypes.object,
    currentNotebookId: PropTypes.string,
};


export default connect(mapStateToProps, mapDispatchToProps)(PagePanel);
