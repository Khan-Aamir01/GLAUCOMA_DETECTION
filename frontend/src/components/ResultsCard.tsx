import { Card, CardContent } from "@/components/ui/card";

interface ResultsCardProps {
  imageUrl: string;           // preview of uploaded image
  prediction: number;         // 0 or 1 from API
}

export const ResultsCard = ({ imageUrl, prediction }: ResultsCardProps) => {
  // determine message based on prediction
  const isGlaucoma = prediction === 1;

  return (
    <section id="result" className="container py-16">
      <Card className="bg-card border-border shadow-medical">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-muted text-2xl font-medium font-bold uppercase tracking-wide text-white">
                Results
              </p>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Status:{" "}
                  <span className={isGlaucoma ? "text-red-600" : "text-green-600"}>
                    {isGlaucoma ? "⚠️ Possible Glaucoma Detected" : "✅ No Glaucoma Detected"}
                  </span>
                </h3>
                {isGlaucoma ? (
                  <p className="text-destructive font-medium">
                    “The analysis suggests signs consistent with glaucoma in the uploaded image.
                    This is an AI-generated risk assessment and not a medical diagnosis.
                    We strongly recommend consulting an ophthalmologist or eye-care specialist for a comprehensive evaluation and confirmation.”
                  </p>
                ) : <p className="text-destructive font-medium">
                  “The analysis indicates no signs of glaucoma in the uploaded image.
                  However, AI predictions are not a substitute for a professional diagnosis. If you have concerns
                  about your vision or eye health, please consult a qualified ophthalmologist.
                </p>}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-subtle">
                <img
                  src={imageUrl}
                  alt="Uploaded retinal image"
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
