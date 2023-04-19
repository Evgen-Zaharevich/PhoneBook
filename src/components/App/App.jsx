import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Phonebook } from 'pages/Phonebook';
import { NotFound } from 'pages/NotFound';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="Phonebook" element={<Phonebook />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
