
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleSave = () => {
    toast.success("Profile section saved successfully");
  };
  
  return (
    <AppLayout>
      <Card className="max-w-4xl animate-fade-in">
        <CardHeader>
          <CardTitle>Candidate Profile</CardTitle>
          <CardDescription>
            Complete your profile information for your MBA/MS applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="work">Work</TabsTrigger>
              <TabsTrigger value="test">Test Scores</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter your address" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" placeholder="State/Province" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip/Postal Code</Label>
                    <Input id="zipCode" placeholder="Zip/Postal Code" />
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button onClick={handleSave}>Save & Continue</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="academic" className="pt-6">
              <div className="space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="education-1">
                    <AccordionTrigger>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Bachelor of Science, Computer Science</span>
                        <span className="text-sm text-muted-foreground">University of California, Berkeley (2015-2019)</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="degree">Degree</Label>
                            <Input id="degree" defaultValue="Bachelor of Science" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="major">Major</Label>
                            <Input id="major" defaultValue="Computer Science" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="university">University/College</Label>
                            <Input id="university" defaultValue="University of California, Berkeley" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gpa">GPA</Label>
                            <Input id="gpa" defaultValue="3.8" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="startDate">Start Date</Label>
                            <Input id="startDate" defaultValue="09/2015" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="endDate">End Date</Label>
                            <Input id="endDate" defaultValue="06/2019" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="academicAchievements">Academic Achievements</Label>
                          <Textarea 
                            id="academicAchievements" 
                            defaultValue="Dean's List (all semesters), Graduated Summa Cum Laude, Member of Phi Beta Kappa Honor Society"
                            rows={4}
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <Button variant="outline" className="w-full">+ Add Another Education</Button>
                
                <div className="pt-4 flex justify-end">
                  <Button onClick={handleSave}>Save & Continue</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="work" className="pt-6">
              <div className="space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="work-1">
                    <AccordionTrigger>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Software Engineer</span>
                        <span className="text-sm text-muted-foreground">Google, Mountain View (2019-Present)</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="jobTitle">Job Title</Label>
                            <Input id="jobTitle" defaultValue="Software Engineer" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" defaultValue="Google" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" defaultValue="Mountain View, CA" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Input id="industry" defaultValue="Technology" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="workStartDate">Start Date</Label>
                            <Input id="workStartDate" defaultValue="07/2019" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="workEndDate">End Date</Label>
                            <Input id="workEndDate" defaultValue="Present" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="responsibilities">Responsibilities and Achievements</Label>
                          <Textarea 
                            id="responsibilities" 
                            defaultValue="Led a team of 5 engineers to redesign the user authentication system, resulting in a 30% improvement in login speed and enhanced security features. Developed and implemented new features for Google Search, focusing on machine learning integrations."
                            rows={5}
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <Button variant="outline" className="w-full">+ Add Another Work Experience</Button>
                
                <div className="pt-4 flex justify-end">
                  <Button onClick={handleSave}>Save & Continue</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="test">
              <p className="text-sm text-muted-foreground py-10 text-center">
                Test scores section content will be available here
              </p>
            </TabsContent>
            
            <TabsContent value="goals">
              <p className="text-sm text-muted-foreground py-10 text-center">
                Goals section content will be available here
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </AppLayout>
  );
};

export default Profile;
