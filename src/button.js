function Button () {
    return (
        <section id="buttons">
            <h1 className="mb-3">Buttons Examples</h1>
            <p className="lead mb-5">Use Bootstrap custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
            <div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary mr-2">Primary</button>
                    <button type="button" className="btn btn-secondary mr-2">Secondary</button>
                    <button type="button" className="btn btn-success mr-2">Success</button>
                    <button type="button" className="btn btn-danger mr-2">Danger</button>
                    <button type="button" className="btn btn-warning mr-2">Warning</button>
                    <button type="button" className="btn btn-info mr-2">Info</button>
                    <button type="button" className="btn btn-light mr-2">Light</button>
                    <button type="button" className="btn btn-dark mr-2">Dark</button>

                    <button type="button" className="btn btn-link">Link</button>
                </div>
                <div className="mb-3">
                    <a className="btn btn-primary mr-2" href="#" role="button">Link</a>
                    <button className="btn btn-primary mr-2" type="submit">Button</button>
                    <input className="btn btn-primary mr-2" type="button" defaultValue="Input" />
                    <input className="btn btn-primary mr-2" type="submit" defaultValue="Submit" />
                    <input className="btn btn-primary mr-2" type="reset" defaultValue="Reset" />

                </div>

                <div className="mb-3">
                    <button type="button" className="btn btn-outline-primary mr-2">Primary</button>
                    <button type="button" className="btn btn-outline-secondary mr-2">Secondary</button>
                    <button type="button" className="btn btn-outline-success mr-2">Success</button>
                    <button type="button" className="btn btn-outline-danger mr-2">Danger</button>
                    <button type="button" className="btn btn-outline-warning mr-2">Warning</button>
                    <button type="button" className="btn btn-outline-info mr-2">Info</button>
                    <button type="button" className="btn btn-outline-light mr-2">Light</button>
                    <button type="button" className="btn btn-outline-dark mr-2">Dark</button>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary btn-lg mr-2">Large button</button>
                    <button type="button" className="btn btn-secondary btn-lg mr-2">Large button</button>

                </div>
                <div className="mb-3">
                    <a href="#" className="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true">Primary link</a>
                    <a href="#" className="btn btn-secondary btn-lg active mr-2" role="button" aria-pressed="true">Link</a>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-lg btn-primary mr-2" disabled>Primary button</button>
                    <button type="button" className="btn btn-secondary btn-lg mr-2" disabled>Button</button>
                </div>

                <div className="mb-3">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" defaultChecked /> Active
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" /> Radio
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option3" /> Radio
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary mr-2">Left</button>
                        <button type="button" className="btn btn-secondary mr-2">Middle</button>
                        <button type="button" className="btn btn-secondary mr-2">Right</button>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Button;