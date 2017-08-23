import React from 'react';
import { Card} from 'semantic-ui-react'

const PageItem = ({title, createDate})=> {

    return (
            <Card href='#'>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{createDate + " "}
                         Words: 100
                    </Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                </Card.Content>
            </Card>
    )

};

export default PageItem;