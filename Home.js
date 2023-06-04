import React from 'react';
import { jumbotron,Container,Button } from 'reactstrap';


const Home = () => {
    return (
        <div>
           <jumbotron className="text-center ">
             <h1 >Learn code with Experts</h1>
             <p>
              This is a simple hero unit,
              a simple Jumbotron-style component for calling extra attention to featured content or information.
             </p>
             <Container>
              <Button color="primary" outline>Start using </Button>
             </Container>
           </jumbotron>
        </div>
    );  
};

export default Home;