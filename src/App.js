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



function App () {
    return (
        <main className="page-view">
            <Alert />
            <Badge />
            <Breadcrumb />
            <Button />
            <Card />
            <Carousel />
            <Form />
            <Input />
            <Modal />
        </main>
    );
}

export default App;