import { TbXboxX } from "react-icons/tb";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../context/ModalContext";
import Input from "./Input";
import Validation from "./Validation";
import { CiImageOn } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../services/apiQuery";

function Modal() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const [image, setImage] = useState(null);

  const departmentsQuery = useQuery({
    queryKey: ["departments"],
    queryFn: () => getDepartments(),
  });

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    console.log(file);
    const reader = new FileReader();
    reader.onload = function (e) {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
  function handleClose() {
    setIsModalOpen(!isModalOpen);
    setImage(null);
  }

  if (!isModalOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-black/20 flex items-center justify-center z-50 backdrop-blur-[3px]">
      <div className="flex w-3/5 justify-center flex-col gap-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex w-full justify-end">
          <button onClick={() => handleClose()}>
            <TbXboxX className="size-8 text-gray-400" />
          </button>
        </div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-extrabold">თანამშრომლის დამატება</h1>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Input text="სახელი">
            <input
              type="text"
              className="w-full text-sm focus:border-2 bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2flex justify-between items-center px-4 py-3"
            />
            <Validation customClassName="flex flex-col mt-1" />
          </Input>
          <Input text="გვარი">
            <input
              type="text"
              className="w-full text-sm focus:border-2 bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2flex justify-between items-center px-4 py-3"
            />
            <Validation customClassName="flex flex-col mt-1" />
          </Input>
        </div>

        <div
          className="w-full mx-auto  border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer h-32"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          {image ? (
            <div className="relative">
              <img
                src={image}
                className="w-20 h-20 mb-1 rounded-full object-cover object-center"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImage(null);
                }}
                className="absolute -bottom-0.5 -right-0.5 bg-white p-1 rounded-full shadow hover:bg-gray-200 duration-200 ease-in-out"
              >
                <RiDeleteBin6Line className="text-gray-400" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-gray-500">
              <CiImageOn className="w-8 h-8 mb-1" />
              <p className="text-sm">ატვირთე ფოტო</p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Input text="დეპარტამენტი">
            <Dropdown data={departmentsQuery.data} />
          </Input>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="secondary">გაუქმება</Button>
          <Button>დაამატე თანამშრომელი</Button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
