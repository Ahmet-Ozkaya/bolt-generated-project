import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Card, Spinner } from 'react-bootstrap';
import { searchJobs, getSearchSuggestions } from '../utils/searchUtils';
import SearchHistory from '../components/SearchHistory';
import AdvancedFilters from '../components/AdvancedFilters';

const BrowseJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  // Unified search handler
  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const searchResults = await searchJobs(query, filters);
      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes with debouncing
  useEffect(() => {
    if (searchQuery.trim()) {
      const timeoutId = setTimeout(() => {
        handleSearch(searchQuery);
        setSuggestions(getSearchSuggestions(searchQuery));
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [searchQuery, filters]);

  return (
    <Container className="my-4">
      <h1>Browse Jobs</h1>
      
      {/* Unified Search Bar */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search jobs by title, skills, location, or company..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="lg"
        />
      </Form.Group>

      {/* Search Results */}
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          {results.map((job) => (
            <Col key={job.id} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {job.company} - {job.location}
                  </Card.Subtitle>
                  <Card.Text>{job.description}</Card.Text>
                  <div className="text-muted small">
                    Posted by: {job.postedBy}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default BrowseJobs;
