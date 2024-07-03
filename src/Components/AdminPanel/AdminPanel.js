import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './AdminPanel.css';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';


const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [contentType, setcontentType] = useState('');

  const [by, setBy] = useState('');


  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentTypeChange = (e) => {
    setcontentType(e.target.value);
  };

  const handleByChange = (e) => {
    setBy(e.target.value);
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleSave = async () => {
    const contentState = editorState.getCurrentContent();
    const html = draftToHtml(convertToRaw(contentState));

    // Save the data (title and html) to the database
    // Implement the necessary backend logic to handle the data

    // console.log('Title:', title);
    // console.log('Content type:', contentType);
    // console.log('By:', by);

    // console.log('HTML:', html);
    try {
      const docRef = await addDoc(collection(db, 'fData'), {
        subjectType: title,
        contentType: contentType,
        by: by,
        formContent: html
      });
  
      const data = {
        subjectType: title,
        contentType: contentType,
        by: by,
        formContent: html,
        id: docRef.id
      };
  
      const docToUpdate = doc(db, 'fData', docRef.id);
      await updateDoc(docToUpdate, data);
  
      console.log('Data saved with ID: ', docRef.id);
      // Perform any additional actions after data is successfully saved
    } catch (error) {
      console.error('Error saving data: ', error);
      // Handle error scenario
    }

  };
  // const handleImageUpload = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       resolve({ data: { link: reader.result } });
  //     };
  //     reader.onerror = reject;
  //     reader.readAsDataURL(file);
  //   });
  // };


  return (
   <div className="admin-cont">
     <div className="admin-panel">
      <h2>Add New Content</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="contenttype">Content Type:</label>
          <input type="text" id="contenttype" value={contentType} onChange={handleContentTypeChange} />
        </div>
        <div>
          <label htmlFor="by">By:</label>
          <input type="text" id="by" value={by} onChange={handleByChange} />
        </div>
        <div>
          <label htmlFor="editor">Content:</label>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            toolbar={{
              options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'image', 'remove'],
              inline: {
                options: ['bold', 'italic', 'underline'],
              },
              blockType: {
                options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
              },
              textAlign: {
                options: ['left', 'center', 'right', 'justify'],
              },
              link: {
                options: ['link'],
              },
              // image: {
              //   uploadEnabled: true,
              //   uploadCallback: handleImageUpload,
              // },
            }}
          />
        </div>
      </form>
      <button onClick={handleSave}>Save</button>
    </div>
   </div>
  );
};

export default AdminPanel;
