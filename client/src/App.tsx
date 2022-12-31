import { FC } from "react";
import { useScrap } from "./useScrap";
import { Button, Spinner, Table } from "react-bootstrap";
import { COEL_BUTTONS } from "./constants";

const App: FC = () => {
  const { data, isLoading, scrap, title } = useScrap();

  return (
    <div className="container h-100 py-4">
      <h1>Web Scrap</h1>
      <hr />
      <section>
        <h4>COEL</h4>
        <div className="d-flex justify-content-between">
          {COEL_BUTTONS.map(({ label, url }, idx) => (
            <Button
              className="shadow-sm"
              disabled={isLoading}
              key={idx}
              onClick={() => scrap("coel", label, url)}
              variant="warning"
            >
              {label}
            </Button>
          ))}
        </div>
      </section>
      <br />
      <section>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        )}
        {!isLoading && data.length ? (
          <>
            <hr />
            <h4 className="mb-4">{title.toUpperCase()}</h4>
            <Table striped bordered hover className="shadow">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  (
                    {
                      link,
                      name,
                      price,
                    }: { link: string; name: string; price: string },
                    idx: string
                  ) => {
                    if (!name && !price) return null;
                    return (
                      <tr key={idx}>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>
                          <a target="_blank" rel="noreferrer" href={link}>
                            <i className="fa-solid fa-link text-warning" />
                          </a>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </Table>
          </>
        ) : null}
      </section>
      <br />
    </div>
  );
};

export default App;
