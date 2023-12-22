import { useState, useEffect } from "react";
import { maskPhone, maskReplacePhone } from "@/utils/helpers";

const useInput = (defaultValue?: string, type?: string) => {
  const [value, setValue] = useState(defaultValue ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (type === "tel") {
      setValue(maskPhone(value));
    } else {
      setValue(value);
    }
  };

  useEffect(() => {
    if (type === "tel" && defaultValue) {
      setValue(maskReplacePhone(defaultValue));
    }
  }, [type, defaultValue]);

  return {
    value,
    handleChange,
  };
};
export default useInput;
