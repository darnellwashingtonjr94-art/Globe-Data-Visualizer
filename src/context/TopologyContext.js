import React, { createContext, useState, useContext } from 'react';

const TopologyContext = createContext();

export function TopologyProvider({ children }) {
    const [nodes, setNodes] = useState([]);
    const [links, setLinks] = useState([]);

    const addLink = (newLink) => {
        setLinks((prevLinks) => [...prevLinks, newLink]);
    };

    return (
        <TopologyContext.Provider value={{ nodes, links, addLink }}>
            {children}
        </TopologyContext.Provider>
    );
}

export function useTopology() {
    return useContext(TopologyContext);
}
