import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {TYPE_ITEM} from "../util/constants";

export const ButtonTop = ({type, onClick, disabled}) =>{
    let color='';
    switch (type){
        case TYPE_ITEM.NOTEBOOK:
            color='blue';
            break;
        case TYPE_ITEM.PAGE:
            color="green";
            break;
        default:
            break;
    }

    return (
        <Button
            basic
            color={color}
            fluid
            disabled={disabled}
            onClick={onClick}
            className='panel-header-button'
            animated="vertical"
        >
            <Button.Content hidden >
            <Icon name='plus' />
            </Button.Content>
            <Button.Content visible>
                ADD {type}
            </Button.Content>
    </Button>);
};

export const SaveEditorButton = ({onClick}) => {
    return <Button className="save-button"
        onClick={onClick}
        positive>Save</Button>
};
