import '././assets/ui-theme/custom/page-view.scss';
import Alert from './alert';
import Badge from './badge';
import Breadcrumb from './breadcrumb';
import Button from './button';
import Card from './card';
import Carousel from './carousel';
import Form from './form';
import Input from './input';
import Modal from './modal';
import Navbar from './navbar';
import Pagination from './pagination';
import Popovers from './popovers';
import Progress from './progress';
import Scrollspy from './scrollspy';
import Spinners from './spinner';
import Toasts from './toasts';
import Dropdowns from './dropdowns';
import Tooltips from './tooltips';
import Jumbotron from './jumbotron';
import Listgroup from './list-group';
import MediaObject from './media-object';
import Collapse from './collapse';

function App () {
    return (
        <main className="page-view">
            <Alert />
            <Badge />
            <Breadcrumb />
            <Button />
            <Card />
            <Carousel />
            <Collapse />
            <Dropdowns />
            <Form />
            <Input />
            <Jumbotron />
            <Listgroup />
            <MediaObject />
            <Modal />
            <Navbar />
            <Pagination />
            <Popovers />
            <Progress />
            <Scrollspy />
            <Spinners />
            <Toasts />
            <Tooltips />
        </main>
    );
}

export default App;