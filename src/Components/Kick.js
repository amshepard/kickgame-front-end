import { Link } from "react-router-dom";

function Kick({ kick, id }) {
  return (
    <tr className="Kick">
      <td>
        {kick.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/kicks/${id}`}>{kick.name}</Link>
      </td>
      <td>
        <Link to={`/kicks/${id}`}>{kick.brand}</Link>
      </td>
      <td>
        <Link to={`/kicks/${id}`}>{kick.price}</Link>
      </td>
    </tr>
  );
}

export default Kick;
