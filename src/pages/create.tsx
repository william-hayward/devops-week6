import BreadCrumb from "../components/BreadCrumb";
import RoomForm from "../components/RoomForm";
// import {useMutation} from "react-query";
// import axios from "axios";

export default function Create() {
  // const {isLoading, mutate} = useMutation((room) => {
  //   return axios.post("/api/rooms/", room);
  // });

  return (
    <div className="max-w-[80%] mx-auto mt-11">
      <BreadCrumb label={"Add Room"} />
      <div className="bg-white mx-auto mt-11 p-5 rounded-lg shadow-md">
        <h3 className="text-lg text-center mb-2"> Add A Room</h3>
        <RoomForm isLoading={true} onSubmit={(data) => console.log(data)} />
      </div>
    </div>
  );
}
