import { Container, Form, Button, Row, Col, Accordion } from 'react-bootstrap'
import { useState } from 'react'

function EmployeeProfile() {
  const [profile, setProfile] = useState({
    fullName: '',
    bio: '',
    skills: '',
    location: '',
    workHistory: [{
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    education: [{
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
    }],
    careerGoals: '',
    jobPreferences: {
      jobType: '',
      location: '',
      salaryExpectation: '',
      remotePreference: false
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Save profile to database
    console.log('Profile submitted:', profile)
  }

  const addWorkHistory = () => {
    setProfile(prev => ({
      ...prev,
      workHistory: [
        ...prev.workHistory,
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: ''
        }
      ]
    }))
  }

  const addEducation = () => {
    setProfile(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          institution: '',
          degree: '',
          fieldOfStudy: '',
          startDate: '',
          endDate: ''
        }
      ]
    }))
  }

  return (
    <Container className="my-4">
      <h1>Employee Profile</h1>
      <Form onSubmit={handleSubmit}>
        <Accordion defaultActiveKey="basic-info">
          {/* Basic Information */}
          <Accordion.Item eventKey="basic-info">
            <Accordion.Header>Basic Information</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  value={profile.skills}
                  onChange={(e) => setProfile({...profile, skills: e.target.value})}
                  placeholder="Comma separated list of skills"
                />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>

          {/* Work History */}
          <Accordion.Item eventKey="work-history">
            <Accordion.Header>Work History</Accordion.Header>
            <Accordion.Body>
              {profile.workHistory.map((work, index) => (
                <div key={index} className="mb-4">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                          type="text"
                          value={work.company}
                          onChange={(e) => {
                            const newWorkHistory = [...profile.workHistory]
                            newWorkHistory[index].company = e.target.value
                            setProfile({...profile, workHistory: newWorkHistory})
                          }}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                          type="text"
                          value={work.position}
                          onChange={(e) => {
                            const newWorkHistory = [...profile.workHistory]
                            newWorkHistory[index].position = e.target.value
                            setProfile({...profile, workHistory: newWorkHistory})
                          }}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={work.startDate}
                          onChange={(e) => {
                            const newWorkHistory = [...profile.workHistory]
                            newWorkHistory[index].startDate = e.target.value
                            setProfile({...profile, workHistory: newWorkHistory})
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={work.endDate}
                          onChange={(e) => {
                            const newWorkHistory = [...profile.workHistory]
                            newWorkHistory[index].endDate = e.target.value
                            setProfile({...profile, workHistory: newWorkHistory})
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={work.description}
                      onChange={(e) => {
                        const newWorkHistory = [...profile.workHistory]
                        newWorkHistory[index].description = e.target.value
                        setProfile({...profile, workHistory: newWorkHistory})
                      }}
                    />
                  </Form.Group>
                </div>
              ))}
              <Button variant="secondary" onClick={addWorkHistory}>
                Add Work Experience
              </Button>
            </Accordion.Body>
          </Accordion.Item>

          {/* Education */}
          <Accordion.Item eventKey="education">
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body>
              {profile.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Institution</Form.Label>
                        <Form.Control
                          type="text"
                          value={edu.institution}
                          onChange={(e) => {
                            const newEducation = [...profile.education]
                            newEducation[index].institution = e.target.value
                            setProfile({...profile, education: newEducation})
                          }}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Degree</Form.Label>
                        <Form.Control
                          type="text"
                          value={edu.degree}
                          onChange={(e) => {
                            const newEducation = [...profile.education]
                            newEducation[index].degree = e.target.value
                            setProfile({...profile, education: newEducation})
                          }}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Field of Study</Form.Label>
                        <Form.Control
                          type="text"
                          value={edu.fieldOfStudy}
                          onChange={(e) => {
                            const newEducation = [...profile.education]
                            newEducation[index].fieldOfStudy = e.target.value
                            setProfile({...profile, education: newEducation})
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={edu.startDate}
                          onChange={(e) => {
                            const newEducation = [...profile.education]
                            newEducation[index].startDate = e.target.value
                            setProfile({...profile, education: newEducation})
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={edu.endDate}
                      onChange={(e) => {
                        const newEducation = [...profile.education]
                        newEducation[index].endDate = e.target.value
                        setProfile({...profile, education: newEducation})
                      }}
                    />
                  </Form.Group>
                </div>
              ))}
              <Button variant="secondary" onClick={addEducation}>
                Add Education
              </Button>
            </Accordion.Body>
          </Accordion.Item>

          {/* Career Goals */}
          <Accordion.Item eventKey="career-goals">
            <Accordion.Header>Career Goals</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3">
                <Form.Label>Career Goals</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={profile.careerGoals}
                  onChange={(e) => setProfile({...profile, careerGoals: e.target.value})}
                  placeholder="Describe your career aspirations and goals"
                />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>

          {/* Job Preferences */}
          <Accordion.Item eventKey="job-preferences">
            <Accordion.Header>Job Preferences</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Job Type</Form.Label>
                    <Form.Select
                      value={profile.jobPreferences.jobType}
                      onChange={(e) => setProfile({
                        ...profile,
                        jobPreferences: {
                          ...profile.jobPreferences,
                          jobType: e.target.value
                        }
                      })}
                    >
                      <option value="">Select</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Location</Form.Label>
                    <Form.Control
                      type="text"
                      value={profile.jobPreferences.location}
                      onChange={(e) => setProfile({
                        ...profile,
                        jobPreferences: {
                          ...profile.jobPreferences,
                          location: e.target.value
                        }
                      })}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Salary Expectation</Form.Label>
                    <Form.Control
                      type="text"
                      value={profile.jobPreferences.salaryExpectation}
                      onChange={(e) => setProfile({
                        ...profile,
                        jobPreferences: {
                          ...profile.jobPreferences,
                          salaryExpectation: e.target.value
                        }
                      })}
                      placeholder="Enter expected salary"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Remote Preference</Form.Label>
                    <Form.Check
                      type="checkbox"
                      label="Prefer remote work"
                      checked={profile.jobPreferences.remotePreference}
                      onChange={(e) => setProfile({
                        ...profile,
                        jobPreferences: {
                          ...profile.jobPreferences,
                          remotePreference: e.target.checked
                        }
                      })}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="mt-4">
          <Button variant="primary" type="submit" size="lg">
            Save Profile
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default EmployeeProfile
