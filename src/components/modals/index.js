"use client";

import { GlobalContext, initialReportFormData } from "@/context";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function CommonModal() {
  const [openModal, setOpenModal] = useState(false);
  const { allTasks, reportFormData, setReportFormData, allReportsData, setAllReportsData } = useContext(GlobalContext);

  const formControls = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter report name",
      component: "input",
      options: [],
    },
    {
      name: "visitors",
      type: "number",
      placeholder: "Enter visitors count",
      component: "input",
      options: [],
    },
    {
      name: "sales",
      type: "number",
      placeholder: "Enter number of sales",
      component: "input",
      options: [],
    },
    {
      name: "revenue",
      type: "number",
      placeholder: "Enter revenue",
      component: "input",
      options: [],
    },
    {
      name: "task",
      type: "",
      placeholder: "Select task",
      component: "select",
      options:
        allTasks && allTasks.length
          ? allTasks.map((item) => ({
              label: item.title,
              value: item.title,
            }))
          : [],
    },
  ];

    function handleAddNewReport(){
        let copyAllReportsData =  [...allReportsData];
        copyAllReportsData.push({
            id: allReportsData.length + 1,
            ...reportFormData,
        });
        setAllReportsData(copyAllReportsData);
        setReportFormData(initialReportFormData);
        setOpenModal(false);
        localStorage.setItem('allReportsData', JSON.stringify(copyAllReportsData));
    }

  return (
    <div >
      <FiPlus
        onClick={() => setOpenModal(true)}
        
        className="h-4 w-4 cursor-pointer text-gray-400 dark:text-white"
      />
      
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogContent className=" bg-zinc-400 dark:bg-zinc-700">
          <span className="flex justify-center">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a new report</h3>
          </span>
          <div className="flex flex-col gap-5 m-19" >
            {formControls.map((control, index) =>
              control.component === "input" ? (
                <div key={index} className="flex h-[40px]  rounded-md items-center bg-lightPrimary text-gray-800 dark:bg-zinc-900 dark:text-white">
                  <input
                    
                    name={control.name}
                    value={reportFormData[control.name]}
                    onChange={(e) => setReportFormData({
                        ...reportFormData, [control.name] : e.target.value
                    })}
                    placeholder={control.placeholder}
                    type={control.type}
                    className="pl-3 block h-full !w-[280px] rounded-md bg-lightPrimary text-sm font-medium text-gray-800 outline-none placeholder:!text-gray-400 dark:!bg-zinc-900 dark:text-white dark:placeholder:!text-white"
                  />
                </div>
              ) : (
                <div  key={index} className="flex h-[40px]  rounded-md items-center bg-lightPrimary text-gray-800 dark:bg-zinc-900 dark:text-white">
                  <select
                    
                    name={control.name}
                    value={reportFormData[control.name]}
                    onChange={(e) => setReportFormData({
                        ...reportFormData, [control.name] : e.target.value
                    })}
                    placeholder={control.placeholder}
                    className="pl-3 block h-full !w-[280px] rounded-md bg-lightPrimary text-sm font-medium text-gray-800 outline-none placeholder:!text-gray-400 dark:!bg-zinc-900 dark:text-white dark:placeholder:!text-white "
                  >
                    <option id="" value={""}>Select</option>
                      {control.options && control.options.length
                        ? control.options.map((optionItem, index) => (
                            <option key={index} id={optionItem.id} value={optionItem.value}>
                              {optionItem.label}
                            </option>
                          ))
                        : null}
                    
                  </select>
                </div>
              )
            )}
          </div>
        </DialogContent>
        <DialogActions className="flex items-center !justify-center bg-zinc-400 dark:bg-zinc-700">
            <button onClick={handleAddNewReport} className="border w-[280px] rounded-[20px] text-lg px-12 py-3 bg-white text-gray-900 dark:text-white dark:bg-zinc-800">
                Add
            </button>
        </DialogActions>
      </Dialog> 
    </div>
  );
}
