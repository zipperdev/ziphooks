import { useState } from "react";

export const useTabs = (intialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    };
    const [ currentIndex, setCurrentIndex ] = useState(intialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};