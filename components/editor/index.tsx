import React from 'react';
import { Editor } from '@toast-ui/react-editor';

interface MyEditorProps {
  editorRef?;
}

const MyEditor: React.FC<MyEditorProps> = ({ editorRef }) => {
  return <Editor ref={editorRef} />;
};

export default React.memo(MyEditor);
