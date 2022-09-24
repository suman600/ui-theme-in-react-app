function Button () {
    return (
        <section id="buttons">
            <h1 className="mb-3">Buttons Examples</h1>
            <p className="lead mb-5">Use Bootstrap custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
            <div>
                <div className="mb-3">
                    <button type="button" class="btn btn-primary mr-2">Primary</button>
                    <button type="button" class="btn btn-secondary mr-2">Secondary</button>
                    <button type="button" class="btn btn-success mr-2">Success</button>
                    <button type="button" class="btn btn-danger mr-2">Danger</button>
                    <button type="button" class="btn btn-warning mr-2">Warning</button>
                    <button type="button" class="btn btn-info mr-2">Info</button>
                    <button type="button" class="btn btn-light mr-2">Light</button>
                    <button type="button" class="btn btn-dark mr-2">Dark</button>

                    <button type="button" class="btn btn-link">Link</button>
                </div>
                <div className="mb-3">
                    <a class="btn btn-primary mr-2" href="#" role="button">Link</a>
                    <button class="btn btn-primary mr-2" type="submit">Button</button>
                    <input class="btn btn-primary mr-2" type="button" value="Input" />
                    <input class="btn btn-primary mr-2" type="submit" value="Submit" />
                    <input class="btn btn-primary mr-2" type="reset" value="Reset" />

                </div>

                <div className="mb-3">
                    <button type="button" class="btn btn-outline-primary mr-2">Primary</button>
                    <button type="button" class="btn btn-outline-secondary mr-2">Secondary</button>
                    <button type="button" class="btn btn-outline-success mr-2">Success</button>
                    <button type="button" class="btn btn-outline-danger mr-2">Danger</button>
                    <button type="button" class="btn btn-outline-warning mr-2">Warning</button>
                    <button type="button" class="btn btn-outline-info mr-2">Info</button>
                    <button type="button" class="btn btn-outline-light mr-2">Light</button>
                    <button type="button" class="btn btn-outline-dark mr-2">Dark</button>
                </div>
                <div className="mb-3">
                    <button type="button" class="btn btn-primary btn-lg mr-2">Large button</button>
                    <button type="button" class="btn btn-secondary btn-lg mr-2">Large button</button>

                </div>
                <div className="mb-3">
                    <a href="#" class="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true">Primary link</a>
                    <a href="#" class="btn btn-secondary btn-lg active mr-2" role="button" aria-pressed="true">Link</a>
                </div>
                <div className="mb-3">
                    <button type="button" class="btn btn-lg btn-primary mr-2" disabled>Primary button</button>
                    <button type="button" class="btn btn-secondary btn-lg mr-2" disabled>Button</button>
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
                        <button type="button" class="btn btn-secondary mr-2">Left</button>
                        <button type="button" class="btn btn-secondary mr-2">Middle</button>
                        <button type="button" class="btn btn-secondary mr-2">Right</button>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Button;