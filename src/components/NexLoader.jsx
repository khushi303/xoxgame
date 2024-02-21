import React from 'react'

const NexLoader = () => {
    return (
        <div>
            <div id="preloder"
                className="loader_bg_linear min-vh-100 w-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center">
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            </div>
        </div>
    )
}

export default NexLoader