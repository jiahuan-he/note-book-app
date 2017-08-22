// @flow weak

import React from 'react';
import { Image } from 'semantic-ui-react'


class Notebook extends React.Component{



    //TODO
    //Title
    // Create date
    // Notes
    // Delete
    // DOt dot dot (settings)
    // tag

    style = {

    }

    render(){

        return (
            <div >
                <Image src='https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg' size='small' wrapped />
                <div >
                    <h2>Title</h2>
                    <h5>Create date</h5>
                    <h5>Number of notes</h5>
                    <p><a href="#" >Button</a>
                        <a href="#" role="button">Button</a></p>
                </div>
            </div>
        );
    }
}



export default Notebook;