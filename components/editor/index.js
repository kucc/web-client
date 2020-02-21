import React, { Component } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';

export default class MyComponent extends React.Component {
  editorRef = React.createRef();

  handleClick = () => {
    console.log(this.editorRef.current.getInstance().getValue());
  };

  render() {
    return (
      <>
        <Editor previewStyle="tab" height="60vh" ref={this.editorRef} />
        <S.NewPostSubmitButton onClick={this.handleClick}>
          제출하기
        </S.NewPostSubmitButton>
      </>
    );
  }
}
