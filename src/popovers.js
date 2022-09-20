
function Popovers () {
    return (
        <section className="mb-5 pb-5" id="popovers">
            <h1 className="mb-3">Popovers Examples</h1>
            <p className="lead mb-5">Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.</p>
            <div className="mb-3">
                <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
            </div>

            <div className="mb-3">
                <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Top popover">Popover on top</button>
                <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Right popover">Popover on right</button>
                <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Bottom popover">Popover on bottom</button>
                <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Left popover">Popover on left</button>
            </div>
            <div className="mb-3">
                <a tabindex="0" className="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
            </div>
            <button className="btn btn-primary" style={{ 'pointer- events': 'none' }} type="button" disabled>Disabled button</button>
        </section >

    );
}

export default Popovers;