import React from 'react';
import { Card } from 'semantic-ui-react'

const NotebookItem = ({title, createDate})=> {

    return (

        <Card href='#'>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{createDate+ " "}
                     Pages: 6
                </Card.Meta>
            </Card.Content>
        </Card>
    )

};
export default NotebookItem;