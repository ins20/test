export type ButtonType = {
  color?: "grey" | "green";
  variant?: "contained" | "outlined";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
