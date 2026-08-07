// src/components/MetricsOverlay.js
import React from 'react';

export default function MetricsOverlay({ alerts }) {
    return (
        <div style={{
            position: 'absolute',
            top: 20,
            left: 20,
            color: '#00ffcc',
            fontFamily: 'monospace',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '15px',
            borderRadius: '5px',
            pointerEvents: 'none' // Click through to the 3D globe
        }}>
            <h3>Live Bandwidth Alerts</h3>
            <ul>
                {alerts.map((alert, idx) => (
                    <li key={idx}>
                        {alert.source} -> {alert.target} : {alert.bandwidth}
                    </li>
                ))}
            </ul>
        </div>
    );
}
