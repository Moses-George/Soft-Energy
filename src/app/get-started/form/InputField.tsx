import { firs_medium, firs_regular } from "@/utils/font";

interface inputType {
  data: {
    label: string;
    inputType: string;
    name: string;
  };
  value: string;
  onchange: any;
}

const InputField = ({ data, value, onchange }: inputType) => {
  return (
    <div>
      <p className={`${firs_medium.className}`}>{data.label}</p>
      <input
        className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${firs_regular.className} `}
        type={data.inputType}
        name={data.name}
        value={value}
        required
        onChange={onchange}
      />
    </div>
  );
};

export default InputField;
