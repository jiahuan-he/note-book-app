import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export const ButtonTop = ({type, onClick, disabled}) =>
    <Button disabled={disabled}  onClick={onClick} className='panel-header-button' animated="vertical">
        <Button.Content hidden >
            <Icon name='plus' />
        </Button.Content>
        <Button.Content visible>
            ADD {type}
        </Button.Content>
    </Button>;

export const ReadOnlyButton = () => {
    return <Button secondary>Read Only</Button>
};

export const SaveEditorButton = ({onClick}) => {
    return <Button
        onClick={onClick}
        positive>Save</Button>
};
