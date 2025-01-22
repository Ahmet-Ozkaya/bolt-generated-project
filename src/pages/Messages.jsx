import { Container, Tab, Tabs } from 'react-bootstrap'

function Messages() {
  return (
    <Container className="my-4">
      <h1>Messages</h1>
      <Tabs defaultActiveKey="inbox" className="mb-3">
        <Tab eventKey="inbox" title="Inbox">
          <div className="mt-3">
            {/* Inbox messages will go here */}
            <p>No new messages</p>
          </div>
        </Tab>
        <Tab eventKey="sent" title="Sent">
          <div className="mt-3">
            {/* Sent messages will go here */}
            <p>No sent messages</p>
          </div>
        </Tab>
        <Tab eventKey="offers" title="Offers">
          <div className="mt-3">
            {/* Job offers will go here */}
            <p>No offers available</p>
          </div>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Messages
