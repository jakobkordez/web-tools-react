import { FunctionComponent } from 'react'
import { Container } from 'react-bootstrap'

const NotFound: FunctionComponent = () => {
    return (
        <Container className="py-5">
            <h1>404 - Not Found</h1>
            <p>The page you are trying to load does not exist.</p>
        </Container>
    )
}

export default NotFound