import { FC, useState } from "react";
import { useScrap } from "./hooks/useScrap";
import { Button, Spinner, Table } from "react-bootstrap";
import { SCRAP_BUTTONS } from "./constants";
import { SearchBar } from "./components/SearchBar";
import { Export } from "./components/Export";
import { useSearch } from "./hooks/useSearch";
import { DataType } from "./types";

const App: FC = () => {
  const [title, setTitle] = useState<string>("Web Scrap");

  const { data, isLoading, scrap } = useScrap();
  const { filteredData, handleSearch } = useSearch({ data });

  return (
    <div className="container h-100 py-4">
      <h1>{title.toUpperCase()}</h1>
      <hr />
      <section>
        <h4>COEL</h4>
        <div className="d-flex justify-content-between">
          {SCRAP_BUTTONS.map(({ commerce, label, url }, idx) => (
            <Button
              className="shadow-sm"
              disabled={isLoading}
              key={idx}
              onClick={() => {
                scrap(commerce, url);
                setTitle(`${commerce} | ${label}`);
              }}
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
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        {!isLoading && data.length ? (
          <>
            <SearchBar handleSearch={handleSearch} />
            <Export
              data={filteredData}
              fileName={title}
              label={`Exportar ${filteredData.length} resultados a .CSV`}
            />
            <Table striped bordered hover className="shadow">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(
                  ({ link, name, price }: DataType, idx: number) => {
                    if (!name && !price) return null;
                    return (
                      <tr key={idx}>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>
                          <a target="_blank" rel="noreferrer" href={link}>
                            <i className="fa-solid fa-link text-primary" />
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
