package com.visualizer.service;

import com.visualizer.handler.TopologyWebSocketHandler;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class FlowParserService {
    
    // Simulates reading live traffic flows every 2 seconds
    @Scheduled(fixedRate = 2000)
    public void ingestTrafficData() {
        try {
            // Placeholder: Construct JSON from real MaxMind IP data and SNMP metrics
            String mockTrafficJson = "{\"source\": \"New York\", \"target\": \"London\", \"bandwidth\": \"850Mbps\", \"status\": \"warning\"}";
            TopologyWebSocketHandler.broadcastUpdate(mockTrafficJson);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
