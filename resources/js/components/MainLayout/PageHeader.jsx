import React from 'react';
import Row from "react-bootstrap/cjs/Row";
import Button from "react-bootstrap/cjs/Button";
import {useHistory} from 'react-router-dom';

const PageHeader = ({buttonLabel, title, buttonRoute, notification}) => {
    const history = useHistory();

    return (
        <>
            {!!notification && (
                <div id='header-notification' className="alert alert-primary" role="alert">
                    {notification}
                </div>
            )}
            <Row className='m-1 justify-content-between'>
                <h4 className='m-1'>{title}</h4>
                {!!buttonLabel &&
                <Button className='btn-sm' onClick={() => history.push(buttonRoute)}>{buttonLabel}</Button>
                }
            </Row>
        </>
    )
}

export default PageHeader;
