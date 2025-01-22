import { Container, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function EmployerProfile() {
  const [profile, setProfile] = useState({
    companyName: '',
    description: '',
    location: '',
    website: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Save profile to database
  }

  return (
    <Container className="my-4">
      <h1>Employer Profile</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            value={profile.companyName}
            onChange={(e) => setProfile({...profile, companyName: e.target.value})}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={profile.description}
            onChange={(e) => setProfile({...profile, description: e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={profile.location}
            onChange={(e) => setProfile({...profile, location: e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="url"
            value={profile.website}
            onChange={(e) => setProfile({...profile, website: e.target.value})}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Profile
        </Button>
      </Form>
    </Container>
  )
}

export default EmployerProfile
