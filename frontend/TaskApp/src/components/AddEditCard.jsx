import React, { useEffect, useState } from "react";
import TaskForm from './TaskForm';

const AddEditCard = ({ isOpen, onClose, onSave, task }) => {
  if (!isOpen) return null;
  const [taskDetails, setTaskDetails] = useState({ title: "", description: "", dueDate: "" });

  useEffect(() => {
    if (task) {
      setTaskDetails(task);
    }
  }, [task]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSave(taskDetails);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl text-primary text-center font-bold mb-4">Add Task</h2>
        <TaskForm taskDetails={taskDetails} setTaskDetails={setTaskDetails} handleFormSubmit={handleFormSubmit} onClose={onClose} />
      </div>
    </div>
  );
};

export default AddEditCard;
