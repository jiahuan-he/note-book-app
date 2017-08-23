import React from 'react';
import PageItem from '../components/PageItem'
import { Grid, List } from 'semantic-ui-react'
import PagePanelHeader from './PagePanelHeader'

class PagePanel extends React.Component{

    //TODO
    // Title
    // Create date
    // Delete

    render(){
        return (
            <Grid.Column width={this.props.width}>
                <PagePanelHeader/>
                <List.List >
                    <PageItem title="PageTitle" createDate="2017 Aug 10"/>
                    <PageItem title="PageTitle" createDate="2017 Aug 10"/>
                    <PageItem title="PageTitle" createDate="2017 Aug 10"/>
                    <PageItem title="PageTitle" createDate="2017 Aug 10"/>
                </List.List>
            </Grid.Column>
        );
    }
}

export default PagePanel;