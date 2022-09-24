import logo from '../src/assets/imaegs/logo-solid.svg';

function Toasts () {
    return (
        <section id='toasts'>
            <h1 className="mb-3">Toasts Examples</h1>
            <p className="lead mb-5">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>
            <div className="mb-3">
                <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src={logo} class="rounded mr-2" width="16" alt="..." />
                        <strong class="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

                <div class="position-fixed bottom-0 right-0 p-3" style={{ 'z-index': '5', 'right': '0', 'bottom': '0' }}>
                    <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
                        <div class="toast-header">
                            <img src={logo} class="rounded mr-2" width="16" alt="..." />
                            <strong class="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src={logo} class="rounded mr-2" width="16" alt="..." />
                        <strong class="mr-auto">Bootstrap</strong>
                        <small class="text-muted">just now</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        See? Just like this.
                    </div>
                </div>
                <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src={logo} class="rounded mr-2" width="16" alt="..." />
                        <strong class="mr-auto">Bootstrap</strong>
                        <small class="text-muted">2 seconds ago</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        Heads up, toasts will stack automatically
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div class="py-4 px-4 bg-dark">
                    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <img src={logo} class="rounded mr-2" width="16" alt="..." />
                            <strong class="mr-auto">Bootstrap</strong>
                            <small class="text-muted">just now</small>
                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="toast-body">
                            See? Just like this.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Toasts;