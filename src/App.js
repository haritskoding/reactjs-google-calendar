import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyD3SkYIC-iwn2HgHJdJwQrwT9ZXUVOTeqk";
let calendars = [
  { calendarId: "areris981@gmail.com" },
  {
    calendarId: "areris981@gmail.com",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    )
  }
}

export default App