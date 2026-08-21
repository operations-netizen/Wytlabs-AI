import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import WytlabsAI from './pages/WytlabsAI';
import Contact from './pages/Contact';

/**
 * Route architecture.
 *
 * The product page lives at `/ai` — a short, clean path that sits naturally
 * under the existing wytlabs.com information architecture (wytlabs.com/ai) and
 * leaves room for sibling product routes later. `/` redirects there so the
 * standalone dev/preview build opens straight onto the page. `/contact` is
 * the destination for every "Talk to Wytlabs" call to action.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ai" element={<WytlabsAI />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/ai" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
