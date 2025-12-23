import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API_URL } from "../utils/constant";
import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
import Events from "../components/HomePage/Events";
import Gallery from "../components/HomePage/Gallery";
import Hero from "../components/HomePage/Hero";
import TeamPartners from "../components/HomePage/TeamPartners";

export default function Home() {
  const [futureEvents, setFutureEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const didFetch = useRef(false);

  const fetchFutureEvents = async () => {
    try {
      const response = await axios.post(`${API_URL}event-list`, {
        upcoming: true,
        status: 1,
      });
      setFutureEvents(response?.data?.data?.events);
      // console.log("Event List:", response.data?.data?.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchPastEvents = async () => {
    try {
      const response = await axios.post(`${API_URL}event-list`, {
        past: true,
        status: 1,
      });
      setPastEvents(response?.data?.data?.events);
      console.log("Event List:", response.data?.data?.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    if (didFetch.current) return;
    fetchFutureEvents();
    fetchPastEvents();
    didFetch.current = true;
  }, []);

  return (<>
    <Hero />
    <Events futureEvents={futureEvents} pastEvents={pastEvents} />
    <About />
    <TeamPartners />
    <Gallery />
    <Contact />
  </>)
}
