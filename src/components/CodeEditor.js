import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import fetchGeneratedCode from '../api';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// Type your code here',
      prompt: ''
    };
  }

  editorDidMount(editor) {
    console.log('Editor mounted');
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
    this.setState({ code: newValue });
  }

  handleGenerateCode = async () => {
    const { prompt } = this.state;
    const generatedCode = await fetchGeneratedCode(prompt);
    this.setState({ code: generatedCode });
  };

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
    };
    return (
      <div>
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange.bind(this)}
          editorDidMount={this.editorDidMount.bind(this)}
        />
        <button onClick={this.handleGenerateCode}>Generate Code</button>
      </div>
    );
  }
}

export default CodeEditor;
