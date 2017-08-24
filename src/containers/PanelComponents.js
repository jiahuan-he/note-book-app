import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export const ButtonTop = ({type, onClick, disabled}) =>
    <Button disabled={disabled}  onClick={onClick} className='panel-header-button' animated="vertical">
        <Button.Content hidden >ADD {type}</Button.Content>
        <Button.Content visible>
        <Icon name='plus' />
        </Button.Content>
    </Button>;

