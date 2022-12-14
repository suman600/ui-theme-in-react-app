
function Modal () {
    return (
        <section id="modal">
            <h1 className="mb-3">Modal Examples</h1>
            <p className="lead mb-5">Use Bootstrap JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
            <div className="modal" tabIndex="-1" role="dialog" style={{ position: 'relative', top: 'auto', right: 'auto', bottom: 'auto', left: 'auto', display: 'block', zIndex: '9' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Modal;