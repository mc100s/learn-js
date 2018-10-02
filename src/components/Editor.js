import React from 'react';
import AceEditor from 'react-ace'


import 'brace/mode/javascript';
import 'brace/theme/monokai';

let style = {
  margin: "15px 0",
  borderTop: "10px solid #272822",
  borderBottom: "10px solid #272822",
  borderRadius: 4,
  boxSizing: "initial"
}

function Editor(props) {
  let readOnly = !props.onChange
  let value = props.value && readOnly ? props.value.trim() : props.value
  return (
    <AceEditor
      width="100%"
      mode="javascript"
      theme="monokai"
      maxLines={30}
      fontSize={14}
      style={style}
      showPrintMargin={true}
      showGutter={true}
      readOnly={readOnly}
      highlightActiveLine={!readOnly}
      tabSize={2}
      {...props}
      value={value}
    />
  )
}

export default Editor;
