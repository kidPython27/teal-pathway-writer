
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, User } from "lucide-react";
import { ProgressIndicator } from "@/components/ProgressIndicator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">MBA/MS Application Writer</h1>
          <p className="text-xl text-muted-foreground">
            Your complete solution for crafting perfect graduate school applications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 hover-scale">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">Complete Your Profile</h3>
            <p className="text-sm text-muted-foreground">Create your academic and professional profile to get college recommendations</p>
          </div>

          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 hover-scale">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">Write Essays</h3>
            <p className="text-sm text-muted-foreground">Craft compelling essays that showcase your unique skills and experiences</p>
          </div>

          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 hover-scale">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">Build Your SOP</h3>
            <p className="text-sm text-muted-foreground">Create a cohesive statement of purpose that impresses admissions committees</p>
          </div>
        </div>

        <div className="mx-auto max-w-md space-y-6">
          <div className="glass-card p-6">
            <ProgressIndicator />
          </div>
          
          <Button asChild size="lg" className="w-full">
            <Link to="/dashboard" className="flex items-center justify-center gap-2">
              Get Started <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
