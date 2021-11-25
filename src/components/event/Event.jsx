import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import EventCard from "../cards/EventCard";

const Event = () => {
  const { artistName } = useParams();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://rest.bandsintown.com/artists/${artistName}/events/?app_id=2c2ac4752a524d47b20afcf2dc1e9a00`
      )
      .then((res) => setEvents(res.data));
  }, []);

  useEffect(() => {
    console.log(typeof events[0].datetime);
  }, [events]);
  return (
    <div className="eventContainer">
      {events &&
        events.map((el, idx) => (
          <EventCard key={idx} town={el.venue.city} datetime={el.datetime} />
        ))}
    </div>
  );
};

export default Event;
