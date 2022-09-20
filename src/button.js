function Button () {
    return (
        <section className="mb-5 pb-5" id="buttons">
            <h1 className="mb-3">Buttons Examples</h1>
            <p className="lead mb-5">Use Bootstrap custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
            <div>
                <div className="mb-3">
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button type="button" class="btn btn-secondary">Secondary</button>
                    <button type="button" class="btn btn-success">Success</button>
                    <button type="button" class="btn btn-danger">Danger</button>
                    <button type="button" class="btn btn-warning">Warning</button>
                    <button type="button" class="btn btn-info">Info</button>
                    <button type="button" class="btn btn-light">Light</button>
                    <button type="button" class="btn btn-dark">Dark</button>

                    <button type="button" class="btn btn-link">Link</button>
                </div>
                <div className="mb-3">
                    <a class="btn btn-primary" href="#" role="button">Link</a>
                    <button class="btn btn-primary" type="submit">Button</button>
                    <input class="btn btn-primary" type="button" value="Input" />
                    <input class="btn btn-primary" type="submit" value="Submit" />
                    <input class="btn btn-primary" type="reset" value="Reset" />

                </div>

                <div className="mb-3">
                    <button type="button" class="btn btn-outline-primary">Primary</button>
                    <button type="button" class="btn btn-outline-secondary">Secondary</button>
                    <button type="button" class="btn btn-outline-success">Success</button>
                    <button type="button" class="btn btn-outline-danger">Danger</button>
                    <button type="button" class="btn btn-outline-warning">Warning</button>
                    <button type="button" class="btn btn-outline-info">Info</button>
                    <button type="button" class="btn btn-outline-light">Light</button>
                    <button type="button" class="btn btn-outline-dark">Dark</button>
                </div>
                <div className="mb-3">
                    <button type="button" class="btn btn-primary btn-lg">Large button</button>
                    <button type="button" class="btn btn-secondary btn-lg">Large button</button>

                </div>
                <div className="mb-3">
                    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
                    <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
                </div>
                <div className="mb-3">
                    <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
                    <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
                </div>

                <div className="mb-3">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" checked /> Active
                        </label>
                        <label class="btn btn-secondary">
                            <input type="radio" name="options" id="option2" /> Radio
                        </label>
                        <label class="btn btn-secondary">
                            <input type="radio" name="options" id="option3" /> Radio
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary">Left</button>
                        <button type="button" class="btn btn-secondary">Middle</button>
                        <button type="button" class="btn btn-secondary">Right</button>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Button;