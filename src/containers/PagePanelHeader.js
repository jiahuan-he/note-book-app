import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const PagePanelHeader = () => (
    <div>
        <Button toggle={false} className='panel-header-button' animated="vertical">
            <Button.Content hidden >ADD PAGE</Button.Content>
            <Button.Content visible>
                <Icon name='plus' />
            </Button.Content>
        </Button>
    </div>
);

export default PagePanelHeader;
