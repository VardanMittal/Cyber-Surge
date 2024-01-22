function extractData() {
  const data = {};
  const linkElements = document.querySelectorAll("a.eVNpHGjtxRBq_gLOfGDr");
  const details = document.querySelectorAll("span.kY2IgmnCmOGjharHErah");

  const minLength = Math.min(linkElements.length, details.length);

  for (let i = 0; i < minLength; i++) {
    data[i] = details[i].textContent;
  }

  return data;
}

function sendUrlsToBackground(data) {
  browser.runtime.sendMessage({ action: "data", data });
}

const extractedData = extractData();
sendUrlsToBackground(extractedData);
