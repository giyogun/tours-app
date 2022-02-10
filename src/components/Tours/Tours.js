import React, { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import Tour from "./Tour";
// import Tour from './Tour';

const url = "https://course-api.com/react-tours-project";

const Tours = (props) => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const deleteTourHandler = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
    // console.log(reviewsDb);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
        <main className="title">
          <h2>No tours left!</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </main>
    );
  }
  
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        <ul>
          {tours.map((tour) => (
            <Tour
              key={tour.id}
              {...tour}
              onDelete={deleteTourHandler}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tours;
