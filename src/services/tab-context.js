import { createContext, useState } from "react"

export const tabContext = createContext('');

const ContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(2);
    const value = {
        activeTab,
        changeActiveTab: (id) => setActiveTab(id)
    }
    return (
        <tabContext.Provider value={value}>
            {children}
        </tabContext.Provider>
    )
}

export default ContextProvider;