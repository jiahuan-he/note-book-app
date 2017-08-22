import React from 'react';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' , readOnly: false}; // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        return (
            <div>
                <ReactQuill
                    style = { {height: '500px'}}
                    value={this.state.text}
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