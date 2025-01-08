import Swal from 'sweetalert2';
import Footer from './Footer';
import Navbar from './Navbar';


const AddVisa = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const country_image = form.country_image.value;
    const country_name = form.country_name.value;
    const visa_type = form.visa_type.value;
    const processing_time = form.processing_time.value;
    const required_documents = Array.from(
      form.querySelectorAll('input[name="required_documents"]:checked')
    ).map((checkbox) => checkbox.value);
    const description = form.description.value;
    const age_restriction = form.age_restriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const application_method = form.application_method.value;

    const formData = {
      country_image,
      country_name,
      visa_type,
      processing_time,
      required_documents,
      description,
      age_restriction,
      fee,
      validity,
      application_method,
    };

    console.log(formData);

    fetch('http://localhost:5000/datas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
          Swal.fire({
            title: "successful",
            text: "Data Added Successfully",
            icon: "success",
            draggable: true
          });
          form.reset();
      })


  
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-5 container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add New Visa Information</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="country_image"
            placeholder="Country Image URL"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="country_name"
            placeholder="Country Name"
            className="input input-bordered w-full"
          />
          <select
            name="visa_type"
            className="select select-bordered w-full"
          >
            <option>Tourist Visa</option>
            <option>Work Visa</option>
            <option>Business Visa</option>
            <option>Student Visa</option>
          </select>
          <input
            type="text"
            name="processing_time"
            placeholder="Processing Time"
            className="input input-bordered w-full"
          />
          <fieldset>
            <legend className="text-gray-700 font-semibold mb-2">
              Required Documents
            </legend>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="required_documents"
                value="Valid passport"
                className="mr-2"
              />
              Valid passport
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="required_documents"
                value="Visa application form"
                className="mr-2"
              />
              Visa application form
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="required_documents"
                value="Recent passport-sized photograph"
                className="mr-2"
              />
              Recent passport-sized photograph
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="required_documents"
                value="Proof of residence"
                className="mr-2"
              />
              Proof of residence
            </label>
          </fieldset>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            type="number"
            name="age_restriction"
            placeholder="Age Restriction"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="fee"
            placeholder="Visa Fee"
            className="input input-bordered w-full"
          />
          <input
            type="date"
            name="validity"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="application_method"
            placeholder="Application Method"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn bg-blue-400 text-white w-full">
            Submit
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddVisa;
