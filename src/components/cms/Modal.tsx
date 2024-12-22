import { FC } from "react";
import Button from "./Button";
import Modal from "react-modal";

interface ConfirmationModalProps {
  types: "update" | "delete";
  isOpen: boolean;
  title: string;
  children: string;
  onRequestClose: () => void;
  onSubmitData?: () => void;
  onDeleteData?: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({ types, isOpen, title, children, onRequestClose, onSubmitData, onDeleteData }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={"custom-modal"} ariaHideApp={false}>
      <h2 className="font-bold mb-2">{title}</h2>
      <hr />
      <p className="mt-2">{children}</p>
      <div className="absolute bottom-0 right-0 mr-4 mb-4">
        <div className="flex justify-end gap-x-2 ">
          <Button variant="secondary" onClick={onRequestClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={types === "update" ? onSubmitData : onDeleteData}>
            {types === "update" ? "Update" : "Delete"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
