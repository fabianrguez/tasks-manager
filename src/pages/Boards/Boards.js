import { Board } from 'components/Board';
import { Button, Input, TextArea } from 'components/Form';
import { Modal } from 'components/Modal';
import { Timestamp } from 'firebase/firestore';
import { useActiveBoard } from 'hooks';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Boards() {
  const { board, createTask } = useActiveBoard('board2');
  const [addTaskColumn, setAddTaskColumn] = useState('');
  const [inputValues, setInputValues] = useState({ taskName: '', taskDescription: '' });
  const modalRef = useRef();

  const handleAddTask = (column) => {
    modalRef.current?.toggleModal();
    setAddTaskColumn(column);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (Object.values(inputValues).every((input) => input !== '')) {
      createTask(
        {
          title: inputValues.taskName,
          description: inputValues.taskDescription,
          creationDate: Timestamp.now(),
          priority: 'normal',
          id: uuidv4(),
          assignedTo: ['Fabian'],
        },
        addTaskColumn
      );
      setAddTaskColumn('');
      setInputValues({ taskName: '', taskDescription: '' });
      modalRef.current?.toggleModal();
    }
  };

  return (
    <>
      <Board columns={board?.columns} onAddTask={handleAddTask} />
      <Modal ref={modalRef} title="Add task..." initialIsOpen={false}>
        <span>Column: {addTaskColumn}</span>
        <Input
          type="text"
          placeholder="name"
          name="taskName"
          autoComplete="off"
          value={inputValues.taskName}
          onInput={handleInputChange}
        />
        <TextArea
          placeholder="description"
          name="taskDescription"
          autoComplete="off"
          value={inputValues.taskDescription}
          onInput={handleInputChange}
        />
        <Modal.Footer justify="flex-end">
          <Button onClick={handleCreateTask}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
