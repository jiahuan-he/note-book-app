import React from 'react';
import PageItem from '../components/PageItem'
import { Grid, List,Button, Modal, Input, Icon } from 'semantic-ui-react'
import {ButtonTop} from './PanelComponents'
import {TYPE_ITEM} from '../constants/type';


class PagePanel extends React.Component{

    //TODO
    // Title
    // Create date
    // Delete

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        };
    }

    openModal = ()=>{
        console.log(this.state)
        this.setState({modalOpen: true});
        console.log(this.state)
    };

    closeModal = ()=>{
        this.setState({modalOpen: false})
    };

    render(){

        const type = TYPE_ITEM.PAGE;

        return (
            <Grid.Column width={this.props.width}>
                <ButtonTop type={type} onClick={this.openModal} />
                <Modal open={this.state.modalOpen}>
                    <Modal.Header>{type} TITLE</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Input fluid defaultValue='Untitled' placeholder='Title'/>
                            <Button onClick={ this.closeModal }>Cancel</Button>
                            <Button onClick={ this.closeModal } primary>Done</Button>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <List.List >
                    <PageItem title="PageTitle" createDate="2017 Aug 10"/>
                    <PageItem title="PageTitle" createDate="2017 Aug 10"/>
                    <PageItem title="PageTitle" createDate="2017 Aug 10"/>
                    <PageItem title="PageTitle" createDate="2017 Aug 10"/>
                </List.List>
            </Grid.Column>
        );
    }
}

export default PagePanel;