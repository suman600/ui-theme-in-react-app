
import folderImg from './assets/imaegs/folder-view.png';

function Folder () {
    return (
        <section className="mb-5 pb-5" id='readme'>
            <h1 className="mb-3">Folder structure Examples</h1>
            <p className="lead mb-5">This is git folder structure to where we can place file and folder</p>
            <div class="mb3">
                <img src={folderImg} alt="img" style={{ 'max-width': '100%' }} />
            </div>
        </section>
    );
}

export default Folder;