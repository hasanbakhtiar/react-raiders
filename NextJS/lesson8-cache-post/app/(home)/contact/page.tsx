const Contact = () => {
  const contactForm = async (formData:FormData) => {
    'use server';
       
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: formData.get('fullname'),
        phone: formData.get('phone'),
        email: formData.get('email'),
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center my-5">Contact Form</h1>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-5">
          <form action={contactForm} method="POST">
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input type="text" name="fullname" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone number</label>
              <input type="tel" name="phone" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
