package com.visualizer.engine;

import com.visualizer.model.NetworkLink;
import com.visualizer.service.GeoResolverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TopologyEngine {

    @Autowired
    private GeoResolverService geoResolver;

    public NetworkLink processFlow(String sourceIp, String targetIp, long bytes) {
        double[] sourceCoords = geoResolver.resolveIpToCoordinates(sourceIp);
        double[] targetCoords = geoResolver.resolveIpToCoordinates(targetIp);
        
        // Calculate saturation and determine link status
        String status = (bytes > 1000000) ? "critical" : "normal";
        
        return new NetworkLink(
                sourceIp, targetIp, 
                sourceCoords[0], sourceCoords[1], 
                targetCoords[0], targetCoords[1], 
                bytes, status
        );
    }
}
