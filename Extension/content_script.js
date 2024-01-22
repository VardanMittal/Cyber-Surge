const data = {};

function extractData() {
  const urls = {};
  const linkElements = document.querySelectorAll("a.eVNpHGjtxRBq_gLOfGDr");
  const details = document.querySelectorAll("span.kY2IgmnCmOGjharHErah");

  const minLength = Math.min(linkElements.length, details.length);

  for (let i = 0; i < minLength; i++) {
    urls[i] = details[i].textContent;
  }

  data.urls = urls;
}

function extractLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        data.location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      },
      (error) => {
        console.error("Error getting geolocation:", error.message);
        return;
      }
    );
  } else {
    console.error("Geolocation is not supported in this browser.");
    return;
  }
}
function sendUrlsToBackground() {
  browser.runtime.sendMessage({ action: "data", data });
}
console.log(data);
extractData();
extractLocation();
sendUrlsToBackground();
