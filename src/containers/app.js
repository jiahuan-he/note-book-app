import React from 'react';
import FixedMenu from  '../components/Header'
import { Grid } from 'semantic-ui-react'

import NotebookPanel from './NotebookPanel';
import PagePanel from './PagePanel';
import EditorPanel from './EditorPanel';


class App extends React.Component{

    render(){
        return (
            <div>
                <FixedMenu/>
                <br/>
                <br/>
                <br/>
                    <Grid stackable divided={true} textAlign="left">
                        <Grid.Row  centered >
                            <NotebookPanel width={3}/>
                            <PagePanel width={3}/>
                            <EditorPanel width={10}/>
                        </Grid.Row>
                    </Grid>
            </div>
        )
    }
}



export default App;
