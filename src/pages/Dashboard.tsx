
import React from "react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, FileText, Newspaper, User, Clock, ClipboardCheck } from "lucide-react";

const Dashboard: React.FC = () => {
  const profileSections = [
    { name: "Personal Details", progress: 100, route: "/profile" },
    { name: "Academic History", progress: 100, route: "/profile" },
    { name: "Work Experience", progress: 100, route: "/profile" },
    { name: "Test Scores", progress: 50, route: "/profile" },
    { name: "Goals", progress: 25, route: "/profile" },
  ];
  
  const essayProgress = [
    { name: "Why MBA", progress: 70, route: "/essays" },
    { name: "Career Goals", progress: 30, route: "/essays" },
    { name: "Leadership Experience", progress: 0, route: "/essays" },
  ];

  const upcomingDeadlines = [
    { school: "Stanford University", program: "MBA", deadline: "Jan 5, 2024" },
    { school: "Harvard Business School", program: "MBA", deadline: "Jan 10, 2024" },
    { school: "MIT Sloan", program: "MBA", deadline: "Jan 18, 2024" },
  ];

  return (
    <AppLayout>
      <div className="space-y-6 w-full">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2>Application Overview</h2>
            <div className="flex items-center space-x-1 text-sm font-medium text-primary">
              <span>Overall Progress</span>
              <span className="ml-2">67%</span>
            </div>
          </div>
          <Progress value={67} className="h-2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="animate-fade-in">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base font-medium">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </CardTitle>
                <CardDescription>Complete your candidate profile</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-3">
                  {profileSections.map((section, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{section.name}</span>
                        <span className="text-muted-foreground">{section.progress}%</span>
                      </div>
                      <Progress value={section.progress} className="h-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link to="/profile">
                    Continue <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="animate-fade-in [animation-delay:100ms]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  Essays
                </CardTitle>
                <CardDescription>Write your application essays</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-3">
                  {essayProgress.map((essay, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{essay.name}</span>
                        <span className="text-muted-foreground">{essay.progress}%</span>
                      </div>
                      <Progress value={essay.progress} className="h-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link to="/essays">
                    Continue <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="animate-fade-in [animation-delay:200ms]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base font-medium">
                  <Newspaper className="w-4 h-4 mr-2" />
                  SOP Builder
                </CardTitle>
                <CardDescription>Create your statement of purpose</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>SOP Draft</span>
                      <span className="text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} className="h-1" />
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    Combine your essays and profile data into a cohesive statement of purpose.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link to="/sop">
                    Continue <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="animate-fade-in [animation-delay:300ms]">
              <CardHeader>
                <CardTitle className="flex items-center text-base font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, i) => (
                    <div key={i} className="flex justify-between pb-3 border-b last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium">{deadline.school}</p>
                        <p className="text-sm text-muted-foreground">{deadline.program}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{deadline.deadline}</p>
                        <p className="text-xs text-muted-foreground">Deadline</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in [animation-delay:400ms]">
              <CardHeader>
                <CardTitle className="flex items-center text-base font-medium">
                  <ClipboardCheck className="w-4 h-4 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="h-auto flex-col py-6 space-y-2 text-primary-foreground">
                    <User className="h-6 w-6" />
                    <span>Edit Profile</span>
                  </Button>
                  <Button className="h-auto flex-col py-6 space-y-2 text-primary-foreground">
                    <FileText className="h-6 w-6" />
                    <span>Write Essays</span>
                  </Button>
                  <Button className="h-auto flex-col py-6 space-y-2 text-primary-foreground">
                    <BookOpen className="h-6 w-6" />
                    <span>Resources</span>
                  </Button>
                  <Button className="h-auto flex-col py-6 space-y-2 text-primary-foreground">
                    <Newspaper className="h-6 w-6" />
                    <span>Build SOP</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
