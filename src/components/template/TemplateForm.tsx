"use client";

import { CATEGORIES } from "@/config/constant";
import { Sparkles, Copy, Upload } from "lucide-react";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { TemplateFormValues } from "@/schema/template-schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import Image from "next/image";
import { generateCVTemplate } from "@/actions/ai/gemini/generate";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const TemplateForm = () => {
  const { control, watch, setValue } = useFormContext<TemplateFormValues>();
  const isPremium = watch("is_premium");

  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const basePrompt = `Create a professional A4 CV HTML template using inline CSS only.
Use these placeholders:
{first_name}, {last_name}, {middle_name}, {email}, {phone}, {address}, {job_title}, {portfolio}, {summary}, {skills}, {experience}, {education}, {projects}.
The design should be clean, print-friendly, responsive, and suitable for PDF export.
Return only valid HTML with inline CSS.`;

  const handleGenerateHTML = async () => {
    if (!aiPrompt.trim()) {
      toast.error("Please enter a prompt first");
      return;
    }

    setIsGenerating(true);
    const promise = generateCVTemplate(aiPrompt);

    toast.promise(promise, {
      loading: "Generating template...",
      success: (res) => {
        if (res.success && res.data) {
          // Extract HTML if Gemini wrapped it in ```html ... ```
          let html = res.data;
          const htmlMatch = html.match(/```html\s*([\s\S]*?)\s*```/i);
          if (htmlMatch) {
            html = htmlMatch[1];
          } else {
            // Also check for just ``` blocks
            const codeMatch = html.match(/```\s*([\s\S]*?)\s*```/i);
            if (codeMatch) html = codeMatch[1];
          }

          setValue("layout", html.trim());
          return "Template generated successfully!";
        }
        throw new Error(res.message);
      },
      error: (err) => err.message || "Failed to generate template",
      finally: () => setIsGenerating(false),
    });
  };

  const handleCopyBasePrompt = () => {
    navigator.clipboard.writeText(basePrompt);
    toast.success("Base prompt copied to clipboard");
  };

  return (
    <div className="overflow-y-auto pr-4 custom-scrollbar">
      <div className="space-y-6">
        {/* 1. Template Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Template Information
            </h3>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>
                      Template Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Modern Professional CV"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>
                      Category <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="is_premium"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>Premium Template</FormLabel>
                    <div className="flex items-center justify-between mt-2">
                      <FormDescription className="text-xs">
                        Enable coin-based access
                      </FormDescription>
                      <FormControl>
                        <button
                          type="button"
                          onClick={() => field.onChange(!field.value)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors 
                            ${field.value ? "bg-orange-500" : "bg-gray-300"}
                          `}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              field.value ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {isPremium && (
              <FormField
                control={control}
                name="coin_cost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {" "}
                      Coin Cost <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 100" {...field} />
                    </FormControl>
                    <FormDescription>
                      Number of coins required to use this template
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={control}
              name="image_upload"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>
                    Upload Preview Image{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      {value ? (
                        <div className="flex items-center gap-4">
                          <div className="relative w-24 h-32 rounded-lg overflow-hidden border bg-gray-50 shrink-0">
                            <Image
                              src={
                                typeof value === "string"
                                  ? value
                                  : URL.createObjectURL(value)
                              }
                              alt="Preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Button
                            variant="outline"
                            onClick={() => onChange(undefined)}
                            size="sm"
                          >
                            Remove Image
                          </Button>
                        </div>
                      ) : (
                        <div className="relative">
                          <Input
                            type="file"
                            accept="image/*"
                            name={field.name}
                            ref={field.ref}
                            onBlur={field.onBlur}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) onChange(file);
                            }}
                          />
                          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors flex flex-col items-center">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 text-gray-500">
                              <Upload className="w-5 h-5" />
                            </div>
                            <p className="text-sm text-gray-900">
                              Drag & drop or{" "}
                              <span className="font-medium">
                                click to upload
                              </span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Recommended size: 800x1123px (A4)
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* 2. Generate Template with AI */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                Generate Template with AI{" "}
                <Sparkles className="w-4 h-4 text-blue-500" />
              </h3>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4 ml-11">
            Describe the CV template you want to create. Use the base prompt or
            write your own.
          </p>

          <div className="space-y-4 ml-11">
            <div>
              <Label className="mb-2 block text-gray-700 font-semibold">
                Your Prompt
              </Label>
              <div className="relative">
                <Textarea
                  placeholder="Describe the CV template you want to generate..."
                  className="min-h-25 resize-none pb-8"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  disabled={isGenerating}
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {aiPrompt.length}/2000
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm text-gray-900">
                  Base Prompt Example
                </h4>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs bg-white"
                  onClick={handleCopyBasePrompt}
                >
                  <Copy className="w-3 h-3 mr-1" /> Copy Prompt
                </Button>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Create a professional A4 CV HTML template using inline CSS only.
                <br />
                Use these placeholders:
                <br />
                <span className="font-mono text-xs">{`{first_name}, {last_name}, {middle_name}, {email}, {phone}, {address}, {job_title}, {portfolio}, {summary}, {skills}, {experience}, {education}, {projects}`}</span>
                .<br />
                The design should be clean, print-friendly, responsive, and
                suitable for PDF export.
                <br />
                Return only valid HTML with inline CSS.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-24"
                onClick={() => setAiPrompt("")}
                disabled={isGenerating}
              >
                Clear
              </Button>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100 hover:text-orange-700"
                  onClick={handleGenerateHTML}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" /> Generate HTML
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Template HTML Editor */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Template HTML Editor
              </h3>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4 ml-11">
            Edit the HTML for your CV template. Use placeholders from the guide.
          </p>
          <div className="ml-11">
            <FormField
              control={control}
              name="layout"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="<!DOCTYPE html>&#10;<html>&#10;  <head>...</head>&#10;  <body>...</body>&#10;</html>"
                      className="min-h-75 font-mono text-sm bg-[#1e1e1e] text-[#d4d4d4] border-gray-800 placeholder:text-gray-600 focus-visible:ring-gray-700 p-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateForm;
