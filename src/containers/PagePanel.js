import React from 'react';
import PageItem from '../components/PageItem'
import { Grid, List,Button, Modal, Input, Header} from 'semantic-ui-react'
import {ButtonTop} from './PanelComponents'
import {TYPE_ITEM} from '../util/constants';
import { connect } from 'react-redux'
import {addPageAction} from '../actions/actionCreators';

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
        this.setState({modalOpen: false})
    };

    handleCancel = ()=> {
        this.setState({modalOpen: false})
    };

    render(){

        const type = TYPE_ITEM.PAGE;
        const pages = Object.values(this.props.pages).map( (page)=>
                        (<PageItem key={page.notebookId} title= {page.title} createDate= {page.createDate} />)
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

const mapDispatchToProps = dispatch => {
    return {
        addPage: (currentNotebookId, title) => dispatch(addPageAction(currentNotebookId, title)),
    }
};

const getCurrentNotebook = (id, notebooks) => {
    let currentNotebook = Object.values(notebooks).filter( (notebookValue)=> {
            return notebookValue.notebookId === id
        }
    );
    return currentNotebook[0];
};

const mapStateToProps = ( state ) => {
    return {
        pages: state.pages,
        currentNotebook: getCurrentNotebook(state.currentNotebookId, state.notebooks),
        currentNotebookId: state.currentNotebookId,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PagePanel);
