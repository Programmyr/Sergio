import React from 'react';

const Error = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 ">
                    <div className="alert alert-warning" role="alert">
                        {props.message}
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Error;