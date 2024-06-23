import React from "react";
import { MdOutlinePushPin, MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const TaskCard = ({
  task: { title, description, dueDate, _id },
  removeTask,
  onEdit,
}) => (
  <>
    <div className="flex flex-col overflow-auto h-[200px]    bg-white shadow-lg p-4 rounded-lg hover:bg-slate-50 cursor-default  ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-700 font-bold">Title: {title}</h2>
        <div className="flex items-center">
          <button
            className="text-gray-500 hover:text-gray-600"
            aria-label="Pin Task"
          >
            <MdOutlinePushPin />
          </button>
        </div>
      </div>
      <p className="text-gray-600 text-md mt-2 overflow-auto">Description: {description}</p>
      <p className="text-gray-600 text-md mt-2">Due Date: {formatDate(dueDate)} </p>
      <div className="flex justify-end gap-4 text-lg">
        <CiEdit onClick={onEdit} className=" hover:text-primary cursor-pointer"/>
        <MdDeleteOutline onClick={() => removeTask(_id)} className="hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  </>
);

export default TaskCard;
