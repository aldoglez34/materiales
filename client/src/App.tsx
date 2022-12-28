import { FC } from "react";
import { useScrap } from "./useScrap";
import { Button, Spinner, Table } from "react-bootstrap";

const App: FC = () => {
  const { data, scrap, isLoading } = useScrap();

  console.log({ data, scrap, isLoading });

  return (
    <div className="container h-100 py-4">
      <h1 className="mb-4">Web Scrap</h1>
      <section className="mb-4">
        {["coel", "epalma"].map((label) => (
          <Button
            key={label}
            className="shadow mr-2"
            onClick={() => scrap(label)}
            variant="warning"
          >
            {label}
          </Button>
        ))}
      </section>
      <section>
        {isLoading && <Spinner animation="border" />}
        {!isLoading && data.length && (
          <Table striped bordered hover className="shadow">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        )}
      </section>
    </div>
  );
};

export default App;
