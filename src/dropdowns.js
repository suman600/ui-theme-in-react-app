
function Dropdowns () {
    return (
        <section id="dropdowns">
            <h1 className="mb-3">Dropdown Examples</h1>
            <p className="lead mb-5">Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>
            <div className="mb-3">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        Action
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group">
                    <button type="button" className="btn btn-danger">Action</button>
                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group mr-2">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        Large button
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn btn-secondary btn-lg" type="button">
                        Large split button
                    </button>
                    <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group mr-2">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        Small button
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn btn-secondary btn-sm" type="button">Small split button</button>
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group dropup">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Dropup</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group dropup">
                    <button type="button" className="btn btn-secondary">
                        Split dropup
                    </button>
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="btn-group dropright mr-2">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Dropright</button>
                    <div className="dropdown-menu">
                    </div>
                </div>
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-secondary">Split dropright</button>
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropright</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group dropleft mr-2">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        Dropleft
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group">
                    <div className="btn-group dropleft">
                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                            <span className="sr-only">Toggle Dropleft</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary">
                        Split dropleft
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group mr-2">
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group mr-2">
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group mr-2">
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group mr-2">
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group mr-2">
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="d-flex">
                    <div className="dropdown mr-1">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" data-offset="10,20">
                            Offset
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary">Reference</button>
                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false" data-reference="parent">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-expanded="false">
                        Right-aligned but left aligned when large screen
                    </button>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                        <button className="dropdown-item" type="button">Action</button>
                        <button className="dropdown-item" type="button">Another action</button>
                        <button className="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-expanded="false">
                        Left-aligned but right aligned when large screen
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg-right">
                        <button className="dropdown-item" type="button">Action</button>
                        <button className="dropdown-item" type="button">Another action</button>
                        <button className="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Dropdowns;