import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog } from '../../tools/actions/blog';
import slugify from 'slugify';
const BlogList = () => {
  const data = useSelector((p) => p.blog);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-center my-5">Dashboard</h1>
      <Link to="/dashboard/add" className="btn btn-dark mb-3">
        Add{' '}
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img width={70} src={item.img} />
              </td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>
                <Link to={`/dashboard/edit/${slugify(item.title,{lower:true})}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteBlog(item.id));
                  }}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BlogList;
