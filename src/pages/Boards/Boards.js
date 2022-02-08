import { Board } from 'components/Board';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks';
import { Input } from 'components/Form';

export function Boards() {
  const { isOpen, toggle: toggleModal } = useModal({ initialIsOpen: false });

  return (
    <>
      <Board onAddTask={toggleModal} />
      <Modal title="Add task..." isOpen={true} onCloseModal={toggleModal}>
        <Input type="text" placeholder="name" />
      </Modal>
    </>
  );
}
