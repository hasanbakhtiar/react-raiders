import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { addBlog } from '../../tools/actions/blog';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmited = (e) => {
    e.preventDefault();
    if (!img || !title || !desc) {
      Swal.fire({
        title: 'Please, fill inputs!',
        icon: 'warning',
      });
    } else {
      dispatch(addBlog({ img, title, desc }));
      navigate('/dashboard');
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="my-5">Add Blog</h1>
        <div className="col-5">
          <Form onSubmit={formSubmited}>
            <Form.Group className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Add
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
