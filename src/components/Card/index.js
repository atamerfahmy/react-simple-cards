import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TextExample({ id, title, email, websiteURL, removeCard }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Link href={"https://" + websiteURL}>Website URL</Card.Link>{'  '}
        <Button variant="danger" size='sm' onClick={() => removeCard(id)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default TextExample;