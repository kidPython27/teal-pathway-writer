
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Globe, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisaInfo: React.FC = () => {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Visa Information
            </CardTitle>
            <CardDescription>
              Essential information about student visas for international applicants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="f1-visa">
                <AccordionTrigger>F-1 Student Visa</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      The F-1 visa is for academic students enrolled in colleges, universities, seminars, conservatories, academic high schools, and language training programs in the United States.
                    </p>
                    
                    <h4 className="font-medium">Requirements</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Acceptance at a SEVP (Student and Exchange Visitor Program) certified school</li>
                      <li>Sufficient funds to maintain your studies in the US</li>
                      <li>Ties to your home country and intent to return after completing your studies</li>
                      <li>English language proficiency</li>
                    </ul>
                    
                    <h4 className="font-medium">Application Process</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Pay the SEVIS fee</li>
                      <li>Complete Form DS-160 (Online Nonimmigrant Visa Application)</li>
                      <li>Pay the visa application fee</li>
                      <li>Schedule and attend a visa interview at a US embassy or consulate</li>
                    </ol>
                    
                    <div className="bg-accent/50 p-4 rounded-lg border mt-4">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium mb-1">Important Dates</h3>
                          <p className="text-sm">You can apply for an F-1 visa up to 120 days before the start date of your program. However, you cannot enter the US on your F-1 visa more than 30 days before your program start date.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download F-1 Visa Checklist
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="j1-visa">
                <AccordionTrigger>J-1 Exchange Visitor Visa</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      The J-1 visa is for individuals approved to participate in work-and study-based exchange visitor programs. Programs can include studying, teaching, conducting research, demonstrating special skills, or receiving on-the-job training.
                    </p>
                    
                    <h4 className="font-medium">Program Categories</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>College and University Students</li>
                      <li>Research Scholars</li>
                      <li>Short-term Scholars</li>
                      <li>Specialists</li>
                      <li>Professors</li>
                    </ul>
                    
                    <div className="bg-accent/50 p-4 rounded-lg border mt-4">
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium mb-1">Two-Year Home Residency Requirement</h3>
                          <p className="text-sm">Some J-1 visa holders are subject to the two-year home-country physical presence requirement. This means you must return to your home country for at least two years after your exchange program ends before you can apply for certain US visa types.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download J-1 Visa Checklist
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="opt-cpt">
                <AccordionTrigger>OPT and CPT Work Authorization</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h4 className="font-medium">Optional Practical Training (OPT)</h4>
                    <p>
                      OPT is temporary employment that is directly related to an F-1 student's major area of study. Eligible students can apply to receive up to 12 months of OPT employment authorization before completing their academic studies (pre-completion) and/or after completing their academic studies (post-completion).
                    </p>
                    
                    <h4 className="font-medium">Curricular Practical Training (CPT)</h4>
                    <p>
                      CPT is alternative work/study, internship, cooperative education, or any other type of required internship or practicum that is offered by sponsoring employers through cooperative agreements with the school. CPT must be an integral part of an established curriculum.
                    </p>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download OPT/CPT Guide
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="interview-tips">
                <AccordionTrigger>Visa Interview Tips</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h4 className="font-medium">Preparing for Your Visa Interview</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Be prepared to clearly articulate your academic and career plans</li>
                      <li>Demonstrate strong ties to your home country</li>
                      <li>Provide evidence of sufficient financial resources</li>
                      <li>Be concise in your answers</li>
                      <li>Practice your English if it's not your first language</li>
                      <li>Dress professionally</li>
                    </ol>
                    
                    <h4 className="font-medium">Documents to Bring</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Form DS-160 confirmation page</li>
                      <li>Valid passport</li>
                      <li>One 2x2 photograph</li>
                      <li>Form I-20 or DS-2019</li>
                      <li>SEVIS fee receipt</li>
                      <li>Visa application fee receipt</li>
                      <li>Financial documentation</li>
                      <li>Academic transcripts and standardized test scores</li>
                    </ul>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download Interview Preparation Guide
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default VisaInfo;
