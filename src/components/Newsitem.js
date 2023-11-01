import React from 'react'

const Newsitem = (props) => {

    let { tittle, imageurl, newsurl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tittle}<span className="badge bg-secondary">{source}</span></h5>
                    <p className="card-text"><small className="text-muted">{author} {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )

}

export default Newsitem
