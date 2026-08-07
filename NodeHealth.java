package com.visualizer.model;

public class NodeHealth {
    private String ipAddress;
    private double cpuUtilization;
    private double memoryUtilization;
    private boolean isOnline;

    public NodeHealth(String ipAddress, double cpuUtilization, double memoryUtilization, boolean isOnline) {
        this.ipAddress = ipAddress;
        this.cpuUtilization = cpuUtilization;
        this.memoryUtilization = memoryUtilization;
        this.isOnline = isOnline;
    }

    // Getters and Setters
    public String getIpAddress() { return ipAddress; }
    public double getCpuUtilization() { return cpuUtilization; }
    public double getMemoryUtilization() { return memoryUtilization; }
    public boolean isOnline() { return isOnline; }
}
