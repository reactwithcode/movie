import React from 'react'

const MainDetailOverview = () => {
    return (
    <div className="container">
        <div className="category">
            <div className="category-list d-flex flex-wrap">
            <a className="active">Overview</a>
            <a>Characters</a>
            <a>Review</a>
            </div>
        </div>
        <div className="container">
        <div>
            <h1>Synopsis</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took.</p>
            <p>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took.
            </p>
        </div>
        <div className="movieinfo">
            <h1>Movie Info</h1>
            <ul className="movieinfo-list">
                <li>Release date : January 5, 1998 </li>
                <li>Director : John Doe</li>
                <li>Featured song : Pegasus fantasi</li>
                <li>Budget : 200 million USD</li>
                <li>Release date : January 5, 1998 </li>
                <li>Director : James Cameron</li>
                <li>Featured song : Soldier dream</li>
                <li>Budget : 200 million USD</li>
            </ul>
        </div>
        </div>
    </div>
    )
}

export default MainDetailOverview;
