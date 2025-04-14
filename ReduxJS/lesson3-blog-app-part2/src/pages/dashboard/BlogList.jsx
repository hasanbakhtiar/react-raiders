import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogList = () => {
  const data = useSelector((p) => p);
  return (
    <>
      <h1 className="text-center my-5">Dashboard</h1>
      <Link to="/dashboard/add" className="btn btn-dark">
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
                <Link to="/" className="btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Button variant="danger">X</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BlogList;
