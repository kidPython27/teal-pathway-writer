
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, MapPin, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const UserProgress: React.FC = () => {
  const colleges = [
    {
      name: "Stanford University",
      program: "MBA, MS Computer Science",
      ranking: "#1",
      location: "California, USA",
      testScores: "GMAT: 730, GPA: 3.8",
      shortlisted: true
    },
    {
      name: "Harvard Business School",
      program: "MBA",
      ranking: "#2",
      location: "Massachusetts, USA",
      testScores: "GMAT: 735, GPA: 3.7",
      shortlisted: false
    },
    {
      name: "Wharton School",
      program: "MBA Finance",
      ranking: "#3",
      location: "Pennsylvania, USA",
      testScores: "GMAT: 720, GPA: 3.7",
      shortlisted: false
    },
    {
      name: "MIT Sloan",
      program: "MBA Technology",
      ranking: "#4",
      location: "Massachusetts, USA",
      testScores: "GMAT: 725, GPA: 3.8",
      shortlisted: false
    },
  ];

  const nextTasks = [
    "Complete Personal Statement",
    "Upload GMAT score report",
    "Add 2nd recommender",
    "Draft 'Why MBA' essay"
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="glass-card p-4">
        <h2 className="text-sm font-medium mb-2">Profile Completion</h2>
        <Progress value={67} className="h-2 mb-2" />
        <div className="flex justify-between text-sm">
          <span>67% Complete</span>
          <span className="text-primary font-medium">7 days to deadline</span>
        </div>
        
        <Separator className="my-3" />
        
        <div className="mt-3">
          <h3 className="text-sm font-medium mb-2">Next tasks:</h3>
          <ul className="space-y-2">
            {nextTasks.map((task, index) => (
              <li key={index} className="flex items-center text-sm gap-2">
                <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center">
                  <Check size={12} className="text-primary" />
                </div>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium">Suggested Colleges</h2>
          <Button variant="ghost" size="sm" className="text-primary text-xs h-6 px-2">
            See All
          </Button>
        </div>

        <div className="space-y-3">
          {colleges.map((college, index) => (
            <div 
              key={index} 
              className="glass-card p-3 border hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <h3 className="font-medium text-sm">{college.name}</h3>
                    <Badge variant="outline" className="text-xs font-normal h-5 px-1">
                      {college.ranking}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{college.program}</p>
                </div>
                <Button 
                  variant={college.shortlisted ? "default" : "outline"} 
                  size="sm"
                  className={college.shortlisted ? "h-6 text-xs px-2 gap-1" : "h-6 text-xs px-2"}
                >
                  {college.shortlisted && <Check size={12} />}
                  {college.shortlisted ? "Shortlisted" : "Shortlist"}
                </Button>
              </div>
              
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-xs gap-1">
                  <MapPin size={12} className="text-muted-foreground" />
                  <span>{college.location}</span>
                </div>
                <div className="flex items-center text-xs gap-1">
                  <Star size={12} className="text-muted-foreground" />
                  <span>{college.testScores}</span>
                </div>
              </div>
              
              <div className="mt-2 text-right">
                <Button variant="ghost" size="sm" className="h-6 text-primary text-xs gap-1 px-2">
                  Details <ArrowUpRight size={12} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
