import React from 'react';

const Nav = props => {
    if (props.firstPage) {
        return (
            <div className="nav-page">
            <p>Page</p>
            <i className="fa fa-chevron-right nav-page_icon" aria-hidden="true"
                onClick={props.nextPage}
            ></i>
        </div>
        );
        
    } else if (props.lastPage) {
        return (
            <div className="nav-page">
                <i
                    className="fa fa-chevron-left nav-page_icon" aria-hidden="true"
                    onClick={props.prevPage}
                ></i>
                <p>Page</p>
            </div>
        );
    } else { 
        return (
            <div className="nav-page">
                <i
                    className="fa fa-chevron-left nav-page_icon" aria-hidden="true"
                    onClick={props.prevPage}
                ></i>
                <p>Page</p>
                <i className="fa fa-chevron-right nav-page_icon" aria-hidden="true"
                    onClick={props.nextPage}
                ></i>
            </div>
        );
    }
}



export default Nav;