import { useState } from "react";
import "./ContactForm.scss";
import { Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

const ContactForm = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  ContactForm.propTypes = {
    selectedImovelId: PropTypes.string,
  };

  const handlePhoneChange = (event) => {
    const input = event.target;
    const value = input.value;

    const formattedValue = formatPhoneNumber(value);

    input.value = formattedValue;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Indicar que o formulário está sendo enviado
    setIsSubmitting(true);

    // Dados do formulário
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
        setIsSubmitted(true);
      } else {
        console.error("Erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }

    // Resetar o estado de envio após a conclusão
    setIsSubmitting(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <p className="text-center">Email enviado com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            readOnly
            value={props.selectedImovelId}
            type="text"
            id="id"
            name="id"
            required
            hidden
          />

          <label htmlFor="name">Seu Nome:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Seu E-mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Seu Telefone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handlePhoneChange}
            maxLength="15"
            required
          />
          <input type="hidden" name="_captcha" value="false" />

          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            defaultValue={`Olá, gostaria de mais informações sobre este imóvel, código: ${props.selectedImovelId}. `}
            rows="4"
            required
          ></textarea>

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
        </form>
      )}
    </div>
  );
};

export default ContactForm;
