# Globe-Data-Visualizer

### Core Programming Languages, Core Systems
![Java](https://img.shields.io/badge/Java-ED8B24?style=for-the-badge&logo=openjdk&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white) ![C](https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white) ![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

### Platform Support & Hardware Architecture
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black) ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) ![x86_64](https://img.shields.io/badge/Arch-x86__64-0052CC?style=for-the-badge&logo=cpu&logoColor=white) ![ARM64](https://img.shields.io/badge/Arch-ARM64-0091BD?style=for-the-badge&logo=arm&logoColor=white)

### Low-Level Infrastructure & Performance
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white) ![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white) ![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socketdotio&logoColor=white) ![SNMP](https://img.shields.io/badge/Protocol-SNMP-0052CC?style=for-the-badge&logo=wireshark&logoColor=white)

### Cybersecurity & Offensive Auditing
![Kali Linux](https://img.shields.io/badge/Kali_Linux-557C93?style=for-the-badge&logo=kalilinux&logoColor=white) ![Wireshark](https://img.shields.io/badge/Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white) ![OWASP](https://img.shields.io/badge/OWASP-000000?style=for-the-badge&logo=owasp&logoColor=white) ![Security Audit](https://img.shields.io/badge/Security-Audited-4CAF50?style=for-the-badge&logo=shield&logoColor=white)

### DevOps & Build Tools
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white) ![Apache Maven](https://img.shields.io/badge/Apache_Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

### Artificial Intelligence & Quantum
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white) ![Qiskit](https://img.shields.io/badge/Qiskit-6929C4?style=for-the-badge&logo=qiskit&logoColor=white) ![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)

### Cloud Providers
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white) ![Microsoft Azure](https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoftazure&logoColor=white) ![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)

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
