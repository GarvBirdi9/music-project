import { apiCall } from "./api-client.js";

async function loadData(value) {
  const URL = `https://itunes.apple.com/search?term=${value}&limit=15`;
  try {
    const response = await fetch(URL);
    const obj = await response.json();
    // console.log(obj);
    console.log(obj.results);
    loadMusic(obj.results);
  } catch (err) {
    console.log("api call invalid");
  }
}

var btn = document.getElementById("getResultButton");
btn.addEventListener("click", () => {
  var aName = document.getElementById("artistName").value;
  console.log(aName);
  loadData(aName);
});

function loadMusic(artist) {
  for (var i = 0; i < artist.length; i++) {
    console.log(artist[i].previewUrl);
    loadAudio(artist[i]);
  }
}

function loadAudio(singleSong) {
  const mainDisplayDiv = document.createElement("div");
  mainDisplayDiv.className = 'flex justify-content-c';
  const audio = document.createElement("audio");
  audio.controls = true;
  const source = document.createElement("source");
  source.src = singleSong.previewUrl;
  audio.appendChild(source);
  audio.style.margin = '10px 0px'
  mainDisplayDiv.appendChild(audio);
  const audioDiv = document.getElementById("audioDiv");
  audioDiv.appendChild(mainDisplayDiv);
}
