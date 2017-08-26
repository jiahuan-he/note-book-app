import React from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' , readOnly: false}; // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
        this.quillRef = null;      // Quill instance
        this.reactQuillRef = null;
    }

    componentDidMount() {
        this.attachQuillRefs()
    }

    componentDidUpdate() {
        this.attachQuillRefs()
    }

    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        this.quillRef = this.reactQuillRef.getEditor();
    };

    handleChange(value) {
        this.setState({ text: value });
        console.log(this.quillRef.getContents());
    }

    render() {
        return (
            <div>
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
                    onChange={this.handleChange} />
            </div>
        )
    }
}

export default Editor;