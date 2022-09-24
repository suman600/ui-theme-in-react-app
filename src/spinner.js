
function Spinners () {
    return (
        <section id="spinners">
            <h1 className="mb-3">Spinners Examples</h1>
            <p className="lead mb-5">Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
            <div className="mb-3">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div className="mb-3">
                <div class="spinner-border text-primary mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-border text-secondary mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-border text-success mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-border text-danger mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-border text-warning mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-border text-info mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-border text-light mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-border text-dark mr-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div className="mb-3">
                <div class="spinner-grow text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div className="mb-3">
                <div class="clearfix">
                    <div class="spinner-border float-right" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <button class="btn btn-primary mr-2" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span class="sr-only">Loading...</span>
                </button>
                <button class="btn btn-primary mr-2" type="button" disabled>
                    <span class="spinner-border spinner-border-sm  mr-2" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        </section>
    );
}


export default Spinners;