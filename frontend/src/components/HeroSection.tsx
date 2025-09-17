import { useState } from "react";
import heroImage from "@/assets/hero-eye-examination.jpg";

export const HeroSection = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      console.log("Dropped file:", file);
      // handle upload logic here
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      console.log("Selected file:", file);
      // handle upload logic here
    }
  };

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

          {/* Drag and Drop area */}
          <div
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
              dragActive
                ? "border-primary bg-primary/10"
                : "border-gray-300 hover:border-primary"
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
            >
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="text-lg font-medium text-gray-700">
                Drag & drop your image here
              </span>
              <span className="text-sm text-gray-500">
                or click to select from your device
              </span>
            </label>
          </div>
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
