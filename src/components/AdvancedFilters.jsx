import React, { useState } from 'react';
import { Form, Row, Col, Accordion } from 'react-bootstrap';

const AdvancedFilters = ({ filters, setFilters }) => {
  const handleFilterChange = (filterKey, value) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  return (
    <div className="mb-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Advanced Filters
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Type</Form.Label>
                  <Form.Select
                    value={filters.jobType || ''}
                    onChange={(e) => handleFilterChange('jobType', e.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Experience Level</Form.Label>
                  <Form.Select
                    value={filters.experienceLevel || ''}
                    onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="entry-level">Entry Level</option>
                    <option value="mid-level">Mid Level</option>
                    <option value="senior-level">Senior Level</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Salary Range</Form.Label>
                  <div className="d-flex gap-2">
                    <Form.Control
                      type="number"
                      placeholder="Min"
                      value={filters.salaryRange?.[0] || ''}
                      onChange={(e) => handleFilterChange('salaryRange', [
                        e.target.value,
                        filters.salaryRange?.[1] || ''
                      ])}
                    />
                    <Form.Control
                      type="number"
                      placeholder="Max"
                      value={filters.salaryRange?.[1] || ''}
                      onChange={(e) => handleFilterChange('salaryRange', [
                        filters.salaryRange?.[0] || '',
                        e.target.value
                      ])}
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Remote Work</Form.Label>
                  <Form.Check
                    type="switch"
                    label="Remote Only"
                    checked={filters.remote || false}
                    onChange={(e) => handleFilterChange('remote', e.target.checked)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date Posted</Form.Label>
                  <Form.Select
                    value={filters.datePosted || ''}
                    onChange={(e) => handleFilterChange('datePosted', e.target.value)}
                  >
                    <option value="">Any Time</option>
                    <option value="last-24-hours">Last 24 Hours</option>
                    <option value="last-7-days">Last 7 Days</option>
                    <option value="last-30-days">Last 30 Days</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AdvancedFilters;
