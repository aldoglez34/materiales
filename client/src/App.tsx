import { FC } from "react";
import { useScrap } from "./useScrap";
import { Button, Spinner, Table } from "react-bootstrap";

const App: FC = () => {
  const { data, scrap, isLoading } = useScrap();

  return (
    <div className="container h-100 py-4">
      <h1 className="mb-4">Web Scrap</h1>
      <section className="mb-4">
        {["coel", "epalma"].map((label) => (
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
