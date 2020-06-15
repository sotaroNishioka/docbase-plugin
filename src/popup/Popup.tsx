import React, { useEffect } from 'react';
import './Popup.scss';

export default function Popup() {
  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  const showAlert = () => alert('Hello');

  return (
    <div className="popupContainer">
      Hello, world!<button onClick={showAlert}>button</button>
    </div>
  );
}
