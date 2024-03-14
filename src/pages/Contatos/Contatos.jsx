import { useState } from "react";
import { Button, Card, Form, Spinner, Alert, Container } from "react-bootstrap";
import "./Contatos.scss";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

const Contatos = () => {
  const [selectedOption, setSelectedOption] = useState("Cliente");
  const [, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePhoneChange = (event) => {
    const input = event.target;
    const value = input.value;

    const formattedValue = formatPhoneNumber(value);

    input.value = formattedValue;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/248d65b325c0c0d68bae16d4799b27aa",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setAlertType("success");
        setShowAlert(true);
        setIsFormSubmitted(true);
        event.target.reset();
      } else {
        setAlertType("danger");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contatos">
      <div className="contatos_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="contatos_header__title text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
            CONTATOS
          </h1>
        </div>
      </div>
      <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Fale Conosco
        </h1>
      </div>
      <Container>
        <div className="card_contatos">
          <Card className="card_contatos__content">
            <Card.Body>
              <Card.Title>Enviar uma solicitação</Card.Title>
              <Form className="card_contatos__form" onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false" />
                <Form.Label>Eu Sou um(a) *</Form.Label>
                <div className="radio-buttons">
                  {["Cliente", "Proprietário", "Síndico", "Outros"].map(
                    (value) => (
                      <div
                        key={`inline-radio-${value}`}
                        className="card_contatos__form__check"
                      >
                        <Form.Check
                          label={value}
                          name="Tipo de Cliente"
                          type="radio"
                          id={`inline-radio-${value}`}
                          value={value}
                          checked={selectedOption === value}
                          onChange={handleOptionChange}
                        />
                      </div>
                    )
                  )}
                </div>

                <Form.Group>
                  <Form.Label>Seu Nome *</Form.Label>
                  <Form.Control type="text" name="Nome" required />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Seu E-mail *</Form.Label>
                  <Form.Control type="email" name="Email" required />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Seu Telefone *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="Celular"
                    onChange={handlePhoneChange}
                    maxLength="15"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Mensagem:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="Mensagem"
                    rows="4"
                    required
                  />
                </Form.Group>

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Contato"
                  )}
                </Button>

                {showAlert && (
                  <Alert
                    style={{
                      position: "absolute",
                      top: "570px",
                      right: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: "9999",
                      width: "400px",
                    }}
                    variant={alertType}
                    onClose={() => setShowAlert(false)}
                    dismissible
                  >
                    {alertType === "success"
                      ? "Formulário enviado com sucesso!"
                      : "Erro ao enviar o formulário."}
                  </Alert>
                )}
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Contatos;
