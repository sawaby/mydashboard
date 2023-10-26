"use client";

import Card from "@/components/card";
import { MdCheckCircle } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { GlobalContext } from "@/context";

export default function Tasks() {
  const {
    allTasks,
    setAllTasks,
    newTask,
    setNewTask,
    unassignedItems,
    setUnassignedItems
  } = useContext(GlobalContext);

  function handleAddNewTask(getCurrentTask) {
    setAllTasks([...allTasks, { title: getCurrentTask }]);
    setUnassignedItems([...unassignedItems, { title: getCurrentTask }]);
    localStorage.setItem(
      "allTasks",
      JSON.stringify([...allTasks, { title: getCurrentTask }])
    );
    localStorage.setItem(
      "unassignedItems",
      JSON.stringify([...unassignedItems, { title: getCurrentTask }])
    );
  }
  return (
    <div className="mt-5 rounded-[20px]">
      <Card additionalStyles={"pb-7 p-[20px]"}>
        <div className="relative flex flex-row justify-between">
          <div className="flex flex-1 items-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-zinc-500">
              <MdCheckCircle className="h-6 w-6 text-[#6cb4f1]" />
            </div>
            <h4 className="ml-4 text-xl text-zinc-700 dark:text-white">
              Tasks
            </h4>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex h-full items-center rounded-full bg-lightPrimary text-zinc-700 dark:bg-zinc-900 dark:text-white xl:w-[200px]">
              <input
                type="text"
                name="add-task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add New Task..."
                className="pl-3 block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-zinc-700 outline-none placeholder:!text-gray-400 dark:bg-zinc-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
              />
            </div>
            <FiPlus
              onClick={() => {
                setNewTask("");
                handleAddNewTask(newTask);
              }}
              className="h-5 w-5 cursor-pointer text-gray-400 dark:text-white "
            />
          </div>
        </div>
        <div className="h-full w-full">
          {allTasks.map((task, index) => (
            <Card  key={index}>
            <div
              className="mt-8 flex items-center justify-between p-8 rounded-md !bg-lightPrimary dark:!bg-zinc-700"
             
            >
              <div className="flex items-center justify-center gap-2">
                <p className="text-base font-bold text-zinc-700 dark:text-white ">
                  {task.title}
                </p>
              </div>
            </div>
            

            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
