// @flow weak

import React from 'react';


class Notebook extends React.Component{



    //TODO
    //Title
    // Create date
    // Notes
    // Delete
    // DOt dot dot (settings)
    // tag


    render(){
        let myAttr = {
            'data-toggle': 'tooltip',
            'data-placement': 'left',
            'title': 'Tooltip on left',
        };
        return (
            <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                    <img src="https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" alt="..."/>
                        <div className="caption">
                            <h2>Title</h2>
                            <h5>Create date</h5>
                            <h5>Number of notes</h5>
                            <p><a href="#" className="btn btn-primary"  {...myAttr} role="button">Button</a>
                                <a href="#" className="btn btn-default" role="button">Button</a></p>
                        </div>
                </div>
            </div>
        );
    }
}



export default Notebook;