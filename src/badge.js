function Badge () {
    return (
        <section id="badge">
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
                    <span class="badge badge-primary mr-2">Primary</span>
                    <span class="badge badge-secondary mr-2">Secondary</span>
                    <span class="badge badge-success mr-2">Success</span>
                    <span class="badge badge-danger mr-2">Danger</span>
                    <span class="badge badge-warning mr-2">Warning</span>
                    <span class="badge badge-info mr-2">Info</span>
                    <span class="badge badge-light mr-2">Light</span>
                    <span class="badge badge-dark mr-2">Dark</span>
                </div>
                <div className="mb-3">
                    <span class="badge badge-pill badge-primary mr-2">Primary</span>
                    <span class="badge badge-pill badge-secondary mr-2">Secondary</span>
                    <span class="badge badge-pill badge-success mr-2">Success</span>
                    <span class="badge badge-pill badge-danger mr-2">Danger</span>
                    <span class="badge badge-pill badge-warning mr-2">Warning</span>
                    <span class="badge badge-pill badge-info mr-2">Info</span>
                    <span class="badge badge-pill badge-light mr-2">Light</span>
                    <span class="badge badge-pill badge-dark mr-2">Dark</span>
                </div>
                <div>
                    <a href="#" class="badge badge-primary  mr-2">Primary</a>
                    <a href="#" class="badge badge-secondary mr-2">Secondary</a>
                    <a href="#" class="badge badge-success mr-2">Success</a>
                    <a href="#" class="badge badge-danger mr-2">Danger</a>
                    <a href="#" class="badge badge-warning mr-2">Warning</a>
                    <a href="#" class="badge badge-info mr-2">Info</a>
                    <a href="#" class="badge badge-light  mr-2">Light</a>
                    <a href="#" class="badge badge-dark">Dark</a>
                </div>
            </div>
        </section>
    );
}

export default Badge;