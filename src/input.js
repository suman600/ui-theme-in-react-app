
function Input () {
    return (
        <section id="input-group">
            <h1 className="mb-3">Input Group Examples</h1>
            <p className="lead mb-5">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>
            </div>

            <label htmlFor="basic-url">Your vanity URL</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                </div>
            </div>

            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">With textarea</span>
                </div>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
        </section>
    );
}

export default Input;