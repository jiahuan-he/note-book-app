import React from 'react';
import { Card , Button} from 'semantic-ui-react'

const NotebookItem = ({title, createDate, onClick, onDeleteButtonClicked})=> {

    return (
        <div>
            <Card  >
                <Card.Content>
                    <div onClick={onClick}>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Meta>{createDate+ " "}
                            Pages: 6
                        </Card.Meta>
                    </div>
                    <div className='ui two buttons'>
                        <Button basic color='green'>Edit</Button>
                        <Button onClick={onDeleteButtonClicked} basic color='red'>Delete</Button>
                    </div>
                </Card.Content>
            </Card>
        </div>


    )

};
export default NotebookItem;