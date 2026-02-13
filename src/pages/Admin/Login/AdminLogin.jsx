import { useMemo, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, isFirebaseEnabled } from "../../../firebase/firebase";
import { ADMIN_EMAIL } from "../../../firebase/admin";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(ADMIN_EMAIL || "");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const emailHint = useMemo(() => {
    if (!ADMIN_EMAIL) return null;
    return `Admin configurado: ${ADMIN_EMAIL}`;
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!isFirebaseEnabled || !auth) {
      setError("Firebase não configurado.");
      return;
    }

    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin", { replace: true });
    } catch (err) {
      const code = err?.code;
      if (code === "auth/configuration-not-found") {
        setError(
          "Firebase Auth ainda não está configurado no projeto. No Console: Build → Authentication → Get started → habilite Email/Password e crie o usuário. Depois reinicie o `npm run dev` para recarregar o .env.",
        );
        return;
      }

      if (code === "auth/operation-not-allowed") {
        setError(
          "Login por Email/Senha não está habilitado. No Console: Authentication → Sign-in method → habilite Email/Password.",
        );
        return;
      }

      if (code === "auth/user-not-found" || code === "auth/wrong-password") {
        setError("Email ou senha inválidos.");
        return;
      }

      setError(err?.message || "Falha ao entrar");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <h1 className="h4 mb-3">Login do Admin</h1>
      {emailHint ? <p className="text-muted">{emailHint}</p> : null}
      {error ? (
        <Alert variant="danger" className="py-2">
          {error}
        </Alert>
      ) : null}
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="adminEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="adminPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </Form.Group>

        <Button type="submit" disabled={submitting} className="w-100">
          {submitting ? "Entrando..." : "Entrar"}
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;
