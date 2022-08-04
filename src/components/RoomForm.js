import Modal from "react-modal";
Modal.setAppElement("#__next");

export function roomForm(props) {


	
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const { onSubmit, modalIsOpen } = props;
  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <div className="flex flex-col align-middle  space-y-2">
        <h3 className="text-lg text-center mb-2"> Add A Room</h3>
        <div className="flex justify-center w-full">
          <Button>
            <UploadIcon className="h-5 w-5" />
            <h3 className="text-sm"> Upload Image</h3>
          </Button>
        </div>
        <label className="font-semibold"> Building</label>
        <select className="border-2 rounded-md p-2 text-gray-400">
          <option> Building </option>
        </select>

        <label className="font-semibold"> Room Number</label>
        <input
          className="border-2 rounded-md p-2"
          type="text"
          placeholder="Room Number"
        />
        <label className="font-semibold"> Capacity </label>
      </div>
      <div className="flex justify-center w-full"></div>
    </Modal>
  );
}
