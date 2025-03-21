
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const ProgressIndicator: React.FC = () => {
  const progress = 67;
  
  // Sections and their completion status
  const sections = [
    { id: "personal", name: "Personal Details", complete: true },
    { id: "academic", name: "Academic History", complete: true },
    { id: "work", name: "Work Experience", complete: true },
    { id: "test", name: "Test Scores", complete: false },
    { id: "goals", name: "Goals", complete: false },
    { id: "essays", name: "Essays", complete: false }
  ];
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Application Progress</h3>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>
      
      <div className="space-y-1.5">
        {sections.map((section) => (
          <div key={section.id} className="flex items-center gap-2">
            <div 
              className={cn(
                "w-4 h-4 rounded-full flex items-center justify-center transition-colors",
                section.complete ? "bg-primary" : "bg-muted border border-border"
              )}
            >
              {section.complete && (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="10" 
                  height="10" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary-foreground"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <span 
              className={cn(
                "text-xs",
                section.complete ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {section.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
