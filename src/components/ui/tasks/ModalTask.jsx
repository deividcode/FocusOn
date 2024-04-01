import { Fragment, useState, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { FormInput } from "../form/FormInput";
import { TaskContext } from "../../../context/GlobalProvider";

export const ModalTask = ({ isOpen, setIsOpen, openModal, closeModal }) => {
  const { addTask } = useContext(TaskContext);

  const [nameTask, setNameTask] = useState("");
  const [description, setDescription] = useState("");
  const [amountPomodoros, setAmountPomodoros] = useState(0)

  const [disabledButton, setDisabledButton] = useState(true)

  useEffect(() => {
   nameTask !== "" ? setDisabledButton(false) : setDisabledButton(true)      
  }, [nameTask])
  

  const handleSubmit = (e) => {
    e.preventDefault();   
    addTask({
      id: crypto.randomUUID(),
      name: nameTask,
      description: description,
      amountPomodoros,
      status: false
    });

    setNameTask("");
    setDescription("");
    setAmountPomodoros(0)
  };

  return (
    <>     
      {/* Modal Form Create Task */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 text-gray-900 dark:text-white" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-[#121212] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"                  
                    className="text-lg font-medium leading-6"
                  >
                    Create Task
                  </Dialog.Title>
                  <form className="mt-2" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <FormInput
                          type="text"
                          name="name-tasks"
                          id="name-tasks"
                          required
                          placeholder="Name Tasks"
                          value={nameTask}
                          onChange={(e) => setNameTask(e.target.value)}
                        />
                      </div>

                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <FormInput
                          type="text"
                          name="description-tasks"
                          id="description-tasks"
                          placeholder="Description Tasks"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div>
                        <p className="text-md font-medium leading-6 ">Pomodoro</p>
                        <div className="flex gap-3 items-center mt-3">
                           <select 
                              className="text-lg p-1 dark:bg-dark-color"
                              value={amountPomodoros}
                              onChange={(e) => setAmountPomodoros(e.target.value)}
                              >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                           </select>
                           <svg className="w-6 fill-electric-violet-500" width="800px" height="auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>tomato</title>
                              <path d="M13,2a11.32,11.32,0,0,0-1,2c-.12.33-.22.66-.31,1C11.07,3.26,8.19,3.54,7,3c0,3.38,3.52,2.21,4.25,2.72C8.42,5.48,7.39,7.39,6,8c3.1,1.57,5,.06,5.72-1.84-.11.74-.65,4.92,2.28,4.84a8.14,8.14,0,0,0-1.31-4.91h.06C14,7.59,15.94,9.3,18,8a7.19,7.19,0,0,0-3.75-2.06C15.84,6,16.91,6.13,18,4a8.42,8.42,0,0,0-4.69,1c.47-.8,1.18-2,1.69-3ZM7,5c-3.91.89-5,4.23-5,8C2,18,6.47,22,12,22c4.89,0,10-2.84,10-10,0-3-1.17-6-4-7a1.88,1.88,0,0,1-1,1c.54.19,1.42,1.39,2,2-.31.81-1.8,1.52-4.34,1a9.86,9.86,0,0,1,0,3,4.07,4.07,0,0,1-4-3C8.25,10.5,4.93,8.68,5,8c.88-.61,2-1.83,3-2A2.82,2.82,0,0,1,7,5Z"/>
                              <rect width="24" height="24" fill="none"/>
                           </svg>
                        </div>
                      </div>
                    </div>
                    <button
                      className="w-full px-5 py-3 mt-8 text-sm text-electric-50 font-semibold rounded-md text-electric-violet-50 bg-electric-violet-500"
                      type="submit"
                      disabled={disabledButton ? true : false}
                      onClick={closeModal}
                    >
                      Create Task
                    </button>
                  </form>                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
