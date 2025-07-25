const Contact = () => {
  async function contactForm(formData: FormData) {
    'use server';

    const rawFormData = {
      fullname: formData.get('fullname') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
    };
    
  }
  return (
    <div>
      <h1 className="text-center my-5">Contact Form</h1>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-5">
          <form action={contactForm}>
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
