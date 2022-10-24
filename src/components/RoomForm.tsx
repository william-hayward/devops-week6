import {CloudUploadIcon} from "@heroicons/react/outline";
import {buildings} from "../mocks/data";

export default function RoomForm() {
  return (
    <form>
      <div className="flex flex-col align-middle  space-y-2">
        <a className="gray-outline-button">
          <CloudUploadIcon className="h-5 w-5" /> Add Room Photos
        </a>
        <label className="font-semibold"> Building</label>
        <>
          {buildings.map((b, i) => (
            <div key={i} className="flex space-x-2">
              <input type="checkbox" value={b.code} name="building"></input>
              <label className="text-sm">
                {b.name} ({b.code})
              </label>
            </div>
          ))}
        </>

        <label className="font-semibold"> Room Number</label>
        <input
          className="border-2 rounded-md p-2"
          type="text"
          placeholder="Room Number"
        />
        <label className="font-semibold"> Capacity </label>
        <input
          className="border-2 rounded-md p-2"
          type="number"
          placeholder="Capacity"
        />
      </div>

      <div className="flex justify-center w-full mt-3">
        <div>
          <button className="blue-button_no-icon ">Add Room</button>
        </div>
      </div>
    </form>
  );
}
