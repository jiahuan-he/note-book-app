import React from 'react';
import Header from  '../components/Header'
import Notebook from './Notebook';


class App extends React.Component{

    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <Notebook/>
                        <Notebook/>
                        <Notebook/>
                    </div>
                </div>
            </div>
        )
    }
}



export default App;
