import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  const [movie, changeMovie] = useState('');
  const [time, changetime] = useState('');
  const [noofseat, changeNoofSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });

  const [lastbookingdetails, setLastBookingDetails] = useState(null);

  const handlePostBooking = async () => {
    const response = await fetch(`https://localhost:8080/api/booking`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie: movie, slot: time, seats: noofseat }),
    });

    const data = await response.json();

    setErrorPopup(true);
    setErrorMesssage(data.message);
    if (response.status === 200) {
      changetime("");
      changeMovie("");
      changeNoofSeats({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
      setLastBookingDetails(data.data);

      // Save last booking details in localStorage
      window.localStorage.setItem("lastBookingDetails", JSON.stringify(data.data));
    }
  };

  const handleGetBooking = async () => {
    const response = await fetch("https://localhost:8080/api/booking", {
      method: "Get",
    });
    const data = await response.json();
    setLastBookingDetails(data.data);
  };

  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seat = JSON.parse(window.localStorage.getItem("seats"));

    if (movie) {
      changeMovie(movie);
    }
    if (slot) {
      changetime(slot);
    }
    if (seat) {
      changeNoofSeats(seat);
    }
  }, []); // No need to include lastbookingdetails

  return (
    <BsContext.Provider value={{
      movie, changeMovie, time, changetime, noofseat, changeNoofSeats,
      lastbookingdetails, setLastBookingDetails, handleGetBooking, handlePostBooking,
      errorPopup, setErrorPopup, errorMessage, setErrorMesssage
    }}>
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
