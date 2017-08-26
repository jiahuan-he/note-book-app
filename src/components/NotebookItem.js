import React from 'react';
import { Card , Button} from 'semantic-ui-react';
import {monthNames} from '../util/constants';
import { formatDate } from '../util/util';


const NotebookItem = ({title, createDate, onClick, onDeleteButtonClicked, onEditButtonClicked, pageCount})=> {

    return (
        <div>
            <Card  >
                <Card.Content>
                    <div onClick={onClick}>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Meta>
                            {formatDate(createDate)}
                        </Card.Meta>
                        <Card.Meta>
                            page count {pageCount}
                        </Card.Meta>
                    </div>
                    <div>
                        <Button size='mini' onClick={onEditButtonClicked} basic color='green'>Edit</Button>
                        <Button size='mini' onClick={onDeleteButtonClicked} basic color='red'>Delete</Button>
                    </div>
                </Card.Content>
            </Card>
        </div>


    )

};
export default NotebookItem;