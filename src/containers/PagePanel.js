import React from 'react';
import PageItem from '../components/PageItem'
import { Grid, List,Button, Modal, Input} from 'semantic-ui-react'
import {ButtonTop} from './PanelComponents'
import {TYPE_ITEM} from '../constants/type';
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
        console.log(this.state);
        this.setState({modalOpen: true});
        console.log(this.state)
    };

    handleDone = ()=>{

        this.props.addPage(this.state.inputValue);
        this.setState({modalOpen: false})
    };

    render(){

        const type = TYPE_ITEM.PAGE;
        const pages = this.props.pages.map( (page)=>
                        (<PageItem key={page.id} title= {page.title} createDate= {page.createDate} />)
        );

        return (
            <Grid.Column width={this.props.width}>
                <ButtonTop  type={type} onClick={this.openModal} />
                <Modal open={this.state.modalOpen}>
                    <Modal.Header>{type} TITLE</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Input
                                    onChange={e => this.setState({inputValue: e.target.value}) }
                                   fluid
                                   placeholder='Title'/>
                            <Button onClick={ this.handleDone }>Cancel</Button>
                            <Button
                                disabled={ this.state.inputValue.trim().length === 0 }
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

const mapStateToProps = ( state ) => {
    return {
        pages: state.pages
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PagePanel);
