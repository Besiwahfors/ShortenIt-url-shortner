import React, { useState, useEffect } from "react";
import axios from "axios";

const RaiseTicketPage = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);
  
  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const userId = getUserIdFromLocalStorage(); // Get the user's ID from localStorage or wherever it's stored
      const response = await axios.get(`http://localhost:4000/api/users/tickets/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      setTickets(response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setError("Failed to fetch tickets. Please try again later.");
    }
  };
  
  const getUserIdFromLocalStorage = () => {
    // Implement logic to get the user's ID from localStorage
    // For example:
    return localStorage.getItem("userId");
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:4000/api/links/ticket", {
        subject,
        description,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true);
      fetchTickets();
    } catch (error) {
      console.error("Error raising support ticket:", error);
      setError("Failed to raise support ticket. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mt-10 px-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold mb-4">Raise a Support Ticket</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success ? (
          <p className="text-green-500">Support ticket raised successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="subject" className="block">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-600"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-800 text-white py-3 px-6 rounded-md focus:outline-none hover:bg-gray-900"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Your Raised Tickets</h2>
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id} className="border-b border-gray-300 py-4">
              <h3 className="text-xl font-semibold">{ticket.subject}</h3>
              <p>{ticket.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RaiseTicketPage;
