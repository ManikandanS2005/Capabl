# Weather Application Dashboard

## Project Overview
The **Weather Application Dashboard** is an interactive web application designed to provide real-time weather data for cities around the globe. It fetches weather information from the OpenWeatherMap API and presents it with engaging visualizations and an intuitive user interface. The dashboard allows users to view current weather conditions and a 5-day forecast, making it a handy tool for weather insights.

---

## Features

1. **API Integration**:
   - Fetch real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api).

2. **Interactive Visualizations**:
   - Display weather data with dynamic and user-friendly visual elements.
   - Include weather icons and concise descriptions for better understanding.

3. **User Interaction**:
   - Search for weather information by entering a city name.
   - View current weather, including temperature, humidity, and conditions.
   - Explore a 5-day weather forecast with icons and daily temperatures.

4. **Responsive Design**:
   - Ensures usability across devices (desktop, tablet, and mobile).
   - Styled with pure CSS, ensuring lightweight and responsive design.

---

## Tech Stack

### Frontend:
- **HTML5, CSS3, JavaScript**
- **Visualization Libraries**: None (icons and data are displayed using simple HTML and CSS)

### Backend:
- **API Used**: OpenWeatherMap API (data retrieval)

### Tools:
- **UI/UX Design**: Figma (optional for mockups)
- **Styling**: Pure CSS or optional utility frameworks

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-app-dashboard.git
   cd weather-app-dashboard
   ```

2. **Set Up API Key**:
   - Open the `script.js` file.
   - Replace the placeholder API key with your OpenWeatherMap API key:
     ```javascript
     const API_KEY = 'your_openweathermap_api_key';
     ```

3. **Run the Application**:
   - Open `index.html` in a browser to use the application.

---

## Usage

1. **Search for Weather**:
   - Enter the name of a city in the search bar and press Enter or click the search button.

2. **View Current Weather**:
   - Check details like temperature, humidity, and conditions displayed prominently.

3. **Explore the Forecast**:
   - View the 5-day weather forecast with daily temperatures and weather icons.

---

## Contribution Guidelines

1. **Fork the Repository**.
2. **Create a Branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit Changes**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to Branch**:
   ```bash
   git push origin feature-name
   ```
5. **Open a Pull Request**.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- [OpenWeatherMap API](https://openweathermap.org/api)
