import React from 'react';
import { connect } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {SaveEditorButton, ReadOnlyButton} from '../containers/PanelComponents';
import store from '../reducers/store';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' , readOnly: false}; // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
        this.quillRef = null;      // Quill instance
        this.reactQuillRef = null;
        // this.unsubscribe = store.subscribe(this.switchPage);
    }

    switchPage = () =>{
        if(store.getState().currentPageId === 0){
            return;
        }
        console.log(" ");
        console.log( " current delta : ");
        console.dir(this.props.currentDelta);
        console.log(" ");
        this.setState( {text: this.props.currentDelta});
    };

    componentDidMount() {
        this.attachQuillRefs();

    }

    componentWillReceiveProps(nextProps) {
        this.setState( {text: nextProps.currentDelta});
    }

    componentDidUpdate() {
        this.attachQuillRefs();
    }

    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        this.quillRef = this.reactQuillRef.getEditor();
    };

    handleChange = (value)=>{
        this.setState({ text: value });
    };

    handleSave = ()=>{
        if(this.props.currentPageId === 0){
            return;
        }
        this.props.saveNotes(this.quillRef.getContents(), this.props.currentPageId);
    };



    render() {
        return (
            <div>
                <ReadOnlyButton/>
                <SaveEditorButton onClick = {this.handleSave}/>
                <ReactQuill
                    style = { {height: '500px'}}
                    value={this.state.text}
                    ref={(el) => { this.reactQuillRef = el }}
                    modules = {{
                        toolbar: [
                            [{ 'header': [1, 2, 3, false] }],
                            ['bold', 'italic', 'underline','strike', 'blockquote'],
                            ['link', 'image'],['code-block']
                        ],
                        syntax: true,
                    }}
                    format = {[
                        'header',
                        'bold', 'italic', 'underline', 'strike', 'blockquote',
                        'list', 'bullet', 'indent',
                        'link', 'image'
                    ]}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


const getCurrentDelta = (currentPageId, notes)=> {
    let delta = null;
    Object.keys(notes).forEach( (key)=> {
        if(key === currentPageId){
            delta = notes[key].note;
        }
    });
    return delta;
};

const mapStateToProps = (state)=> {
    return{
        currentDelta : getCurrentDelta(state.currentPageId, state.notes)
    }
};



export default connect(mapStateToProps)(Editor);