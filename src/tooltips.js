
function Tooltips () {
    return (
        <section id='tooltips'>
            <h1 className="mb-3">Tooltips Examples</h1>
            <p className="lead mb-5">Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage.</p>
            <div className="mb-3">
                <button type="button" className="btn btn-secondary mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Tooltip on top</button>
                <button type="button" className="btn btn-secondary mr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">Tooltip on right</button>
                <button type="button" className="btn btn-secondary mr-2" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Tooltip on bottom</button>
                <button type="button" className="btn btn-secondary mr-2" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">Tooltip on left</button>
                <button type="button" className="btn btn-secondary mr-2" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" style={{ pointerEvents: 'none' }} type="button" disabled>Disabled button</button>
            </div>
        </section>
    );
}


export default Tooltips;