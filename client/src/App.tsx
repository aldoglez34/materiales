import { FC } from "react";
import { useScrap } from "./useScrap";
import { Button, Spinner, Table } from "react-bootstrap";

const App: FC = () => {
  const { data, scrap, isLoading } = useScrap();

  const coelButtons = [
    {
      label: "iluminación",
      url: "https://coel.com.mx/sp/iluminacion?pagenumber=",
    },
    {
      label: "conductores eléctricos",
      url: "https://coel.com.mx/sp/cables?pagenumber=",
    },
    {
      label: "tubería y canalización",
      url: "https://coel.com.mx/sp/tuberia?pagenumber=",
    },
    {
      label: "material eléctrico",
      url: "https://coel.com.mx/sp/material-electrico?pagenumber=",
    },
    {
      label: "control y distribución",
      url: "https://coel.com.mx/sp/control-y-distribucion?pagenumber=",
    },
  ];

  return (
    <div className="container h-100 py-4">
      <h1 className="mb-4">Web Scrap</h1>
      <section>
        <h4>Coel</h4>
        <div>
          {coelButtons.map(({ label, url }) => (
            <Button
              className="shadow mr-2"
              disabled={isLoading}
              key={label}
              onClick={() => scrap(label)}
              variant="warning"
            >
              {label}
            </Button>
          ))}
        </div>
      </section>
      <br />
      <section>
        <h4>Epalma</h4>
        <div>
          {coelButtons.map(({ label, url }) => (
            <Button
              className="shadow mr-2"
              disabled={isLoading}
              key={label}
              onClick={() => scrap(label)}
              variant="warning"
            >
              {label}
            </Button>
          ))}
        </div>
      </section>
      <section>
        {isLoading && <Spinner animation="border" />}
        {!isLoading && data.length ? (
          <Table striped bordered hover className="shadow">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { name, price }: { name: string; price: string },
                  idx: string
                ) => {
                  if (!name && !price) return null;
                  return (
                    <tr key={idx}>
                      <td>{name}</td>
                      <td>{price}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>
        ) : null}
      </section>
      <br />
    </div>
  );
};

export default App;
