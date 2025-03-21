
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  User, 
  FileText, 
  Newspaper, 
  Globe, 
  DollarSign, 
  HelpCircle, 
  Settings, 
  LogOut 
} from "lucide-react";
import { UserProgress } from "@/components/UserProgress";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { title: "Dashboard", icon: User, url: "/" },
    { title: "Profile", icon: User, url: "/profile" },
    { title: "Essays", icon: FileText, url: "/essays" },
    { title: "SOP Builder", icon: Newspaper, url: "/sop" },
    { title: "Visa Info", icon: Globe, url: "/visa-info" },
    { title: "Financial Aid", icon: DollarSign, url: "/financial-aid" },
  ];
  
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar className="border-r">
        <SidebarHeader className="px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-semibold">MA</span>
            </div>
            <h1 className="text-lg font-semibold">ApplyMaster</h1>
          </div>
          <SidebarTrigger className="md:hidden" />
        </SidebarHeader>
        <SidebarContent className="px-4 py-4">
          <ProgressIndicator />
          <div className="mt-8">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={cn(
                      "w-full flex items-center gap-2 py-2 px-3 rounded-md transition-all",
                      location.pathname === item.url ? "bg-accent text-primary font-medium" : "hover:bg-accent"
                    )}
                    onClick={() => navigate(item.url)}
                  >
                    <item.icon size={18} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        </SidebarContent>
        <SidebarFooter className="px-4 py-4 border-t">
          <div className="flex flex-col gap-2">
            <SidebarMenuButton className="w-full flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent">
              <HelpCircle size={18} />
              <span>Help & Resources</span>
            </SidebarMenuButton>
            <SidebarMenuButton className="w-full flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent">
              <Settings size={18} />
              <span>Settings</span>
            </SidebarMenuButton>
            <SidebarMenuButton className="w-full flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent text-red-500">
              <LogOut size={18} />
              <span>Logout</span>
            </SidebarMenuButton>
          </div>
        </SidebarFooter>
      </Sidebar>

      <div className="flex-1 overflow-auto">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hidden md:flex" />
            <h1 className="text-xl font-semibold">
              {menuItems.find(item => item.url === location.pathname)?.title || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <HelpCircle size={16} className="mr-1" /> Help
            </Button>
            <Button>
              Download Package
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row w-full">
          <main className="flex-1 px-6 py-6 transition-all duration-300 ease-in-out">
            {children}
          </main>
          
          <aside className="w-full md:w-80 lg:w-96 border-l bg-accent/50 px-4 py-6 overflow-y-auto">
            <UserProgress />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
