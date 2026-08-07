package com.visualizer.controller;

import com.visualizer.model.NetworkLink;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/topology")
public class TopologyController {

    @GetMapping("/snapshot")
    public List<NetworkLink> getInitialTopology() {
        // Placeholder: Fetch the last known stable state from Redis or memory cache
        return Collections.emptyList();
    }
}
