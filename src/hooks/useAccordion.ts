import { useState } from "react";

const useAccordion = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!isOpen);
  };

  return {
    isOpen,
    toggleAccordion,
  };
};
export default useAccordion;
