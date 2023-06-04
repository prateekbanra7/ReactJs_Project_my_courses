import React, {Fragment} from 'react';
import {Form,FormGroup,Input,Button,Container} from 'reactstrap';

const AddCourse=()=>{
    return ( 
    <Fragment>
      
      <h1 className="text-center">Fill Course details</h1>
       <Form>
          <FormGroup>
             <label for="userId">Course Id</label>
             <Input type="text" placeholder="Enter here" name="userId" id="userId" />
          </FormGroup>
          <FormGroup>
            <label for="title">Course Title</label>
            <Input type="text" placeholder="Enter title here" id="title"/>
          </FormGroup>

          <FormGroup>
            <label for="description">Course description</label>
            <Input type="textarea" placeholder="Enter description here" id="description"
            
            style={{height:150}}
             />
          </FormGroup>

           <Container className="text-center">
             <Button color="success ">Add Course</Button>
             <Button color="warning ml-2">Clear</Button>
           </Container>
        </Form>
    </Fragment>    
   ); 
};

export default AddCourse;