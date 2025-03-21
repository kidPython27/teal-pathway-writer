
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Save, 
  Download, 
  Check, 
  AlertCircle,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

const Essays: React.FC = () => {
  const [activeEssay, setActiveEssay] = useState("why-mba");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const essays = [
    {
      id: "why-mba",
      title: "Why MBA",
      prompt: "Explain why you want to pursue an MBA at this time in your career, and how this degree will help you achieve your professional goals. (500 words)",
      status: "in-progress",
      wordCount: 350,
      wordLimit: 500,
      lastSaved: "Today at 2:30 PM"
    },
    {
      id: "career-goals",
      title: "Career Goals",
      prompt: "Describe your short and long-term career goals. How will an MBA from our program help you achieve these goals? (750 words)",
      status: "draft",
      wordCount: 250,
      wordLimit: 750,
      lastSaved: "Yesterday at 4:15 PM"
    },
    {
      id: "leadership",
      title: "Leadership Experience",
      prompt: "Tell us about a time when you demonstrated leadership and overcame obstacles by collaborating with others. (500 words)",
      status: "not-started",
      wordCount: 0,
      wordLimit: 500,
      lastSaved: null
    }
  ];
  
  const handleGenerateStoryline = () => {
    setIsGenerating(true);
    
    // Simulate API call for AI generation
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Storyline generated successfully");
    }, 2000);
  };
  
  const handleSaveEssay = () => {
    toast.success("Essay saved successfully");
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>;
      case "draft":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Draft</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };
  
  const currentEssay = essays.find(essay => essay.id === activeEssay);
  
  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl animate-fade-in">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Application Essays</CardTitle>
                <CardDescription>
                  Create compelling essays for your application
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleSaveEssay}>
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" /> Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={activeEssay} onValueChange={setActiveEssay} className="w-full">
              <TabsList className="grid grid-cols-3 w-full">
                {essays.map((essay) => (
                  <TabsTrigger key={essay.id} value={essay.id} className="flex items-center justify-between">
                    <span>{essay.title}</span>
                    {getStatusBadge(essay.status)}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {essays.map((essay) => (
                <TabsContent key={essay.id} value={essay.id} className="pt-6">
                  <div className="space-y-6">
                    <div className="bg-accent/50 p-4 rounded-lg border">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium mb-1">Essay Prompt</h3>
                          <p className="text-sm">{essay.prompt}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button 
                          onClick={handleGenerateStoryline} 
                          disabled={isGenerating}
                          className="gap-1"
                        >
                          {isGenerating ? (
                            <>
                              <div className="loading-bar w-4 h-1 mr-1"></div>
                              Generating...
                            </>
                          ) : (
                            <>
                              <Sparkles className="h-4 w-4" />
                              Generate Storyline
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className={essay.wordCount > essay.wordLimit ? "text-red-500" : ""}>
                          {essay.wordCount} / {essay.wordLimit} words
                        </span>
                      </div>
                    </div>
                    
                    <Textarea 
                      placeholder="Write your essay here..." 
                      className="min-h-[300px] font-inter"
                      defaultValue={essay.status !== "not-started" ? "During my tenure at Google, I've had the opportunity to lead innovative projects and collaborate with talented teams across the globe. While my technical expertise has grown tremendously, I've recognized the need to complement my engineering background with business acumen to achieve my goal of leading product innovation at the intersection of technology and business strategy." : ""}
                    />
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm">
                        {essay.lastSaved ? (
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Check className="h-3.5 w-3.5" /> Last saved: {essay.lastSaved}
                          </span>
                        ) : (
                          <span className="text-muted-foreground flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" /> Not saved yet
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Save Draft
                        </Button>
                        <Button size="sm">
                          Mark as Final
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        
        {currentEssay && currentEssay.status !== "not-started" && (
          <Card className="bg-accent/30 border-dashed">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                AI-Generated Storyline
              </CardTitle>
              <CardDescription>
                Use this storyline as inspiration for your essay
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-3">
                <p>Consider structuring your essay around these key points:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Begin with a specific moment from your work at Google that sparked your interest in business strategy.</li>
                  <li>Explain how your technical background has provided a strong foundation, but also highlight the specific gaps in your knowledge that an MBA would fill.</li>
                  <li>Discuss a project where you collaborated with the business team, emphasizing the insights you gained and the challenges you faced.</li>
                  <li>Connect your past experiences with your future goals, explaining how this MBA program specifically aligns with your career trajectory.</li>
                  <li>Conclude by painting a picture of how you would contribute to the MBA community and leverage the degree after graduation.</li>
                </ol>
                <div className="pt-2">
                  <Button variant="outline" size="sm">
                    Apply to Essay
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
};

export default Essays;
