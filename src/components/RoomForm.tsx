import {CloudUploadIcon} from "@heroicons/react/outline";
import {SubmitHandler, useForm} from "react-hook-form";
import {buildings} from "../mocks/data";

export interface RoomFormProps {
  onSubmit: SubmitHandler<RoomValues>;
}

export interface RoomValues {
  number: string;
  building: string;
  capacity: number;
  notes?: string;
  type: string;
}

export default function RoomForm(props: RoomFormProps) {
  const {onSubmit} = props;

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<RoomValues>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col align-middle  space-y-2">
        <a className="gray-outline-button">
          <CloudUploadIcon className="h-5 w-5" /> Add Room Photos
        </a>
        <label className="font-semibold"> Building</label>
        <>
          {buildings.map((b, i) => (
            <div key={i} className="flex space-x-2">
              <input
                {...register("building", {required: true})}
                type="checkbox"
                value={b.code}
                name="building"
              ></input>
              <label className="text-sm">
                {b.name} ({b.code})
              </label>
            </div>
          ))}
        </>

        <h3 className="font-bold text-red-600">
          {errors.building && <span> A valid building is required</span>}
        </h3>

        <label className="font-semibold"> Room Number</label>
        <input
          className="border-2 rounded-md p-2"
          type="text"
          placeholder="Room Number"
          {...register("number", {required: true})}
        />
        <h3 className="font-bold text-red-600">
          {errors.number && <span> Room number is required</span>}
        </h3>
        <label className="font-semibold"> Capacity </label>
        <input
          className="border-2 rounded-md p-2"
          type="number"
          placeholder="Capacity"
          {...register("capacity", {required: true, min: 5, max: 50})}
        />
        <h3 className="font-bold text-red-600">
          {errors.capacity && <span> Capacity is required</span>}
        </h3>
      </div>

      <div className="flex justify-center w-full mt-3">
        <div>
          <button className="blue-button_no-icon">Add Room</button>
        </div>
      </div>
    </form>
  );
}
