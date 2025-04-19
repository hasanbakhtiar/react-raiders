import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";


const BlogForm = ({ editdata,formData }) => {
  const [img, setImg] = useState(editdata ? editdata.img : "");
  const [title, setTitle] = useState(editdata ? editdata.title : "");
  const [desc, setDesc] = useState(editdata ? editdata.desc : "");


  const formSubmited = (e) => {
    e.preventDefault();
    if (!img || !title || !desc) {
      Swal.fire({
        title: "Please, fill inputs!",
        icon: "warning",
      });
    } else {
          formData({
            img,title,desc
          })
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-5">
          <Form onSubmit={formSubmited}>
          <Form.Group className="mb-3">
              
              {editdata?<img src={editdata.img} width={170}/>:""}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                value={img}
                type="text"
                placeholder="Enter image url"
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={desc}
                type="text"
                placeholder="Enter description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              {editdata?"Edit":"Add"}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
