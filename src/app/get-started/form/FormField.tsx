"use client";

import useForm from "@/hooks/useForm";
import CheckboxInput from "./CheckboxInput";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import { useEffect, useState } from "react";
import { useSendFormMutation } from "@/store/api/formApi";
import { validator } from "@/utils/validator";
import { toast } from "react-toastify";
import { firs_regular } from "@/utils/font";
import { PulseLoader } from "react-spinners";

const inputFieldData = [
  {
    label: "*First Name*",
    inputType: "text",
    name: "first_name",
  },
  {
    label: "*Last Name*",
    inputType: "text",
    name: "last_name",
  },
  {
    label: "*Phone*",
    inputType: "number",
    name: "phone",
  },
];

const selectInputData = [
  {
    label: "What do you want Solar for?",
    // name: "",
    name: "solar_need",
    options: [
      {
        value: "Re",
        name: "Residential",
      },
      {
        value: "Ind",
        name: "Industrial",
      },
      {
        value: "Com",
        name: "commercial",
      },
    ],
  },
  {
    label: "Occupation",
    name: "occupation",
    options: [
      {
        value: "Cs",
        name: "Civil servant",
      },
      {
        value: "Eng",
        name: "Engineer",
      },
      {
        value: "Gem",
        name: "Geomatician",
      },
    ],
  },
  {
    label: "Payment plan Duration",
    name: "payment_plan",
    options: [
      {
        value: "3",
        name: "3 Month",
      },
      {
        value: "4",
        name: "4 Month",
      },
      {
        value: "8",
        name: "8 Month",
      },
    ],
  },
  {
    label: "Energy Needs",
    name: "energy_needs",
    options: [
      {
        value: "E1",
        name: "Low 1-3(kw)",
      },
      {
        value: "E2",
        name: "High 1-8(kw)",
      },
      {
        value: "E3",
        name: "Low 1-2(kw)",
      },
    ],
  },
];

const checkboxInputDaysData = [
  {
    name: "Monday",
    id: "mon-checkbox",
  },
  {
    name: "Tuesday",
    id: "tue-checkbox",
  },
  {
    name: "Wednesday",
    id: "wed-checkbox",
  },
  {
    name: "Thursday",
    id: "thu-checkbox",
  },
  {
    name: "Friday",
    id: "fri-checkbox",
  },
  {
    name: "Saturday",
    id: "sat-checkbox",
  },
  {
    name: "Sunday",
    id: "sun-checkbox",
  },
];

const checkboxInputTimeData = [
  {
    name: "Morning (9am-12pm)",
    id: "t1",
  },
  {
    name: "Afternoon (12pm-3pm)",
    id: "t2",
  },
  {
    name: "Evening (3pm-6pm)",
    id: "t3",
  },
];

const InitialData = {
  first_name: "",
  last_name: "",
  phone: "",
  solar_need: "",
  occupation: "",
  payment_plan: "",
  energy_needs: "",
};

const FormField = () => {
  const { formData, handleChange, setFormData } = useForm(InitialData);
  const [checkedDays, setCheckedDays] = useState<string[]>([]);
  const [checkedTime, setCheckedTime] = useState<string[]>([]);

  // Function to handle checkbox change
  const handleDaysCheckboxChange = (value: string) => {
    // Update the checkedItems array based on the checkbox state
    if (!checkedDays.includes(value)) {
      setCheckedDays([...checkedDays, value]);
      // setSelectedIds([...selectedIds, value]);
    } else {
      setCheckedDays(checkedDays.filter((item) => item !== value));
    }
  };

  // Function to handle checkbox change
  const handleTimeCheckboxChange = (value: string) => {
    // Update the checkedItems array based on the checkbox state
    if (!checkedTime.includes(value)) {
      setCheckedTime([...checkedTime, value]);
      // setSelectedIds([...selectedIds, value]);
    } else {
      setCheckedTime(checkedTime.filter((item) => item !== value));
    }
  };

  const [sendForm, { isLoading, isSuccess, error, data }] =
    useSendFormMutation();

  const submitForm = async () => {
    const payload = { form: formData, days: checkedDays, time: checkedTime };
    console.log(payload);
    const daysIsValid = checkedDays.length >= 1;
    const timeIsValid = checkedTime.length >= 1;
    const fieldIsValid = validator.hasNonEmptyValues(formData);
    if (!fieldIsValid) {
      return toast.error("Enter all fields", {
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
    if (fieldIsValid && (!daysIsValid || !timeIsValid)) {
      return toast.error("Select at least one day and time", {
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
    await sendForm(payload);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message, {
        autoClose: 5000,
        hideProgressBar: true,
      });
      setFormData(InitialData);
      setCheckedDays([]);
      setCheckedTime([]);
    }
  }, [isSuccess]);

  return (
    <section className="bg-[#7BECAB2E] opacity-[18] px-4 lg:px-8 py-12">
      <form
        action=""
        className="bg-white rounded-lg space-y-8 px-4 lg:pl-12 py-12 lg:pr-28"
      >
        <h1>Please enter the following Information</h1>
        <h1 className="font-medium">Personal Iformation</h1>
        <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-8 gap-y-6 lg:gap-y-0">
          {inputFieldData.map((data, id) => (
            <InputField
              data={data}
              value={formData[data.name as keyof typeof formData]}
              onchange={handleChange}
              key={id}
            />
          ))}
        </div>
        <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] items-center gap-x-8 gap-y-6">
          {selectInputData.map((data, id) => (
            <SelectInput
              key={id}
              data={data}
              name={data.name}
              value={formData[data.name as keyof typeof formData]}
              onchange={handleChange}
            />
          ))}
        </div>
        <div className="space-y-4">
          <h1 className="font-medium">Best time to Schedule a Call</h1>
          <div className="grid grid-cols-2 lg:flex gap-x-4 lg:gap-x-12">
            <div className="space-y-6">
              <h1 className="font-semibold">*Days*</h1>
              {checkboxInputDaysData.map((data) => (
                <CheckboxInput
                  data={data}
                  value={data.name}
                  checked={checkedDays.includes(data.name)}
                  onchange={() => handleDaysCheckboxChange(data.name)}
                />
              ))}
            </div>
            <div className="space-y-4">
              <h1 className="font-semibold">*Time*</h1>
              {checkboxInputTimeData.map((data) => (
                <CheckboxInput
                  data={data}
                  value={data.name}
                  checked={checkedTime.includes(data.name)}
                  onchange={() => handleTimeCheckboxChange(data.name)}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={submitForm}
          type="button"
          className={`flex gap-2 items-center bg-[#074942] b-0 px-12 text-white rounded-lg py-2 ${firs_regular.className} `}
        >
          <span className="">{isLoading ? "Submitting" : "Submit"}</span>
          {isLoading && <PulseLoader color="#ccc" size={6} className="" />}
        </button>
      </form>
    </section>
  );
};

export default FormField;
