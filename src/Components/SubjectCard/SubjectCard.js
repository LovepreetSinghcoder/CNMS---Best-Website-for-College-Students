import React from 'react'
import './SubjectCard.css';

const SubjectCard = ({ subject, id }) => {
    return (
        <div className="subcardcontainer">
            <div className="subcardHead">
                <p>{subject}</p>
            </div>
            <div className="subcardBtncard ">
                {/* <a href="/Notes${id}">
                    <button
                        className="subcardBtn button">&gt;</button>
                </a> */}
                <a href={`/Notes/${id}`}>
                    <button className="subcardBtn button">&gt;</button>
                </a>
            </div>
        </div>
    )
}

export default SubjectCard