import React from "react";

const formatDateToInputValue = (date) => {
  if (!date) return "";
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const TaskForm = ({
  taskDetails,
  setTaskDetails,
  handleFormSubmit,
  onClose,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={taskDetails.title}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, title: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={taskDetails.description}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, description: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter description"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Due Date</label>
        <input
          min="2024-06-23"
          type="date"
          value={formatDateToInputValue(taskDetails.dueDate)}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, dueDate: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
