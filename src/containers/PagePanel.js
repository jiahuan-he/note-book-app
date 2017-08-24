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
        };
    }

    openModal = ()=>{
        console.log(this.state);
        this.setState({modalOpen: true});
        console.log(this.state)
    };

    inputValue = '';
    handleDone = ()=>{

        this.props.addPage(this.inputValue);
        this.setState({modalOpen: false})
    };

    getPageList = () => {

        this.props.pages.map( (page)=> {
            return (<PageItem title= {page.title} createDate= {page.createDate} />)
        })
    };

    render(){

        const type = TYPE_ITEM.PAGE;
        const pages = this.props.pages.map( (page)=>
                        (<PageItem title= {page.title} createDate= {page.createDate} />)
        );
        return (
            <Grid.Column width={this.props.width}>
                <ButtonTop type={type} onClick={this.openModal} />
                <Modal open={this.state.modalOpen}>
                    <Modal.Header>{type} TITLE</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Input
                                    onChange={e => this.inputValue = e.target.value}
                                   fluid
                                   defaultValue='Untitled'
                                   placeholder='Title'/>
                            <Button onClick={ this.handleDone }>Cancel</Button>
                            <Button onClick={ this.handleDone } primary>Done</Button>
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
