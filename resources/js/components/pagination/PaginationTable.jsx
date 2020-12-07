import React from "react";
import Pagination from "../MainLayout/Pagination";
import API from "../../helpers/API";
import PropTypes from "prop-types";

function PaginationTable(props) {
    const page = (new URLSearchParams(window.location.search)).get('page') || 1;

    const [paginationData, setPaginationData] = React.useState(null);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setPaginationData(null);

        const method = (props.method || 'get').toLowerCase();
        const filters = {
            params: {
                page,
                ...(props.filters || {}),
            },
        };
        const methodArgs = [
            props.url,
            method === 'get' ? filters : undefined,
            method !== 'get' ? filters : undefined,
        ];

        API[method](...methodArgs)
            .then(res => setPaginationData(res.data))
            .catch(e => {
                // todo throw toast error?
                console.log(e);
                setError(true);
                props.onError && props.onError(e);
            });
    }, [page, props.filters]);

    if (!paginationData && !error)
        return <div>Loading</div>; // todo return loader

    return (
        <>
            <table className="table">
                {error && (
                    <tr>
                        <p>Something went wrong</p>
                    </tr>
                )}
                {!!props.render && !error && props.render(paginationData.data)}
            </table>

            {!error && !!paginationData && (
                <Pagination
                    currentPage={paginationData.last_page}
                    lastPage={paginationData.current_page}
                />
            )}
        </>
    );
}

PaginationTable.propTypes = {
    method: PropTypes.string,
    filters: PropTypes.object,
    url: PropTypes.string.isRequired,
    onError: PropTypes.func,
    render: PropTypes.func,
};

export default PaginationTable;
