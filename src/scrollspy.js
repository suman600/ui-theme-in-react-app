
function Scrollspy () {
    return (
        <section id="scrollspy">
            <h1 className="mb-3">Scrollspy Examples</h1>
            <p className="lead mb-5">Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.</p>
            <div className="mb-5">
                <nav id="navbar-example2" className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#fat">@fat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#mdo">@mdo</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#one">one</a>
                                <a className="dropdown-item" href="#two">two</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#three">three</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" style={{ 'position': 'relative', 'height': '200px', marginTop: '0.5rem', 'overflow': 'auto' }}>
                    <h4 id="fat">@fat</h4>
                    <p>Placeholder content for the scrollspy example. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.</p>
                    <h4 id="mdo">@mdo</h4>
                    <p>Placeholder content for the scrollspy example. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.</p>
                    <h4 id="one">one</h4>
                    <p>Placeholder content for the scrollspy example. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.</p>
                    <h4 id="two">two</h4>
                    <p>Placeholder content for the scrollspy example. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.</p>
                    <h4 id="three">three</h4>
                    <p>Placeholder content for the scrollspy example. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.</p>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col-4">
                        <div id="list-example" className="list-group">
                            <a className="list-group-item list-group-item-action active" href="#list-item-1">Item 1</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                        </div>
                    </div>
                    <div className="col-8">
                        <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example" style={{ 'position': 'relative', 'height': '200px', marginTop: '0.5rem', 'overflow': 'auto' }}>
                            <h4 id="list-item-1">Item 1</h4>
                            <p>Placeholder content for the scrollspy list-group example. This one relates to item 1. Don't need apologies. There is no fear now, let go and just be free, I will love you unconditionally. Last Friday night. Don't be a shy kinda guy I'll bet it's beautiful. Summer after high school when we first met. 'Cause she's the muse and the artist. What? Wait. Thought that I was the exception.</p>
                            <h4 id="list-item-2">Item 2</h4>
                            <p>Placeholder content for the scrollspy list-group example. This one relates to item 2. Yeah, she dances to her own beat. Oh, no. You could've been the greatest. 'Cause, baby, you're a firework. Maybe a reason why all the doors are closed. Open up your heart and just let it begin. So très chic, yeah, she's a classic.</p>
                            <h4 id="list-item-3">Item 3</h4>
                            <p>Placeholder content for the scrollspy list-group example. This one relates to item 3. We go higher and higher. Never one without the other, we made a pact. I'm walking on air. Someone said you had your tattoo removed. Now I’m floating like a butterfly. Tone, tan fit and ready, turn it up cause its gettin' heavy. Cause once you’re mine, once you’re mine. You just gotta ignite the light and let it shine! So we hit the boulevard. Do you ever feel, feel so paper thin. I see it all, I see it now.</p>
                            <h4 id="list-item-4">Item 4</h4>
                            <p>Placeholder content for the scrollspy list-group example. This one relates to item 4. Summer after high school when we first met. There is no fear now, let go and just be free, I will love you unconditionally. Sun-kissed skin so hot we'll melt your popsicle. This love will make you levitate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
}


export default Scrollspy;