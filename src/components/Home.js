import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="App">
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Subasta Online</h2>
              <h3 className="section-subheading text-muted">
                Los mejores en subasta de vehiculos
              </h3>
            </div>
          </div>
          <CardColumns>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-chevrolet-equinox-great-cars-road-trips-esp.imgcache.rev9cbfa4acde9ae5248bffbb3e539db6a7.web.650.370.jpg"
              />
              <Card.Body>
                <Card.Title>Chevrolet Equinox</Card.Title>
                <Card.Text>
                  Seguramente agradecerías si se te avisara de los riesgos en el
                  camino, pues el Chevrolet Equinox tiene todo un sistema de
                  seguridad que lo hace.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Subasta Online.me es el mejor citio para poder subastar
                  vehiculos
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Ramon Diaz <cite title="Source Title">Vendedor</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-chrysler-pacifica-great-cars-road-trips-esp.imgcache.rev0c54aec68d4ba583801adfb0a2bad804.web.650.370.jpg"
              />
              <Card.Body>
                <Card.Title>Chrysler Pacifica</Card.Title>
                <Card.Text>
                  Si vas a hacer un viaje acompañado de toda la familia, toma en
                  cuenta la van Chrysler Pacifica, que tiene capacidad para ocho
                  pasajeros.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Subasta termina en 48 hrs.</small>
              </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>Superior a la competencia</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Pasion Autos <cite title="Source Title">Revista</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-honda-crv-great-cars-road-trips-esp.imgcache.rev605578a0a53b65bb5da2e90ad8d7378d.web.650.370.jpg"
                />
                <Card.Title>Honda Crv</Card.Title>
                <Card.Text>
                  Las largas horas en el camino pueden ser menos fatigosas si
                  usas el sistema Honda Sensing del Honda CR-V, que permite que
                  el auto siga marchando aún sin tus manos en el volane.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    Ultima actualizacion 3 mins
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-volkswagen-passat-great-cars-road-trips-esp.imgcache.revc8dcfca4a6a8d237e420ca6e7db4afbd.web.650.370.jpg" />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.jpg"
              />
              <Card.Body>
                <Card.Title>Hyundai Ioniq</Card.Title>
                <Card.Text>
                  ¿Te preocupa el medioambiente? Entonces te convendría
                  considerar un modelo híbrido, como el Hyundai Ioniq que, de
                  paso, tiene uno de los paneles de controles más sencillos en
                  el mercado para que las personas se puedan concentrar en lo
                  mas importante, la seguridad en la{" "}
                  <carretera className=""></carretera>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-right">
              <blockquote className="blockquote mb-0 card-body">
                <Card.Img
                  variant="top"
                  src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-toyota-highlander-great-cars-road-trips-esp.imgcache.rev2b737aebd5da819d93234e3d811392e3.web.650.370.jpg"
                />
                <p>Vende rapido y seguro</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Estefani Godinez <cite title="Source Title">Venderora</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-lexus-rx-350-great-cars-road-trips-esp.imgcache.revbcc18459f9f3c8217de9a0bebca6d0e2.web.650.370.jpg"
                />
                <Card.Title>Lexus Rx 350</Card.Title>
                <Card.Text>
                  Desde que se incorporó la característica de calefacción en sus
                  sillones delanteros, tan apreciada por personas con artritis,
                  el Lexus RX 350, no la ha cambiado.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    Ultima actualizacion 3 mins
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </div>
      </section>
    </div>
  );
};

export default Home;
