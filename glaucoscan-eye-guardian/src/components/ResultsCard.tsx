import { Card, CardContent } from "@/components/ui/card";
import retinalImage from "@/assets/retinal-analysis.jpg";

export const ResultsCard = () => {
  return (
    <section className="container py-16">
      <Card className="bg-card border-border shadow-medical">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-muted text-sm font-medium uppercase tracking-wide text-gray-100">
                Results
              </p>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Cup-to-Disc Ratio (CDR): <span className="text-primary">0.72</span>
                </h3>
                <p className="text-destructive font-medium">Risk: High</p>
                <p className="text-sm text-muted-foreground text-gray-100">
                  A CDR of 0.72 indicates elevated glaucoma risk. Please consult an ophthalmologist for comprehensive evaluation.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-subtle">
                <img 
                  src={retinalImage} 
                  alt="Retinal analysis showing cup-to-disc ratio measurement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};