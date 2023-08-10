import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function KickDetails() {
  const [kick, setKick] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const deleteKick = () => {
    axios
      .delete(`${API}/kicks/${id}`)
      .then(
        () => navigate(`/kicks`),
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/kicks/${id}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
        navigate("/not-found");
      });
  }, [id, navigate, API]);

  return (
    <>
      <article className="container Kick-Details">
        <h3>
          {kick.is_favorite ? <span>⭐️</span> : null} {kick.name} - By{" "}
          {kick.brand}
        </h3>
        <h5>{kick.releaseDate}</h5>
        <h6>
          <span>Price: </span>
          {kick.price}
        </h6>
      </article>
      <div className="showNavigation">
        <div>
          <button>
            <Link to={`/kicks`}>Back</Link>
          </button>
        </div>

        <div>
          <button>
            <Link to={`/kicks/${id}/edit`}>Edit</Link>
          </button>
        </div>
        <div>
          {" "}
          <button onClick={deleteKick}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default SongDetails;
