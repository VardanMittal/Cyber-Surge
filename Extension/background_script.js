const mongoose = require("mongoose");
const express = require("express");

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "data") {
    const extractedData = message.data;

    console.log("Received URLs from content script:", extractedData);
  }
});
