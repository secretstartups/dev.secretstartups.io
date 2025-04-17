import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import Pricing from "./components/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HashRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route
        path="/"
        element={
          <Layout>
            <Index />
          </Layout>
        }
          />
          <Route
        path="/solutions"
        element={
          <Layout>
            <Solutions />
          </Layout>
        }
          />
          <Route
        path="/products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
          />
          <Route
        path="/pricing"
        element={
          <Layout>
            <Pricing />
          </Layout>
        }
          />
          <Route
        path="/faq"
        element={
          <Layout>
            <FAQPage />
          </Layout>
        }
          />
          <Route
        path="/privacy-policy"
        element={
            <PrivacyPolicyPage />
        }
          />
          <Route
        path="/terms-of-service"
        element={
          <Layout>
            <TermsOfServicePage />
          </Layout>
        }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
          />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
