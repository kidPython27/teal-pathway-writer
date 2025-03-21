
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  Eye, 
  Download, 
  Save,
  FileText,
  Sparkles,
  Copy 
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const SOP: React.FC = () => {
  const handlePreview = () => {
    toast.info("Opening SOP preview");
  };
  
  const handleSave = () => {
    toast.success("SOP saved successfully");
  };
  
  const handleGenerate = () => {
    toast.success("SOP section generated successfully");
  };
  
  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl animate-fade-in">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Statement of Purpose Builder</CardTitle>
                <CardDescription>
                  Create a compelling statement of purpose for your application
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handlePreview}>
                  <Eye className="h-4 w-4 mr-1" /> Preview
                </Button>
                <Button variant="outline" size="sm" onClick={handleSave}>
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-1" /> Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="editor" className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-6">
                <TabsTrigger value="editor" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  SOP Editor
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  AI Assistant
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-medium">Introduction</h3>
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> Generate
                    </Button>
                  </div>
                  <Textarea 
                    placeholder="Write your introduction here..." 
                    className="min-h-[150px]"
                    defaultValue="As a software engineer with five years of experience at Google, I have developed a deep technical expertise in building scalable systems that serve millions of users. Through my professional journey, I've discovered a passion for the intersection of technology and business strategy, which has led me to seek an MBA degree to complement my technical background."
                  />
                  
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-medium">Academic Background</h3>
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-primary" onClick={handleGenerate}>
                      <Sparkles className="h-3.5 w-3.5" /> Generate
                    </Button>
                  </div>
                  <Textarea 
                    placeholder="Write your academic background here..." 
                    className="min-h-[150px]"
                    defaultValue="I completed my Bachelor of Science in Computer Science from the University of California, Berkeley, where I graduated with a 3.8 GPA and honors. During my time at Berkeley, I participated in research projects focused on machine learning applications, which sparked my interest in how technology can be leveraged to solve complex business problems."
                  />
                  
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-medium">Professional Experience</h3>
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> Generate
                    </Button>
                  </div>
                  <Textarea 
                    placeholder="Write your professional experience here..." 
                    className="min-h-[150px]"
                  />
                  
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-medium">Career Goals</h3>
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> Generate
                    </Button>
                  </div>
                  <Textarea 
                    placeholder="Write your career goals here..." 
                    className="min-h-[150px]"
                  />
                  
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-medium">Why This Program</h3>
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> Generate
                    </Button>
                  </div>
                  <Textarea 
                    placeholder="Write why you're interested in this program..." 
                    className="min-h-[150px]"
                  />
                  
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-medium">Conclusion</h3>
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> Generate
                    </Button>
                  </div>
                  <Textarea 
                    placeholder="Write your conclusion here..." 
                    className="min-h-[150px]"
                  />
                  
                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={handleSave}>
                      Save Draft
                    </Button>
                    <Button onClick={handlePreview}>
                      Preview SOP
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ai">
                <div className="space-y-6">
                  <Card className="bg-accent/30 border-dashed">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">AI Assistant</CardTitle>
                      <CardDescription>
                        Use our AI assistant to help you craft a compelling SOP
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border">
                          <h4 className="font-medium text-sm mb-2">SOP Structure Recommendation</h4>
                          <ol className="list-decimal pl-5 space-y-1.5 text-sm">
                            <li>
                              <strong>Introduction (10%):</strong> Begin with a compelling hook that showcases your passion for your field and briefly introduces your journey.
                            </li>
                            <li>
                              <strong>Academic Background (20%):</strong> Highlight relevant coursework, research, and achievements that demonstrate your preparedness.
                            </li>
                            <li>
                              <strong>Professional Experience (25%):</strong> Detail key accomplishments, leadership roles, and skills acquired.
                            </li>
                            <li>
                              <strong>Career Goals (20%):</strong> Clearly articulate your short and long-term goals, showing how they align with your previous experiences.
                            </li>
                            <li>
                              <strong>Why This Program (20%):</strong> Explain specific aspects of the program that align with your goals, mentioning professors, courses, or initiatives.
                            </li>
                            <li>
                              <strong>Conclusion (5%):</strong> Summarize your fit for the program and what you'll contribute to the community.
                            </li>
                          </ol>
                          <div className="mt-3">
                            <Button variant="outline" size="sm" className="gap-1">
                              <Copy className="h-3.5 w-3.5" /> Apply Structure
                            </Button>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border">
                          <h4 className="font-medium text-sm mb-2">Common SOP Mistakes to Avoid</h4>
                          <ul className="list-disc pl-5 space-y-1.5 text-sm">
                            <li>Being too generic or using cliché statements</li>
                            <li>Focusing too much on achievements without connecting them to your goals</li>
                            <li>Not explaining gaps or weaknesses in your profile</li>
                            <li>Using overly complex language or jargon</li>
                            <li>Exceeding the word limit or ignoring formatting guidelines</li>
                            <li>Not customizing the SOP for each program you're applying to</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border">
                          <h4 className="font-medium text-sm mb-2">Generate Content</h4>
                          <p className="text-sm mb-3">
                            Let our AI help you generate content for specific sections of your SOP based on your profile information.
                          </p>
                          <div className="flex flex-col gap-2">
                            <Button className="justify-start gap-2" variant="outline">
                              <Sparkles className="h-4 w-4" />
                              Generate Introduction
                            </Button>
                            <Button className="justify-start gap-2" variant="outline">
                              <Sparkles className="h-4 w-4" />
                              Generate Academic Background
                            </Button>
                            <Button className="justify-start gap-2" variant="outline">
                              <Sparkles className="h-4 w-4" />
                              Generate Professional Experience
                            </Button>
                            <Button className="justify-start gap-2" variant="outline">
                              <Sparkles className="h-4 w-4" />
                              Generate Career Goals
                            </Button>
                            <Button className="justify-start gap-2" variant="outline">
                              <Sparkles className="h-4 w-4" />
                              Generate Program Fit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default SOP;
