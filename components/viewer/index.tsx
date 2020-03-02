import Viewer from 'tui-editor/dist/tui-editor-Viewer';
import { useEffect } from 'react';

const MyViewer = ({ initialPost }) => {
  useEffect(() => {
    new Viewer({
      el: document.getElementById('editor-section'),
      height: '500px',
      initialValue: initialPost,
      viewer: true,
    });
    console.log(initialPost);
  }, [initialPost]);

  return <div id="editor-section"></div>;
};

export default MyViewer;
