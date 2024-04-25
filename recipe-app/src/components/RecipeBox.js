import Card from 'react-bootstrap/Card';

function RecipeBox(props) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.recipeName}</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">props.recipeOwner</Card.Subtitle>
            <Card.Text>
            props.ingredients
            </Card.Text> */}
        </Card.Body>
        </Card>
    )
}

export default RecipeBox;