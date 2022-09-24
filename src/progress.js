
function Progress () {
    return (
        <section id="progress">
            <h1 className="mb-3">Progress Examples</h1>
            <p className="lead mb-5">Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.</p>
            <div className="mb-3">
                <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ 'width': '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ 'width': '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ 'width': '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ 'width': '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div className="mb-3">
                <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ 'width': '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
            </div>
            <div className="mb-3">
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" role="progressbar" style={{ 'width': '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar bg-info" role="progressbar" style={{ 'width': '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar bg-warning" role="progressbar" style={{ 'width': '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ 'width': '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div className="mb-3">
                <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ 'width': '15%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-success" role="progressbar" style={{ 'width': '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-info" role="progressbar" style={{ 'width': '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

            <div className="mb-3">
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ 'width': '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ 'width': '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ 'width ': '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ 'width': '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ 'width': '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div className="progress mb-3">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ 'width': '75%' }}></div>
            </div>
        </section >

    );
}


export default Progress;