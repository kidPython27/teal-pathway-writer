
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";

// Pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Essays from "./pages/Essays";
import SOP from "./pages/SOP";
import VisaInfo from "./pages/VisaInfo";
import FinancialAid from "./pages/FinancialAid";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/sop" element={<SOP />} />
            <Route path="/visa-info" element={<VisaInfo />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
