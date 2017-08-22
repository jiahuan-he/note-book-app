import React from 'react';
import FixedMenu from  '../components/Header'
import { Grid, Image } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import Editor from '../components/Editor';

class App extends React.Component{

    render(){
        return (
            <div>
                <FixedMenu/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Grid divided={true} textAlign="left">
                        <Grid.Row >
                            <Grid.Column width={2}>
                                <List.List >
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>site</List.Header>
                                            Your site's theme
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>site</List.Header>
                                            Your site's theme
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>site</List.Header>
                                            Your site's theme
                                        </List.Content>
                                    </List.Item>
                                </List.List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <List.List >
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>site</List.Header>
                                            Your site's theme
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>site</List.Header>
                                            Your site's theme
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>site</List.Header>
                                            Your site's theme
                                        </List.Content>
                                    </List.Item>
                                </List.List>
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <Grid.Row columns={4}>
                                    <Editor/>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </div>

            </div>
        )
    }
}



export default App;
