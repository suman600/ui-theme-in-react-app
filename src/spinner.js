
function Spinners () {
    return (
        <section id="spinners">
            <h1 className="mb-3">Spinners Examples</h1>
            <p className="lead mb-5">Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
            <div className="mb-3">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className="mb-3">
                <div className="spinner-border text-primary mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-secondary mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-danger mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-warning mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-info mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-light mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-dark mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className="mb-3">
                <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className="mb-3">
                <div className="clearfix">
                    <div className="spinner-border float-right" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary mr-2" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="sr-only">Loading...</span>
                </button>
                <button className="btn btn-primary mr-2" type="button" disabled>
                    <span className="spinner-border spinner-border-sm  mr-2" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        </section>
    );
}


export default Spinners;