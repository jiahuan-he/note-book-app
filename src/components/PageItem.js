import React from 'react';
import {Button, Card} from 'semantic-ui-react'
import {formatDate} from '../util/util';
import '../styles/notebook.css';

const PageItem = ({title, createDate, onClick, onDeleteButtonClicked, onEditButtonClicked, selected})=> {

    return (

            // <Card >
            //     <Card.Content onClick = { onClick }>
            //         <Card.Header>{title}</Card.Header>
            //         <Card.Meta>
            //             {/*{createDate.getHours() +':'+createDate.getMinutes()+'  '+formatDate(createDate)}*/}
            //             {createDate}
            //         </Card.Meta>
            //         <Card.Meta>
            //             Words: 100
            //         </Card.Meta>
            //         <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            //         <Button size='mini' onClick={onEditButtonClicked} basic color='green'>Edit</Button>
            //         <Button size='mini' onClick={onDeleteButtonClicked} basic color='red'>Delete</Button>
            //     </Card.Content>
            // </Card>

        <li className={selected? "selected":""}>
            <div onClick={onClick}>
                <div>
                    <h3 className="">
                        {title}
                    </h3>
                </div>
                <div className="page-detail">
                            <span className="">
                                {formatDate(createDate)}
                            </span>
                </div>
            </div>
            <div>
                <Button size='mini' onClick={onEditButtonClicked} basic color='green'>Rename</Button>
                <Button className="delete-button" size='mini' onClick={onDeleteButtonClicked} basic color='red'>Delete</Button>
            </div>

        </li>
    )

};

export default PageItem;