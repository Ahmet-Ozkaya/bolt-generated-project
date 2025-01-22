import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { loadSavedSearches } from '../utils/searchUtils';

const SearchHistory = ({ onSelectSearch }) => {
  const searches = loadSavedSearches();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="mt-4">
      <h5>Recent Searches</h5>
      {searches.length > 0 ? (
        <ListGroup>
          {searches.map((search, index) => (
            <ListGroup.Item
              key={index}
              action
              onClick={() => onSelectSearch(search)}
              className="d-flex justify-content-between align-items-start"
            >
              <div>
                <div className="fw-bold">{search.query || 'All Jobs'}</div>
                <small className="text-muted">
                  {Object.entries(search.filters || {})
                    .filter(([_, value]) => value)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(', ')}
                </small>
              </div>
              <Badge bg="secondary" pill>
                {formatDate(search.timestamp)}
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p className="text-muted">No recent searches</p>
      )}
    </div>
  );
};

export default SearchHistory;
