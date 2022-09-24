
function Jumbotron () {
    return (
        <section id="jumbotron">
            <h1 className="mb-3">Jumbotron Examples</h1>
            <p className="lead mb-5">Lightweight, flexible component for showcasing hero unit style content.</p>
            <div className="mb-3">
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
            <div className="mb-3">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Jumbotron;