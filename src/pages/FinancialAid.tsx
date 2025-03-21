
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  Award, 
  BookOpen, 
  Building, 
  Briefcase, 
  Calculator,
  ExternalLink,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FinancialAid: React.FC = () => {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Financial Aid & Scholarships
            </CardTitle>
            <CardDescription>
              Explore financial aid options and scholarships for your MBA/MS program
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="scholarships" className="w-full">
              <TabsList className="grid grid-cols-4 w-full mb-6">
                <TabsTrigger value="scholarships" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Scholarships
                </TabsTrigger>
                <TabsTrigger value="loans" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Loans
                </TabsTrigger>
                <TabsTrigger value="fellowships" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Fellowships
                </TabsTrigger>
                <TabsTrigger value="calculator" className="flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  Cost Calculator
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="scholarships">
                <div className="space-y-6">
                  <div className="bg-accent/50 p-4 rounded-lg border">
                    <h3 className="font-medium mb-2">Merit-Based Scholarships</h3>
                    <p className="text-sm mb-4">
                      Merit-based scholarships are awarded based on academic excellence, professional achievements, leadership potential, and other outstanding qualities. These scholarships don't need to be repaid.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Dean's Merit Scholarship</h4>
                            <p className="text-sm text-muted-foreground">Up to full tuition coverage</p>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Apply
                          </Button>
                        </div>
                        <p className="text-sm mt-2">
                          Awarded to top applicants based on academic excellence, professional achievements, and leadership potential.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Future Leaders Scholarship</h4>
                            <p className="text-sm text-muted-foreground">$20,000 - $50,000</p>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Apply
                          </Button>
                        </div>
                        <p className="text-sm mt-2">
                          Recognizes applicants who have demonstrated exceptional leadership abilities and potential for future impact.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Diversity & Inclusion Scholarship</h4>
                            <p className="text-sm text-muted-foreground">$15,000 - $40,000</p>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Apply
                          </Button>
                        </div>
                        <p className="text-sm mt-2">
                          Supports students from underrepresented backgrounds who demonstrate academic excellence and leadership potential.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent/50 p-4 rounded-lg border">
                    <h3 className="font-medium mb-2">External Scholarships</h3>
                    <p className="text-sm mb-4">
                      External scholarships are offered by organizations outside of the university, including corporations, foundations, and professional associations.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Forte Foundation Fellowship</h4>
                            <p className="text-sm text-muted-foreground">Varies, up to full tuition</p>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Apply
                          </Button>
                        </div>
                        <p className="text-sm mt-2">
                          For women pursuing MBA degrees who demonstrate exceptional leadership potential.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Goldman Sachs MBA Fellowship</h4>
                            <p className="text-sm text-muted-foreground">$35,000 + Summer Internship</p>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Apply
                          </Button>
                        </div>
                        <p className="text-sm mt-2">
                          For first-year MBA students who identify as Black, Hispanic/Latino, Native American, or women, and are interested in financial services.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Fulbright Foreign Student Program</h4>
                            <p className="text-sm text-muted-foreground">Full tuition + stipend</p>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Apply
                          </Button>
                        </div>
                        <p className="text-sm mt-2">
                          For international students pursuing graduate degrees in the United States.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="loans">
                <div className="space-y-6">
                  <div className="bg-accent/50 p-4 rounded-lg border">
                    <h3 className="font-medium mb-2">Federal Student Loans (US Students)</h3>
                    <p className="text-sm mb-4">
                      Federal loans are available to US citizens and permanent residents and offer competitive interest rates and flexible repayment options.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border">
                        <h4 className="font-medium">Direct Unsubsidized Loans</h4>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Interest Rate</p>
                            <p className="text-sm font-medium">5.28%</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Annual Limit</p>
                            <p className="text-sm font-medium">$20,500</p>
                          </div>
                        </div>
                        <p className="text-sm mt-3">
                          Available to graduate students regardless of financial need. Interest accrues during all periods.
                        </p>
                        <Separator className="my-3" />
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">Application: FAFSA</p>
                          <Button variant="outline" size="sm" className="h-7 gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Learn More
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <h4 className="font-medium">Direct PLUS Loans</h4>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Interest Rate</p>
                            <p className="text-sm font-medium">6.28%</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Annual Limit</p>
                            <p className="text-sm font-medium">Up to cost of attendance</p>
                          </div>
                        </div>
                        <p className="text-sm mt-3">
                          Available to graduate students and requires a credit check. Can cover the full cost of attendance minus other financial aid.
                        </p>
                        <Separator className="my-3" />
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">Application: FAFSA + PLUS application</p>
                          <Button variant="outline" size="sm" className="h-7 gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent/50 p-4 rounded-lg border">
                    <h3 className="font-medium mb-2">Private Student Loans</h3>
                    <p className="text-sm mb-4">
                      Private loans are offered by banks and private lenders. Terms and interest rates vary based on the lender and your credit history.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border">
                        <h4 className="font-medium">MBA-Specific Private Loans</h4>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Interest Rates</p>
                            <p className="text-sm font-medium">Fixed: 4.5% - 11%, Variable: 3.5% - 10.5%</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Annual Limit</p>
                            <p className="text-sm font-medium">Up to total cost of attendance</p>
                          </div>
                        </div>
                        <p className="text-sm mt-3">
                          Designed specifically for MBA students. May offer more flexible terms and lower interest rates compared to general private student loans.
                        </p>
                        <Separator className="my-3" />
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">Popular lenders: Sallie Mae, Discover, CommonBond</p>
                          <Button variant="outline" size="sm" className="h-7 gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Compare Options
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-md border">
                        <h4 className="font-medium">International Student Loans</h4>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Interest Rates</p>
                            <p className="text-sm font-medium">Fixed: 6% - 13%, Variable: 5% - 12%</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Co-signer</p>
                            <p className="text-sm font-medium">Required (US citizen/resident)</p>
                          </div>
                        </div>
                        <p className="text-sm mt-3">
                          Loans for international students typically require a US citizen or permanent resident co-signer. Some lenders offer co-signer release options after a period of on-time payments.
                        </p>
                        <Separator className="my-3" />
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">Popular lenders: MPOWER, Prodigy Finance</p>
                          <Button variant="outline" size="sm" className="h-7 gap-1">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Compare Options
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="fellowships">
                <div className="space-y-4">
                  <p className="text-sm">
                    Fellowships are typically merit-based awards that provide financial support for graduate study, research, or professional development. Unlike loans, fellowships don't need to be repaid.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Research Fellowships</CardTitle>
                        <CardDescription>For students focusing on research</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Data Science Research Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$25,000 + research stipend</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Sustainability Research Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$20,000 + research stipend</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Healthcare Innovation Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$30,000 + research stipend</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Teaching Fellowships</CardTitle>
                        <CardDescription>For students interested in academia</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Business Analytics Teaching Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$15,000 + tuition reduction</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Marketing Research Teaching Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$18,000 + tuition reduction</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Finance Teaching Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$20,000 + tuition reduction</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Industry Fellowships</CardTitle>
                        <CardDescription>Sponsored by companies and organizations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">McKinsey & Company Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$25,000 + internship opportunity</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Google MBA Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$30,000 + internship opportunity</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Amazon MBA Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$30,000 + internship opportunity</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Entrepreneurship Fellowships</CardTitle>
                        <CardDescription>For students with entrepreneurial ambitions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Startup Innovation Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$20,000 + mentorship</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Social Entrepreneurship Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$15,000 + mentorship</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">Tech Venture Fellowship</h4>
                                <p className="text-xs text-muted-foreground">$25,000 + seed funding</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7">Apply</Button>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Fellowship Guide
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="calculator">
                <div className="bg-accent/40 p-6 rounded-lg border">
                  <h3 className="text-center mb-6">MBA/MS Program Cost Calculator</h3>
                  <p className="text-sm text-center mb-6">
                    Use this calculator to estimate the total cost of your MBA/MS program and explore financing options.
                  </p>
                  
                  <div className="max-w-md mx-auto bg-white p-6 rounded-lg border">
                    <p className="text-center text-muted-foreground text-sm mb-4">
                      Cost calculator will be available soon.
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" disabled>Calculate Cost</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default FinancialAid;
