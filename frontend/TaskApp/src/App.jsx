import { React, useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from "axios";

import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
import AddEditCard from "./components/AddEditCard";

const App = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskItems, setTaskItems] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    axios
      .get("/api/tasks")
      .then((res) => {
        setTaskItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchTask = (search) => {
    axios
      .get(`/api/tasks?search=${search}`)
      .then((res) => setTaskItems(res.data))
      .catch((err) => console.log(err));
  };
  const addTask = (taskDetails) => {
    axios
      .post("/api/tasks", taskDetails)
      .then((res) => setTaskItems([...taskItems, res.data]))
      .catch((err) => console.log(err));
  };

  const removeTask = (id) => {
    axios
      .delete(`/api/tasks/${id}`)
      .then(() => setTaskItems(taskItems.filter((task) => task._id !== id)))
      .catch((err) => console.log(err));
  };

  const editTask = (id, taskDetails) => {
    axios
      .put(`/api/tasks/${id}`, taskDetails)
      .then((res) =>
        setTaskItems(
          taskItems.map((task) => (task._id === id ? res.data : task))
        )
      )
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar search={search} setSearch={setSearch} searchTask={searchTask} />
      <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {taskItems.length === 0 ? (
          <div className="text-center col-span-3">No tasks found</div>
        ) : (
          taskItems.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              removeTask={removeTask}
              onEdit={() => {
                setCurrentTask(task);
                setIsModalOpen(true);
              }}
            />
          ))
        )}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col items-center shadow-lg text-gray-600 border-2  bg-white rounded-2xl p-2 fixed right-10 bottom-10 hover:bg-blue-500 hover:text-white"
        >
          <IoIosAddCircleOutline className=" text-5xl " />
          Add Tasks
        </button>
        <AddEditCard
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={(taskDetails) => {
            if (currentTask) {
              editTask(currentTask._id, taskDetails);
            } else {
              addTask(taskDetails);
            }
            setCurrentTask(null);
            setIsModalOpen(false);
          }}
          task={currentTask}
        />
      </div>
    </>
  );
};

export default App;
