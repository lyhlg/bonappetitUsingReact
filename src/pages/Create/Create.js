import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Create.css';

class Create extends Component {
  constructor(props){
    super(props);
  }
  render() {
    if (!this.props.show) {
      return null;
    }
    function setThreeNumberDecimal(el) {
      el.value = parseFloat(el.value).toFixed(3);
    };

    return (
      <div>
      <div className="RegisterPage" onClick={this.props.onCancel}/>
        <div className="backdropCreate">
          <Form action="http://localhost:8080/api/create" acceptCharset="utf-8" name="person_info" method="post">
            <Input type="hidden" name="userId" value={localStorage.token} />
            <FormGroup>
              <Label for="exampleEmail">맛집 이름이?</Label>
              <Input type="text" name="title" id="title" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">뭐 먹었어요?</Label>
              <Input type="text" name="menu" id="menu" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">얼마였어요? (숫자만)</Label>
              <Input type="number" name="price" id="price" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">한마디 해줘요</Label>
              <Input type="textarea" name="comment" id="exampleText" />
            </FormGroup>


            <Button>등로옥!</Button>
          </Form>
        </div>
      </div>
    )
  }
}
export default Create;
