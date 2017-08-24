import React from 'react'
import { Button, Icon } from 'semantic-ui-react'




export const ButtonTop = ({type, onClick, }) =>
    <Button  onClick={onClick} className='panel-header-button' animated="vertical">
        <Button.Content hidden >ADD {type}</Button.Content>
        <Button.Content visible>
        <Icon name='plus' />
        </Button.Content>
    </Button>;

