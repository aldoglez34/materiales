import { FC } from "react";
import { useScrap } from "./useScrap";
import { Button, Table } from "react-bootstrap";

const App: FC = () => {
  const { coelData } = useScrap();

  console.log({ coelData });

  return (
    <div className="container py-4 bg-light">
      <section className="mb-4 text-center">
        <Button variant="dark">Coel</Button>
      </section>
      <Table striped bordered hover>
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
    </div>
  );
};

export default App;
