import React from 'react';
import PageItem from '../components/PageItem'
import { Grid, List,Button, Modal, Input, Header} from 'semantic-ui-react'
import {ButtonTop} from './PanelComponents'
import {TYPE_ITEM} from '../util/constants';
import { connect } from 'react-redux'
import {addPageAction} from '../actions/actionCreators';

class PagePanel extends React.Component{

    //TODO
    // Title
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
        this.props.addPage(this.state.inputValue);
        this.setState({modalOpen: false})
    };

    handleCancel = ()=> {
        this.setState({modalOpen: false})
    };

    render(){

        const type = TYPE_ITEM.PAGE;
        const pages = this.props.pages.map( (page)=>
                        (<PageItem key={page.id} title= {page.title} createDate= {page.createDate} />)
        );

        let parentNotebookTitle;
        if( this.props.currentNotebook){
            parentNotebookTitle = this.props.currentNotebook.title;
        }


        return (
            <Grid.Column width={this.props.width}>
                <ButtonTop  type={type} onClick={this.openModal} />
                <Header size='large'>{parentNotebookTitle}</Header>
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
        addPage: (title) => {
            dispatch(addPageAction(title));
        }
    }
};

const getCurrentNotebook = (id, notebooks) => {
    let currentNotebook = notebooks.filter( (notebook)=> {
            return notebook.id === id
        }
    );
    return currentNotebook[0];
};

const mapStateToProps = ( state ) => {
    return {
        pages: state.pages,
        currentNotebook: getCurrentNotebook(state.currentNotebookId, state.notebooks),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PagePanel);
