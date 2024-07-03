import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Notes.css';

// import {
//     getDocs,
//     //  doc, 
//     collection
// } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { db } from '../../Firebase/FirebaseConfig';

const Notes = () => {
    const { id } = useParams();

    const [sData, setSData] = useState([])

    const getSubjectData = async () => {
        try {
            // const querySnapshot = await getDocs(collection(db, "fData"));
            // const data = querySnapshot.docs.map(doc => doc.data());
            const q = query(collection(db, 'fData'), where('id', '==', id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // Handle the retrieved data
            //   console.log(doc.id, ' => ', doc.data());
              setSData(doc.data());
            });

            
        } catch (error) {
            console.error('Error retrieving subject data:', error);
        }
    };

    useEffect(() => {
        getSubjectData();
    }, []);
    console.log('dekh bro hum aa gye', sData)
    return (
        <>
            {/* <div className='notes-container'>
                <h2>Subject Page</h2>
                <p>Subject ID: {id} </p>

            </div> */}

            <div class="notesContainer">
                <div class="notes-cont-inner">
                    <div class="subnotescont">
                        <div class="noteheading"><span>{sData.subjectType}</span></div>
                        <div class="notesmat">
                        <div dangerouslySetInnerHTML={{ __html: sData.formContent }}  style={{ width: '100%', wordWrap: 'break-word', textAlign: 'left', textJustify: 'inter-word' }}></div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Notes