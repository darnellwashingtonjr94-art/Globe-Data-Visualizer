// src/components/GlobeEngine.js
import React, { useEffect, useRef, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { TopologyWebSocket } from '../network/wsClient';

export default function GlobeEngine() {
    const graphRef = useRef();
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });

    useEffect(() => {
        // Connect to Spring Boot WebSocket
        new TopologyWebSocket('ws://localhost:8080/ws/topology', (newData) => {
            console.log("New Flow:", newData);
            // Logic to append newData to graphData state goes here
        });
    }, []);

    return (
        <ForceGraph3D
            ref={graphRef}
            graphData={graphData}
            nodeColor={() => 'rgba(0, 255, 255, 0.8)'}
            linkColor={(link) => link.status === 'warning' ? 'yellow' : 'green'}
            backgroundColor="#000011"
        />
    );
}
