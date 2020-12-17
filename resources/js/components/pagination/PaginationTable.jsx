import React from "react";
import Pagination from "../MainLayout/Pagination";
import API from "../../helpers/API";
import PropTypes from "prop-types";
import Loader from "../Loader";

function PaginationTable(props) {
    // const page = (new URLSearchParams(window.location.search)).get('page') || 1;
    const [paginationData, setPaginationData] = React.useState(null);
    const [error, setError] = React.useState(false);


    React.useEffect(() => pageChange(), [props.filters]);

    const pageChange = (page) => {
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
            .then(res => {
                setPaginationData(res.data);
            })
            .catch(e => {
                // todo throw toast error?
                console.log(e);
                setError(true);
                props.onError && props.onError(e);
            });
    }

    if (!paginationData && !error)
        return <Loader/>;

    return (
        <>
            <table className="table table-sm">
                {error && (
                    <tr>
                        <p>Something went wrong</p>
                    </tr>
                )}
                {!!props.render && !error && props.render(paginationData.data)}
            </table>

            {!error && (
                <Pagination
                    pageChange={(page) => pageChange(page)}
                    currentPage={paginationData.current_page}
                    lastPage={paginationData.last_page}
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
