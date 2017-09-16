import React from 'react';
import {Button, Card} from 'semantic-ui-react'
import {formatDate} from '../util/util';
const PageItem = ({title, createDate, onClick, onDeleteButtonClicked, onEditButtonClicked})=> {

    return (

            <Card >
                <Card.Content onClick = { onClick }>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>
                        {/*{createDate.getHours() +':'+createDate.getMinutes()+'  '+formatDate(createDate)}*/}
                        {createDate}
                    </Card.Meta>
                    <Card.Meta>
                        Words: 100
                    </Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    <Button size='mini' onClick={onEditButtonClicked} basic color='green'>Edit</Button>
                    <Button size='mini' onClick={onDeleteButtonClicked} basic color='red'>Delete</Button>
                </Card.Content>
            </Card>
    )

};

export default PageItem;