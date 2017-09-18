import React from 'react';
import { Card , Button} from 'semantic-ui-react';
import { formatDate } from '../util/util';
import "../styles/notebook.css";

const NotebookItem = ({title, createDate, onClick, onDeleteButtonClicked, onEditButtonClicked, pageCount, selected})=> {

    return (
        // <div>
        //     <Card  className="notebook-item">
        //         <Card.Content>
        //             <div onClick={onClick}>
        //                 <Card.Header>
        //                     {title}
        //                 </Card.Header>
        //                 <Card.Meta>
        //                     {formatDate(createDate)}
        //                 </Card.Meta>
        //                 <Card.Meta>
        //                     page count {pageCount}
        //                 </Card.Meta>
        //             </div>
        //             <div>
        //                 <Button size='mini' onClick={onEditButtonClicked} basic color='green'>Edit</Button>
        //                 <Button size='mini' onClick={onDeleteButtonClicked} basic color='red'>Delete</Button>
        //             </div>
        //         </Card.Content>
        //     </Card>
        // </div>

        <li className={selected? "selected":""}>
                    <div onClick={onClick}>
                        <div>
                            <h3 className="notebook-title">
                                {title}
                            </h3>
                        </div>
                        <div className="notebook-detail">
                            <span>
                                {formatDate(createDate)}
                            </span>
                            <span className="page-count">
                                 {pageCount} pages
                            </span>
                        </div>
                    </div>
            <div>
                <Button size='mini' onClick={onEditButtonClicked} basic color='blue'>Edit</Button>
                <Button className="delete-button" size='mini' onClick={onDeleteButtonClicked} basic color='red'>Delete</Button>
            </div>

        </li>

    )

};
export default NotebookItem;