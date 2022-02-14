import { Board } from 'components/Board';
import { Button, Input, Select, TextArea } from 'components/Form';
import { Modal } from 'components/Modal';
import { PRIORITIES } from 'constants';
import { Timestamp } from 'firebase/firestore';
import { useActiveBoard } from 'hooks';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Boards() {
  const { board, columns, createTask } = useActiveBoard('board2');
  const [inputValues, setInputValues] = useState({
    taskName: '',
    taskDescription: '',
    taskPriority: '',
    taskColumn: '',
  });
  const modalRef = useRef();

  const handleAddTask = (column) => {
    modalRef.current?.toggleModal();
    setInputValues({ ...inputValues, taskColumn: column });
  };

  const handleInputChange = (e) => {
    e.preventDefault?.();
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
          priority: inputValues.taskPriority,
          id: uuidv4(),
          assignedTo: ['Fabian'],
        },
        inputValues.taskColumn
      );
      setInputValues({ taskName: '', taskDescription: '', taskPriority: '', taskColumn: '' });
      modalRef.current?.toggleModal();
    }
  };

  return (
    <>
      <Board columns={board?.columns} onAddTask={handleAddTask} />
      <Modal ref={modalRef} title="Add task..." initialIsOpen={false}>
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
        <Select placeholder="Column" name="taskColumn" value={inputValues.taskColumn} onChange={handleInputChange}>
          {columns?.map((column, index) => (
            <Select.Option key={`${column}-${index}`} value={column}>
              {column}
            </Select.Option>
          ))}
        </Select>
        <Select
          placeholder="Select priority"
          name="taskPriority"
          value={inputValues.taskPriority}
          onChange={handleInputChange}
        >
          {PRIORITIES.map((priority) => (
            <Select.Option key={priority} value={priority}>
              {priority}
            </Select.Option>
          ))}
        </Select>
        <Modal.Footer justify="flex-end">
          <Button onClick={handleCreateTask}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
