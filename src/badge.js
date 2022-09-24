function Badge () {
    return (
        <section id="badge">
            <h1 className="mb-3">Badges Examples</h1>
            <p className="lead mb-5">Documentation and examples for badges, our small count and labeling component.</p>
            <div>
                <div className="mb-3">
                    <h1>Example heading <span className="badge badge-secondary">New</span></h1>
                    <h2>Example heading <span className="badge badge-secondary">New</span></h2>
                    <h3>Example heading <span className="badge badge-secondary">New</span></h3>
                    <h4>Example heading <span className="badge badge-secondary">New</span></h4>
                    <h5>Example heading <span className="badge badge-secondary">New</span></h5>
                    <h6>Example heading <span className="badge badge-secondary">New</span></h6>
                </div>
                <button type="button" className="btn btn-primary mb-3">
                    Notifications <span className="badge badge-light">4</span>
                </button>
                <div className="mb-3">
                    <span className="badge badge-primary mr-2">Primary</span>
                    <span className="badge badge-secondary mr-2">Secondary</span>
                    <span className="badge badge-success mr-2">Success</span>
                    <span className="badge badge-danger mr-2">Danger</span>
                    <span className="badge badge-warning mr-2">Warning</span>
                    <span className="badge badge-info mr-2">Info</span>
                    <span className="badge badge-light mr-2">Light</span>
                    <span className="badge badge-dark mr-2">Dark</span>
                </div>
                <div className="mb-3">
                    <span className="badge badge-pill badge-primary mr-2">Primary</span>
                    <span className="badge badge-pill badge-secondary mr-2">Secondary</span>
                    <span className="badge badge-pill badge-success mr-2">Success</span>
                    <span className="badge badge-pill badge-danger mr-2">Danger</span>
                    <span className="badge badge-pill badge-warning mr-2">Warning</span>
                    <span className="badge badge-pill badge-info mr-2">Info</span>
                    <span className="badge badge-pill badge-light mr-2">Light</span>
                    <span className="badge badge-pill badge-dark mr-2">Dark</span>
                </div>
                <div>
                    <a href="#" className="badge badge-primary  mr-2">Primary</a>
                    <a href="#" className="badge badge-secondary mr-2">Secondary</a>
                    <a href="#" className="badge badge-success mr-2">Success</a>
                    <a href="#" className="badge badge-danger mr-2">Danger</a>
                    <a href="#" className="badge badge-warning mr-2">Warning</a>
                    <a href="#" className="badge badge-info mr-2">Info</a>
                    <a href="#" className="badge badge-light  mr-2">Light</a>
                    <a href="#" className="badge badge-dark">Dark</a>
                </div>
            </div>
        </section>
    );
}

export default Badge;