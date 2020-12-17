import React from 'react';

const Loader = () => (
    <div className="h-100 d-flex justify-content-center" style={{alignItems: 'center'}}>
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default Loader;
