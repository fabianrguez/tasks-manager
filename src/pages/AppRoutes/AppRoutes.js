import { Boards } from 'pages';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route index element={<Boards />}></Route>
        <Route path="*" element={<h1>There's nothing here!</h1>}></Route>
      </Routes>
    </main>
  );
}
