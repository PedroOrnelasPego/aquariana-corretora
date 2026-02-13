import { useEffect, useMemo, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth, isFirebaseEnabled } from "../../firebase/firebase";
import { isAdminUser } from "../../firebase/admin";

const AdminLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isFirebaseEnabled || !auth) {
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const isAdmin = useMemo(() => isAdminUser(user), [user]);

  if (!isFirebaseEnabled) {
    return (
      <div className="container py-5">
        <h1 className="h4">Admin</h1>
        <p>
          Firebase não está configurado. Configure as variáveis{" "}
          <b>VITE_FIREBASE_*</b>e <b>VITE_ADMIN_EMAIL</b>.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container py-5">
        <p>Carregando...</p>
      </div>
    );
  }

  const goingToLogin = location.pathname.startsWith("/admin/login");
  if (!user && !goingToLogin) {
    return <Navigate to="/admin/login" replace />;
  }

  if (user && !isAdmin) {
    return (
      <div className="container py-5">
        <h1 className="h4">Acesso negado</h1>
        <p>Este usuário não está autorizado como admin.</p>
      </div>
    );
  }

  return <Outlet />;
};

export default AdminLayout;
