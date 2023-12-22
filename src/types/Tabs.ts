export type NavTabsType = {
  items: string[];
  active: string;
  toggle: (label: string) => void;
  activeColor: "green" | "blue";
  variant: "large" | "small";
};

export type TabsType = {
  [key: string]: JSX.Element;
};
