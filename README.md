# Globe-Data-Visualizer

A real-time, 3D network topology and bandwidth monitoring tool. It ingests simulated NetFlow/sFlow and SNMP metrics, resolves IP geolocation via MaxMind, and streams the data via WebSockets to a transparent Three.js WebGL globe.

## Tech Stack
* **Backend:** Java 17, Spring Boot, WebSockets, Redis
* **Frontend:** React 18, Three.js, React-Force-Graph-3D
* **Deployment:** Docker, Docker Compose

## Getting Started

1. Clone the repository.
2. Copy `.env.example` to `.env`.
3. Download the MaxMind GeoLite2-City.mmdb file and place it in `backend/src/main/resources/data/geoip/`.
4. Run the stack:
   ```bash
   docker-compose up --build
