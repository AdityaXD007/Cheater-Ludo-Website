"use client";

import { PLACEHOLDER_DATA } from "@/config/constant";
import { useState } from "react";
import { useWatch } from "react-hook-form";
import { TemplateFormValues } from "@/schema/template-schema";
import { Camera, Info, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import { useRef } from "react";

const getPreviewHtml = (htmlContent: string) => {
  let html = htmlContent || "";
  PLACEHOLDER_DATA.forEach(({ placeholder, example }) => {
    const regex = new RegExp(
      placeholder.replace("{", "\\{").replace("}", "\\}"),
      "g",
    );
    html = html.replace(regex, example);
  });
  return html;
};

const LivePreview = () => {
  const htmlContent = useWatch<TemplateFormValues>({
    name: "layout",
  }) as string;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isTakingSnapshot, setIsTakingSnapshot] = useState(false);

  const PAGE_WIDTH = 794;
  const PAGE_HEIGHT = 1123;
  const SCALE = 0.7;

  const takeSnapshot = async () => {
    if (!iframeRef.current || !htmlContent) return;

    try {
      setIsTakingSnapshot(true);
      const iframeDoc =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document;

      if (!iframeDoc) return;

      // Ensure the body has explicit dimensions for the snapshot
      const originalWidth = iframeDoc.body.style.width;
      const originalMinHeight = iframeDoc.body.style.minHeight;
      const originalMargin = iframeDoc.body.style.margin;

      iframeDoc.body.style.width = `${PAGE_WIDTH}px`;
      iframeDoc.body.style.minHeight = `${PAGE_HEIGHT}px`;
      iframeDoc.body.style.margin = "0";

      const canvas = await html2canvas(iframeDoc.body, {
        useCORS: true,
        scale: 2, // High quality
        logging: false,
        backgroundColor: "#ffffff",
      });

      // Restore original styles
      iframeDoc.body.style.width = originalWidth;
      iframeDoc.body.style.minHeight = originalMinHeight;
      iframeDoc.body.style.margin = originalMargin;

      const link = document.createElement("a");
      link.download = "cv-preview.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error taking snapshot:", error);
    } finally {
      setIsTakingSnapshot(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 rounded-xl border border-gray-200 overflow-hidden shadow-inner">
      <div className="border-b border-gray-200 px-6 py-4 bg-white flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-3 text-gray-500">
          <Info className="w-5 h-5" />
          <div>
            <h3 className="text-base font-semibold text-gray-900 leading-none">
              Live Preview
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              A4 Format Preview ({PAGE_WIDTH}px x {PAGE_HEIGHT}px)
            </p>
          </div>
        </div>
        <Button
          type="button"
          size="sm"
          onClick={takeSnapshot}
          disabled={!htmlContent || isTakingSnapshot}
          className="gap-2"
        >
          {isTakingSnapshot ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Camera className="w-4 h-4" />
          )}
          {isTakingSnapshot ? "Capturing..." : "Snapshot"}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center custom-scrollbar w-full">
        {/* A4 Paper Emulator */}
        <div 
          className="preview-wrapper relative bg-white shadow-2xl ring-1 ring-gray-200 overflow-hidden shrink-0 transition-all duration-300 ease-in-out"
          style={{ 
            width: `${PAGE_WIDTH * SCALE}px`, 
            height: `${PAGE_HEIGHT * SCALE}px`,
            minHeight: `${PAGE_HEIGHT * SCALE}px`
          }}
        >
          {/* Actual A4 canvas that gets scaled down */}
          <div
            className="absolute top-0 left-0 origin-top-left bg-white flex flex-col"
            style={{
              width: `${PAGE_WIDTH}px`,
              height: `${PAGE_HEIGHT}px`,
              transform: `scale(${SCALE})`,
            }}
          >
            {htmlContent ? (
              <iframe
                ref={iframeRef}
                srcDoc={getPreviewHtml(htmlContent)}
                className="w-full h-full flex-1 border-0"
                title="Template Preview"
                sandbox="allow-same-origin"
                style={{ pointerEvents: "none" }} // Preview only
              />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 text-center bg-gray-50/50">
                <div className="w-20 h-20 border border-gray-200 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <p className="text-lg font-bold text-gray-800">
                  Ready for Preview
                </p>
                <p className="text-sm mt-2 text-gray-500 max-w-[250px]">
                  Start editing the layout to see your template come to life in A4 format.
                </p>
              </div>
            )}

            {/* Dashed outline for empty state */}
            {!htmlContent && (
              <div className="absolute inset-10 border-2 border-dashed border-gray-100 rounded-2xl pointer-events-none"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
