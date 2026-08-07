package com.visualizer.model;

public class NetworkLink {
    private String sourceId;
    private String targetId;
    private double sourceLat;
    private double sourceLng;
    private double targetLat;
    private double targetLng;
    private long bandwidthUsed;
    private String status;

    public NetworkLink(String sourceId, String targetId, double sLat, double sLng, double tLat, double tLng, long bw, String status) {
        this.sourceId = sourceId;
        this.targetId = targetId;
        this.sourceLat = sLat;
        this.sourceLng = sLng;
        this.targetLat = tLat;
        this.targetLng = tLng;
        this.bandwidthUsed = bw;
        this.status = status;
    }

    // Getters and Setters omitted for brevity
}
