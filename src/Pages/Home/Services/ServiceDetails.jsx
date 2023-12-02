import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsPage from "./DetailsPage";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5007/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(true);
      });
  }, []);
  const foundService = services?.find((service) => service._id === id);

  return (
    <div>
      {loading ? (
        <DetailsPage foundService={foundService}></DetailsPage>
      ) : (
        "No Data Found"
      )}
    </div>
  );
};

export default ServiceDetails;
