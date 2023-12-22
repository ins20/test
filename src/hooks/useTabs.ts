import { TabsType } from "@/types/Tabs";
import { useState } from "react";
const useTabs = (tabs: TabsType) => {
  const [activeTab, setActiveTab] = useState(Object.values(tabs)[0]);
  const [activeTabLabel, setActiveTabLabel] = useState(Object.keys(tabs)[0]);

  const toggleTab = (label: string) => {
    setActiveTab(tabs[label]);
    setActiveTabLabel(label);
  };

  return { toggleTab, activeTab, tabs: Object.keys(tabs), activeTabLabel };
};

export default useTabs;
