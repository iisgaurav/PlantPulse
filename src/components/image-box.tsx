"use client";
import MLResult from "@/components/ml-result";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MLPrediction } from "@/lib/types";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

// ML API URL - update this to your deployed API URL in production
const ML_API_URL =
  process.env.NEXT_PUBLIC_ML_API_URL || "http://localhost:8080";

export function ImageBox() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>();
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  function onImageUpload(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || !e.target.files[0]) return;
    handleFile(e.target.files[0]);
  }

  function handleFile(file: File) {
    setImageFile(file);
    toast({
      variant: "success",
      title: "Image Uploaded",
      description: `${file.name} ready for analysis`,
    });
    setImageURL(URL.createObjectURL(file));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }

  const { isPending, data, mutate } = useMutation<MLPrediction, Error, string>({
    mutationFn: async (base64Image: string) => {
      const response = await fetch(ML_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
      });
      if (!response.ok) {
        throw new Error("Failed to detect disease");
      }
      return response.json();
    },
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!imageFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function () {
      const base64String = reader.result as string;
      const base64Data = base64String.split(",")[1];
      mutate(base64Data);
    };
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upload Your <span className="gradient-text">Plant Image</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Drag and drop or click to upload a photo of your plant for instant
            AI-powered disease detection
          </p>
        </div>

        {/* Upload Card */}
        <form
          encType="multipart/form-data"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <label
              htmlFor="plant-image"
              className="cursor-pointer block"
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              <div
                className={`
                relative w-full aspect-[4/3] md:aspect-[16/9] mx-auto rounded-2xl
                upload-zone transition-all duration-300
                ${isDragging ? "border-primary bg-primary/10 scale-[1.02]" : ""}
                ${imageURL ? "border-solid border-primary/50" : ""}
              `}
              >
                {imageURL ? (
                  <>
                    <Image
                      src={imageURL}
                      alt="Uploaded plant image"
                      fill
                      className="rounded-2xl object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="glass px-4 py-2 rounded-full">
                        <span className="text-sm font-medium text-white">
                          {imageFile?.name}
                        </span>
                      </div>
                      <div className="glass px-4 py-2 rounded-full">
                        <span className="text-sm text-white">
                          Click to change
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Upload Icon */}
                    <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-xl animate-pulse-glow">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-xl font-semibold mb-2">
                      Drop your plant image here
                    </p>
                    <p className="text-muted-foreground text-center mb-4">
                      or click to browse from your device
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        PNG
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        JPG
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        JPEG
                      </span>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  name="plant-image"
                  id="plant-image"
                  className="hidden"
                  accept=".png, .jpeg, .jpg"
                  onChange={onImageUpload}
                  required
                />
              </div>
            </label>

            {/* Action Button */}
            <div className="mt-8 flex justify-center">
              {imageFile === null ? (
                <Button
                  disabled
                  size="lg"
                  className="px-8 py-6 text-lg rounded-full opacity-50"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  Upload Image First
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isPending || !!data}
                  size="lg"
                  className="px-8 py-6 text-lg rounded-full gradient-bg text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-nature"
                >
                  {isPending ? (
                    <>
                      <ReloadIcon className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : data ? (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Analysis Complete
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      Detect Disease
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>

        {/* Result */}
        {data && <MLResult data={data} />}
      </div>
    </section>
  );
}
