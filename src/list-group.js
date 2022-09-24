
function Listgroup () {
    return (
        <section id="list-group">
            <h1 className="mb-3">List group Examples</h1>
            <p className="lead mb-5">List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
            <div className="mb-3">
                <ul className="list-group">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
            <div className="mb-3">
                <ul className="list-group">
                    <li className="list-group-item active" aria-current="true">An active item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
            <div className="mb-3">
                <ul className="list-group">
                    <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
            <div className="mb-3">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                        The current link item
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">A second link item</a>
                    <a href="#" className="list-group-item list-group-item-action">A third link item</a>
                    <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
                    <a className="list-group-item list-group-item-action disabled">A disabled link item</a>
                </div>
            </div>
            <div className="mb-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
            <div className="mb-3">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <ul className="list-group list-group-horizontal-lg">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <ul className="list-group list-group-horizontal-xl">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
            </div>
            <div className="mb-3">
                <ul className="list-group">
                    <li className="list-group-item">A simple default list group item</li>

                    <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
                    <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                    <li className="list-group-item list-group-item-success">A simple success list group item</li>
                    <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
                    <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
                    <li className="list-group-item list-group-item-info">A simple info list group item</li>
                    <li className="list-group-item list-group-item-light">A simple light list group item</li>
                    <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
                </ul>
            </div>
            <div className="mb-3">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        A list item
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        A second list item
                        <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        A third list item
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>
            </div>
            <div className="mb-3">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small>And some small print.</small>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small className="text-muted">And some muted small print.</small>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small className="text-muted">And some muted small print.</small>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Listgroup;