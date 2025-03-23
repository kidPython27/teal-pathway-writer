
import React, { useState } from "react";
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
  LogOut,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { UserProgress } from "@/components/UserProgress";
import { ProfileCompletion } from "@/components/ProfileCompletion";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

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
      <Sidebar className="border-r w-1/5">
        <SidebarHeader className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-semibold">MA</span>
            </div>
            <h1 className="text-lg font-semibold">ApplyMaster</h1>
          </div>
          <SidebarTrigger className="md:hidden" />
        </SidebarHeader>
        <SidebarContent className="px-3 py-3">
          <div className="flex justify-center py-4">
            <ProfileCompletion />
          </div>
          <div className="mt-6">
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
        <SidebarFooter className="px-3 py-3 border-t">
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

      <div className="flex-1 flex flex-col overflow-hidden">
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
        
        <div className="flex flex-row w-full overflow-hidden flex-1">
          <main className="w-full transition-all duration-300 ease-in-out p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
      
      <Collapsible 
        open={isRightSidebarOpen} 
        onOpenChange={setIsRightSidebarOpen} 
        className="border-l bg-accent/50 h-full w-1/5"
      >
        <div className="relative h-full">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-4 top-6 z-10 h-8 w-8 rounded-full border bg-background shadow-md"
            >
              {isRightSidebarOpen ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="h-full data-[state=closed]:hidden overflow-auto" forceMount>
            <div className="px-4 py-6">
              <UserProgress />
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
};

export default AppLayout;
