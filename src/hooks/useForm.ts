import { ChangeEvent, useState } from "react";

const useForm = <IData>(InitialData: IData) => {
  const [formData, setFormData] = useState<IData>(InitialData);
  const [mediaPreview, setMediaPreview] = useState("");

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = event?.target;
    const files = (<HTMLInputElement>event.target).files;

    if (type === "file") {
      if (files) {
        setFormData((prevState) => {
          return { ...prevState, media: files[0] };
        });
        setMediaPreview(window.URL.createObjectURL(files[0]));
      }
    } else {
      setFormData((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
  };

  return { mediaPreview, setMediaPreview, formData, setFormData, handleChange };
};

export default useForm;
