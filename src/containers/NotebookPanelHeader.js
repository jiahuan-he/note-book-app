import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class NotebookPanelHeader extends React.Component{

    render(){
    return (
        <div onClick={this.props.onClick}>
            <Button toggle={false} className='panel-header-button' fluid animated="vertical">
                <Button.Content hidden >ADD NOTEBOOK</Button.Content>
                <Button.Content visible>
                    <Icon name='plus' />
                </Button.Content>
            </Button>
        </div>
    )
    }
};

export default NotebookPanelHeader;
