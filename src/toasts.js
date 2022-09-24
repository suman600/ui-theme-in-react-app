import logo from '../src/assets/imaegs/logo-solid.svg';

function Toasts () {
    return (
        <section id='toasts'>
            <h1 className="mb-3">Toasts Examples</h1>
            <p className="lead mb-5">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>
            <div className="mb-3">
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src={logo} className="rounded mr-2" width="16" alt="..." />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <button type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button>

                <div className="position-fixed bottom-0 right-0 p-3" style={{ zIndex: '5', 'right': '0', 'bottom': '0' }}>
                    <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
                        <div className="toast-header">
                            <img src={logo} className="rounded mr-2" width="16" alt="..." />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src={logo} className="rounded mr-2" width="16" alt="..." />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small className="text-muted">just now</small>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        See? Just like this.
                    </div>
                </div>
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src={logo} className="rounded mr-2" width="16" alt="..." />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small className="text-muted">2 seconds ago</small>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        Heads up, toasts will stack automatically
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="py-4 px-4 bg-dark">
                    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <img src={logo} className="rounded mr-2" width="16" alt="..." />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small className="text-muted">just now</small>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="toast-body">
                            See? Just like this.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Toasts;