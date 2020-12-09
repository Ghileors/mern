import React from 'react';

export const LinkCard = ({ link }) => {
  return (
    <>
      <div className="row">
        <div className="col s12 m5">
          <div className="card-panel">
            <span className="black-text">
              <h2>Details:</h2>

              <p>
                Your link:{' '}
                <a href={link.to} target="_blank" rel="noopener noreferrer">
                  {link.to}
                </a>
              </p>
              <p>
                Source:{' '}
                <span
                  style={{ display: 'flex', overflow: 'hidden', width: '100%' }}
                >
                  <a href={link.from} target="_blank" rel="noopener noreferrer">
                    {link.from}
                  </a>
                </span>
              </p>
              <p>
                Clicks: <strong>{link.clicks}</strong>
              </p>
              <p>
                Date of creation:{' '}
                <strong>{new Date(link.date).toLocaleDateString()}</strong>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
