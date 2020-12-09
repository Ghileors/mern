import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Ссылок пока нет</p>;
  }

  return (
    <table className="highlight responsive-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Shortened link</th>
          <th>Clicks</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>
                <a href={link.to} target="_blank" rel="noopener noreferrer">
                  {link.to}
                </a>
              </td>
              <th>{link.clicks}</th>
              <td>
                <Link
                  className="btn yellow darken-4"
                  to={`/detail/${link._id}`}
                >
                  Open
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
