package com.visualizer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GlobeDataVisualizerApplication {
    public static void main(String[] args) {
        SpringApplication.run(GlobeDataVisualizerApplication.class, args);
        System.out.println("Globe-Data-Visualizer Backend is running...");
    }
}
