import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-eye-examination.jpg";

export const HeroSection = () => {
  return (
    <section className="container py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight font-manrope">
              Early Detection of{" "}
              <span className="text-primary">Glaucoma</span>{" "}
              with AI
            </h1>
            <p className="text-xl leading-relaxed bg-black/40 text-white rounded-lg p-2 inline-block">
  Upload a fundus image, get results in seconds.
</p>

          </div>
          <Button variant="hero" size="lg" className="text-lg">
            Upload Eye Image
          </Button>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-medical bg-gradient-subtle">
            <img
              src={heroImage}
              alt="Professional eye examination for glaucoma detection"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};