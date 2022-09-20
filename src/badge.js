function Badge () {
    return (
        <section className="mb-5 pb-5" id="badge">
            <h1 className="mb-3">Badges Examples</h1>
            <p className="lead mb-5">Documentation and examples for badges, our small count and labeling component.</p>
            <div>
                <div className="mb-3">
                    <h1>Example heading <span class="badge badge-secondary">New</span></h1>
                    <h2>Example heading <span class="badge badge-secondary">New</span></h2>
                    <h3>Example heading <span class="badge badge-secondary">New</span></h3>
                    <h4>Example heading <span class="badge badge-secondary">New</span></h4>
                    <h5>Example heading <span class="badge badge-secondary">New</span></h5>
                    <h6>Example heading <span class="badge badge-secondary">New</span></h6>
                </div>
                <button type="button" class="btn btn-primary mb-3">
                    Notifications <span class="badge badge-light">4</span>
                </button>
                <div className="mb-3">
                    <span class="badge badge-primary">Primary</span>
                    <span class="badge badge-secondary">Secondary</span>
                    <span class="badge badge-success">Success</span>
                    <span class="badge badge-danger">Danger</span>
                    <span class="badge badge-warning">Warning</span>
                    <span class="badge badge-info">Info</span>
                    <span class="badge badge-light">Light</span>
                    <span class="badge badge-dark">Dark</span>
                </div>
                <div className="mb-3">
                    <span class="badge badge-pill badge-primary">Primary</span>
                    <span class="badge badge-pill badge-secondary">Secondary</span>
                    <span class="badge badge-pill badge-success">Success</span>
                    <span class="badge badge-pill badge-danger">Danger</span>
                    <span class="badge badge-pill badge-warning">Warning</span>
                    <span class="badge badge-pill badge-info">Info</span>
                    <span class="badge badge-pill badge-light">Light</span>
                    <span class="badge badge-pill badge-dark">Dark</span>
                </div>
                <div>
                    <a href="#" class="badge badge-primary">Primary</a>
                    <a href="#" class="badge badge-secondary">Secondary</a>
                    <a href="#" class="badge badge-success">Success</a>
                    <a href="#" class="badge badge-danger">Danger</a>
                    <a href="#" class="badge badge-warning">Warning</a>
                    <a href="#" class="badge badge-info">Info</a>
                    <a href="#" class="badge badge-light">Light</a>
                    <a href="#" class="badge badge-dark">Dark</a>
                </div>
            </div>
        </section>
    );
}

export default Badge;