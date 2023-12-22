export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("ru-RU");
};

export const nextMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};
export const prevMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};
export const formatNumber = (number: number) => {
  return number.toLocaleString().replace(",", " ");
};
export const maskPhone = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  let formattedValue = "+7 ";
  for (let i = 2; i <= cleanedValue.length; i++) {
    console.log(i);
    if (i === 5) {
      formattedValue += " ";
    }
    if (i === 8 || i === 10) {
      formattedValue += "-";
    }
    formattedValue += cleanedValue.charAt(i - 1);
  }
  return formattedValue;
};
export const maskReplacePhone = (value: string) => {
  return value.replace(
    /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/,
    "+$1 $2 $3-$4-$5"
  );
};
