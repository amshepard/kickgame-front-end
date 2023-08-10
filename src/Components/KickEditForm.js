import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function KickEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [kick, setKick] = useState({
    name: "",
    brand: "",
    price: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setKick({ ...kick, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setKick({ ...kick, is_favorite: !kick.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/kicks/${id}`)
      .then(
        (response) => {
          setKick(response.data);
        },
        (err) => {
          console.error(err);
          navigate(`/not-found`);
        }
      )
      .catch((c) => console.warn("catch", c));
  }, [id, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateKick(kick, id);
  };

  const updateKick = (updatedKick) => {
    axios
      .put(`${API}/kicks/${id}`, updatedKick)
      .then(
        () => {
          navigate(`/kicks/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Kick Name:</label>
        <input
          id="name"
          value={kick.name}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="brand">Brand</label>
        <input
          id="brand"
          type="text"
          value={kick.brand}
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={kick.price}
          onChange={handleTextChange}
          placeholder=""
        />
        {/* <label htmlFor="time">Favorite</label>
        <input
          id="time"
          type="text"
          name="time"
          value={kick.time}
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={kick.is_favorite}
        /> */}

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default KickEditForm;
