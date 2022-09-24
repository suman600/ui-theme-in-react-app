import logo from '../src/assets/imaegs/logo-solid.svg';


function Collapse () {
    return (
        <section id='collapse'>
            <h1 className="mb-3">Collapse Examples</h1>
            <p className="lead mb-5">Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>
            <div className="mb3">
                <p>
                    <a className="btn btn-primary mr-2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Link with href
                    </a>
                    <button className="btn btn-primary mr-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-target
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <p>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        Toggle width collapse
                    </button>
                </p>
                <div style={{ minHeight: '120px' }}>
                    <div className="collapse width" id="collapseWidthExample">
                        <div className="card card-body" style={{ 'width': '320px' }}>
                            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <p>
                    <a className="btn btn-primary mr-2" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                    <button className="btn btn-primary mr-2" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                    <button className="btn btn-primary mr-2" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                </p>
                <div className="row">
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="card card-body">
                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                            <div className="card card-body">
                                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Collapsible Group Item #1
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                Some placeholder content for the second accordion panel. This panel is hidden by default.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collapse;