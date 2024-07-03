import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './HomePage.css';
import SubjectCard from '../SubjectCard/SubjectCard';
import Footer from '../Footer/Footer';
import BottomBar from '../BottomBar/BottomBar';

import {
    getDocs,
    //  doc, 
    collection
} from 'firebase/firestore';

import { db } from '../../Firebase/FirebaseConfig';










const HomePage = () => {

    const [subject, setSubject] = useState([])

    const getSubjectData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "fData"));
            const data = querySnapshot.docs.map(doc => doc.data());
            setSubject(data);
        } catch (error) {
            console.error('Error retrieving subject data:', error);
        }
    };

    useEffect(() => {
        getSubjectData();
    }, []);

    // console.log(subject)

    // Home page component code
    return (
        <div>

            <div className="container">
                <div className="h-main">
                    <div className="l-home">
                        <div className="circle f-circle"></div>
                        <div className="circle s-circle"></div>
                        <div className="circle t-circle"></div>
                    </div>
                    <div className="r-home">
                        <div className="m-img">
                            <img src={require('../../Image/student.png')} alt='img' />
                        </div>
                        <div className="m-title"><span>CNMS</span>
                            <p
                            >College Notes Mangement System, Provide Notes material and guide blogs</p>
                        </div>
                    </div>
                </div>

                <div className="subcontainer">


                    <div className="subtitle">
                        <p>Subjects</p>
                    </div>
                    <div className="subjdata">
                        {/* <SubjectCard /> */}
                        {subject.map((subject, index) => (
                            <SubjectCard key={index} subject={subject.subjectType} id={subject.id} />
                        ))}
                    </div>
                </div>
                <div className="h-bottom"></div>
            </div>

            <BottomBar />

        </div>
    );
};

export default HomePage;
