// API Configuration
const apiKey = "579b464db66ec23bdd00000167437fcff7874fc76198236331c3db69"; // Your API key
const resourceId = "0764657f-00ec-4c6b-9ece-2d7b8a7401fa"; // Your resource ID
const baseUrl = `https://api.data.gov.in/resource/${resourceId}`;

/**
 * Fetch census data from the API
 * @param {number} offset - Number of rows to skip (pagination)
 * @param {number} limit - Number of rows to fetch
 */
async function fetchCensusData(offset = 0, limit = 10) {
  try {
    const response = await fetch(
      `${baseUrl}?api-key=${apiKey}&format=json&offset=${offset}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await response.json();
    console.log("Fetched Census Data:", data.records); // Log fetched records

    // Call a function to render data on the page
    renderCensusData(data.records);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

/**
 * Render census data to the HTML
 * @param {Array} records - Array of census data records
 */
function renderCensusData(records) {
  const tableBody = document.getElementById("data-table-body");
  tableBody.innerHTML = ""; // Clear existing rows

  records.forEach((record) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.state_name || "N/A"}</td>
      <td>${record.district_name || "N/A"}</td>
      <td>${record.population_total || "N/A"}</td>
      <td>${record.male_population || "N/A"}</td>
      <td>${record.female_population || "N/A"}</td>
      <td>${record.literacy_rate || "N/A"}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Event listener for fetching data on button click
document.getElementById("fetch-button").addEventListener("click", () => {
  fetchCensusData(0, 20); // Fetch the first 20 records
});

// Initial fetch for default display
fetchCensusData();