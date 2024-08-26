import { firs_medium, firs_regular } from "@/utils/font";

interface selectInputType {
  name: string;
  value: string;
  onchange: any;
  data: {
    label: string;
    options: {
      value: string;
      name: string;
    }[];
  };
}

const SelectInput = ({ data, name, value, onchange }: selectInputType) => {
  return (
    <div className="">
      <label
        htmlFor="question"
        className={`block mb-2 text-sm text-gray-900  ${firs_medium.className} `} 
      >
        {data.label}
      </label>
      <select
        id="countries"
        name={name}
        value={value}
        onChange={onchange}
        required
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${firs_regular.className}`}
      >
        <option selected>Choose a country</option>
        {data.options.map((data, id) => (
          <option key={id} value={data.value}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
