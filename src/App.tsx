import { Advantages } from './components/Advantages';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Festivals } from './components/Festivals';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Modal } from './components/Modal';
import { Process } from './components/Process';
import { useModal } from './hooks/useModal';

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="min-h-screen bg-white text-black">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Advantages />
        <Festivals />
        <Process />
        <FAQ />
        <CTA onOpenModal={openModal} />
      </main>
      <Footer />

      <Modal isOpen={isOpen} title="Заявка на участие" onClose={closeModal}>
        <Form onSuccess={closeModal} />
      </Modal>
    </div>
  );
};

export default App;
