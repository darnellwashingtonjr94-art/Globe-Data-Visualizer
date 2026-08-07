import React, { useState } from 'react';
import GlobeEngine from './components/GlobeEngine';
import MetricsOverlay from './components/MetricsOverlay';
import './App.css';

function App() {
    const [liveAlerts, setLiveAlerts] = useState([]);

    // Callback to pass to GlobeEngine or a higher-level state manager 
    // to capture critical links for the HUD
    const handleNewAlert = (alert) => {
        setLiveAlerts((prev) => [alert, ...prev].slice(0, 5)); // Keep latest 5 alerts
    };

    return (
        <div className="App">
            <MetricsOverlay alerts={liveAlerts} />
            <GlobeEngine onAlert={handleNewAlert} />
        </div>
    );
}

export default App;
