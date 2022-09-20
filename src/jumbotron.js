
function Jumbotron () {
    return (
        <section className="mb-5 pb-5" id="jumbotron">
            <h1 className="mb-3">Jumbotron Examples</h1>
            <p className="lead mb-5">Lightweight, flexible component for showcasing hero unit style content.</p>
            <div class="mb-3">
                <div class="jumbotron">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
            <div class="mb-3">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Fluid jumbotron</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Jumbotron;