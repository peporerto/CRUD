import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import sequelize from "../../database/database";
import Movie from "../../models/projects";

const pPage = ({ success, error }) => {
  const router = useRouter();

  if (!success) {
    return (
      <div className="container text-center my-5">
        <h1>{error} </h1>

        <Link href="/">
          <a className="btn btn-success">Volver...</a>
        </Link>
      </div>
    );
  }


  return (
    <div className="container">
      <h1>Lista</h1>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h5 className="text-uppercase">{id.name}</h5>
          </div>
          <p className="fw-light">{}</p>
          <Link href="/">
            <a className="btn btn-success btn-sm me-2">Volver...</a>
          </Link>
          <Link href={`/${movie._id}/edit`}>
            <a className="btn btn-warning btn-sm me-2">Editar</a>
          </Link>
          <button
            className="btn btn-danger btn-sm"
           
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

