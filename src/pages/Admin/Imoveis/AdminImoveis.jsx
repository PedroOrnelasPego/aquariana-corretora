import { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, Button, Form, Table } from "react-bootstrap";
import { signOut } from "firebase/auth";

import { auth } from "../../../firebase/firebase";
import {
  createImovel,
  deleteImovel,
  listImoveisAdmin,
} from "../../../services/imoveisFirebase";

const AdminImoveis = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);
  const [items, setItems] = useState([]);

  const [type, setType] = useState("venda");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(true);
  const [descriptionText, setDescriptionText] = useState("");
  const [imgCapaFile, setImgCapaFile] = useState(null);
  const [imgCarouselFiles, setImgCarouselFiles] = useState([]);

  const load = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await listImoveisAdmin();
      setItems(data);
    } catch (err) {
      setError(err?.message || "Falha ao carregar imóveis");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const canSave = useMemo(() => {
    return Boolean(title.trim() && descriptionText.trim() && imgCapaFile);
  }, [title, descriptionText, imgCapaFile]);

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setActive(true);
    setDescriptionText("");
    setImgCapaFile(null);
    setImgCarouselFiles([]);
    setProgress(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!canSave) {
      setError("Preencha título, descrição e imagem de capa.");
      return;
    }

    setSaving(true);
    setProgress("Iniciando...");
    try {
      await createImovel({
        title,
        type,
        descriptionText,
        price,
        active,
        imgCapaFile,
        imgCarouselFiles,
        onProgress: ({ done, total, label }) => {
          setProgress(`${label} (${done}/${total})`);
        },
      });
      resetForm();
      await load();
    } catch (err) {
      setError(err?.message || "Falha ao salvar imóvel");
    } finally {
      setSaving(false);
      setTimeout(() => setProgress(null), 1500);
    }
  };

  const onDelete = async (imovel) => {
    const ok = window.confirm("Excluir este imóvel?");
    if (!ok) return;

    setError(null);
    try {
      await deleteImovel(imovel);
      await load();
    } catch (err) {
      setError(err?.message || "Falha ao excluir");
    }
  };

  const doLogout = async () => {
    if (!auth) return;
    await signOut(auth);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h4 m-0">Admin · Imóveis</h1>
        <Button variant="outline-secondary" onClick={doLogout}>
          Sair
        </Button>
      </div>

      {error ? (
        <Alert variant="danger" className="py-2">
          {error}
        </Alert>
      ) : null}

      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <div className="card">
            <div className="card-body">
              <h2 className="h6">Cadastrar imóvel</h2>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="venda">Venda</option>
                    <option value="aluguel">Aluguel</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ex: Casa 3 quartos"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Preço (opcional)</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="450000"
                    min="0"
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Descrição (1 linha por item)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={descriptionText}
                    onChange={(e) => setDescriptionText(e.target.value)}
                    placeholder="Ex:\n3 quartos\n2 banheiros\nGaragem"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Check
                    type="checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                    label="Ativo (aparece no site)"
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Imagem de capa</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setImgCapaFile(e.target.files?.[0] || null)
                    }
                    required
                  />
                  <Form.Text className="text-muted">
                    A imagem será comprimida automaticamente.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Imagens do carrossel (opcional)</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) =>
                      setImgCarouselFiles(Array.from(e.target.files || []))
                    }
                  />
                  <Form.Text className="text-muted">
                    Recomendado: 5–15 fotos por imóvel.
                  </Form.Text>
                </Form.Group>

                <Button
                  type="submit"
                  disabled={saving || !canSave}
                  className="w-100"
                >
                  {saving ? "Salvando..." : "Salvar"}
                </Button>
                {progress ? (
                  <div className="mt-2 text-muted" style={{ fontSize: 13 }}>
                    {progress}
                  </div>
                ) : null}
              </Form>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h2 className="h6 m-0">Imóveis cadastrados</h2>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={load}
                  disabled={loading}
                >
                  Atualizar
                </Button>
              </div>
              {loading ? <p>Carregando...</p> : null}
              {!loading && !items.length ? (
                <p>Nenhum imóvel cadastrado.</p>
              ) : null}

              {!loading && items.length ? (
                <Table responsive size="sm" className="align-middle">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Tipo</th>
                      <th>Ativo</th>
                      <th>Fotos</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((it) => (
                      <tr key={it.id}>
                        <td>{it.title}</td>
                        <td>{it.type}</td>
                        <td>{it.active ? "Sim" : "Não"}</td>
                        <td>
                          {(it.imgCarouselUrls?.length || 0) +
                            (it.imgCapaUrl ? 1 : 0)}
                        </td>
                        <td className="text-end">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => onDelete(it)}
                          >
                            Excluir
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminImoveis;
