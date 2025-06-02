# TrafficX

[![GitHub stars](https://img.shields.io/github/stars/notsopreety/trafficx.svg)](https://github.com/notsopreety/trafficx/stargazers)
[![License](https://img.shields.io/github/license/notsopreety/trafficx.svg)](https://github.com/notsopreety/trafficx/blob/main/LICENSE)

A powerful Node.js tool for simulating realistic website traffic with multiple user agents and device viewports.

## Features

- 🔄 Simulates real user traffic with rotating user agents
- 📱 Multiple viewport sizes (desktop, tablet, mobile)
- 🕒 Configurable delay between visits
- 🧹 Automatic cookie and cache clearing
- 📊 Supports various device profiles
- 🚀 Built with Puppeteer for reliable browser automation

## Prerequisites

- Node.js
- npm or yarn package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/notsopreety/trafficx.git

# Navigate to project directory
cd trafficx

# Install dependencies
npm install
```

## Configuration

Edit `main.js` to configure:
- `targetUrl`: Your target website URL
- `totalVisits`: Number of visits to simulate
- `delayBetweenVisits`: Delay between each visit (in milliseconds)

## Usage

```bash
node main.js
```

## Viewport Configurations

TrafficX supports multiple viewport sizes to simulate different devices:
- Desktop Full HD (1920x1080)
- Laptop (1366x768)
- MacBook Pro 15" (1440x900)
- Various mobile devices (iPhone, Android)
- Tablet sizes (iPad portrait/landscape)
- And more...

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Disclaimer

This tool is for testing purposes only. Make sure you have permission to test on the target website. Misuse of this tool may violate websites' terms of service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

[notsopreety](https://github.com/notsopreety)

---
⭐ Star this repository if you find it helpful!