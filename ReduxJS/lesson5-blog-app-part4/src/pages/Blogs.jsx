import { useSelector } from 'react-redux';
const Blogs = () => {
  const data = useSelector((p) => p.blog);
  return (
    <div className="container mt-5">
      <div className="row g-2">
        {data.map((item) => (
          <div className="col-12 col-sm-6 col-md-4" key={item.id}>
            <div className="card">
              <img
                src={item.img}
                style={{ height: '300px', objectFit: 'cover' }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
