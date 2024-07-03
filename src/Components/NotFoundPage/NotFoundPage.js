import React from 'react'
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className="notfounfpage-cont">
            <div className="not-found-container">
                <h1 className="not-found-heading">404 Not Found</h1>
                <p className="not-found-message">The page you're looking for does not exist.</p>
                {/* Add any additional content or styling */}
            </div>
        </div>
    )
}

export default NotFoundPage