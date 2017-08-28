import React from 'react';
import PageItem from '../components/PageItem'
import { Grid, List,Button, Modal, Input, Header} from 'semantic-ui-react'
import {ButtonTop} from './PanelComponents'
import {TYPE_ITEM} from '../util/constants';
import { connect } from 'react-redux'
import {selectPageAction , addPageAction} from '../actions/actionCreators';
import PropTypes from 'prop-types';


class PagePanel extends React.Component{

    //TODO
    // Create date
    // Delete

    // props:
    //      function: addPage()

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
        // params: notebookId;
        //         data{ title: }
        this.props.addPage(this.props.currentNotebookId, {title: this.state.inputValue});
        this.setState({modalOpen: false, inputValue: ''})
    };

    handleCancel = ()=> {
        this.setState({modalOpen: false})
    };

    render(){

        const type = TYPE_ITEM.PAGE;

        const pages = Object.values(this.props.pages).map( (page)=>
                        (<PageItem key={page.pageId}
                                   title= {page.title}
                                   createDate= {page.createDate}
                                   onClick = {() => this.props.selectPage(page.pageId) }
                        />)
        );

        return (
            <Grid.Column width={this.props.width}>
                <ButtonTop disabled={!this.props.currentNotebookId} type={type} onClick={this.openModal} />
                {this.props.currentNotebook &&
                    <Header size='large'>{this.props.currentNotebook.title}</Header>
                }
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
    console.log(currentPages)
    return currentPages;

};


const mapDispatchToProps = dispatch => {
    return {
        addPage: (currentNotebookId, title) => dispatch(addPageAction(currentNotebookId, title)),
        selectPage: (pageId) => dispatch(selectPageAction(pageId)),
    }
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
