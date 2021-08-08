import React, { useState } from 'react'
import styled from 'styled-components'
import { MarkedInput } from '../components/MarkdownEditor/markedInput'
import { Result } from '../components/MarkdownEditor/result'
import EditorContext from '../editorContext'
import { showMd, hideMd } from '../components/handler'

import '../css/meetings.css'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function Meetings() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

    return (
    
        <div id="contentpage">
          <div className="markdownPress" id="markdownPress" onClick={showMd}>
            + Add new meeting note
          </div>
          <div onClick={hideMd} className="markdownPressClose" id="back">  
            - Close editor
          </div>
 
        <div id="mdEditor">
          <EditorContext.Provider value={contextValue}>
       
              <br />
              <br />
              <Title>Meeting Notes</Title>
              <EditorContainer>
                <MarkedInput />
                <Result />
              </EditorContainer>
        
          </EditorContext.Provider>
        </div>
        </div>
 
    );
  }