import Form from "../components/Form";

const New = () => {
  const formData = {
      name,
      priority,
      description,
      deliverydate
  };

  return (
    <div className="container">
      <h1 className="my-3">Agregar Predio</h1>
      <Form formData={formData} />
    </div>
  );
};

export default New;
