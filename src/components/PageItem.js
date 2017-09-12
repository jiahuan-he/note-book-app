import React from 'react';
import { Card} from 'semantic-ui-react'
import {formatDate} from '../util/util';
const PageItem = ({title, createDate, onClick})=> {

    return (

            <Card >
                <Card.Content onClick = { onClick }>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>
                        {createDate.getHours() +':'+createDate.getMinutes()+'  '+formatDate(createDate)}
                    </Card.Meta>
                    <Card.Meta>
                        Words: 100
                    </Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                </Card.Content>
            </Card>
    )

};

export default PageItem;