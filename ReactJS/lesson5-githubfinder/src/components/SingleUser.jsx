
const SingleUser = ({userProp}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
        <img src={userProp.avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{userProp.login}</h5>
          <p className="card-text">
            {userProp.id}
          </p>
          <a href={userProp.html_url} target="_blank" className="btn btn-dark">
            Go profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
