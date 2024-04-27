import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DashboardNavbar from "../components/dashboard-components/DashboardHeader";
import DashboardAside from "../components/dashboard-components/DashboardAside";
import ShortenLinkSection from "../components/dashboard-components/ShortenLinkSection";
import ShortenedLinksSection from "../components/dashboard-components/ShortenedLinksSection";
import RaiseSupportTicketSection from "../components/dashboard-components/RaiseSupportTicketSection";
import AnalyticsSection from "../components/dashboard-components/AnalyticsSection";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [supportTickets, setSupportTickets] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchShortenedLinks();
   
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://localhost:4000/api/users/me",
        config
      );

      setUser(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(error.message);
    }
  };

  const fetchShortenedLinks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:4000/api/links/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShortenedLinks(res.data);
    } catch (error) {
      console.error("Error fetching shortened links:", error);
    }
  };

 
  return (
    <div className="flex">
      <DashboardAside className="fixed top-0 left-0 h-full" />
      <div className="flex-1 p-6 bg-white">
        <DashboardNavbar username={user && user.username} />
        <ShortenLinkSection />
       
        <AnalyticsSection />
        <ShortenedLinksSection />
        <RaiseSupportTicketSection supportTickets={supportTickets} />
      </div>
    </div>
  );
};

export default UserProfile;
