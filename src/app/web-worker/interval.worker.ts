/// <reference lib="webworker" />

self.onmessage = function (e) {
  const intervalTime = e.data; // Receive interval time from main thread
  setInterval(() => {
    self.postMessage('tick'); // Send a message back every interval tick
  }, intervalTime);
};