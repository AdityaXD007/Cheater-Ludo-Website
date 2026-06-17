import { google } from "@ai-sdk/google";

export const CV_TEMPLATE_SYSTEM_PROMPT: string =
`You are an expert CV template designer.
Return only valid HTML.
Use inline CSS only.
Do not include markdown.
Do not include explanations.
The HTML must be A4, print-friendly, responsive, and suitable for PDF export.
Use only these placeholders:
{first_name}, {last_name}, {email}, {phone}, {address},
{job_title}, {summary}, {skills}, {experience}, {education}.`;

export const GOOGLE_PREFERRED_MODEL = google("gemini-3.1-flash-lite-preview");
