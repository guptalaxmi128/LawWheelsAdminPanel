import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LayoutLoader from './components/layoutLoader/LayoutLoader';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import "./App.css";

const Login = lazy(() => import("./components/login/Login"));
const AdminLayout = lazy(() => import("./components/sidebar/Sidebar"));
const ParticularForm = lazy(() => import("./components/mdForm/ParticularForm"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<LayoutLoader />}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route 
              path="/admin/*" 
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/md-form/:id" 
              element={
                <ProtectedRoute>
                  <ParticularForm />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Toaster position="bottom-center" />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
