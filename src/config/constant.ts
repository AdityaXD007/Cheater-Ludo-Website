import { TemplateCategory } from "@/types/template"
import { Home, LayoutTemplate, LucideIcon, Package, Plus } from "lucide-react"

export interface SidebarNavLinks {
  title: string
  url: string
  icon?: LucideIcon
  items?: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}

export const AdminSideBarLinks: SidebarNavLinks[] = [
  {
    title: 'Coin Packages',
    icon: Package,
    url: '/admin/coin',
  },
  {
    title: 'Templates',
    icon: LayoutTemplate,
    url: '/admin/temp',
  },
  {
    title: 'Add Template',
    icon: Plus,
    url: '/admin/temp/create',
  }
]

export const CATEGORIES: TemplateCategory[] = [
  'Modern', 'Professional', 'Creative', 'Minimalist', 'Corporate'
];

export const CV_DATA_PLACEHOLDER = {
  education: [
    {
      course: "Bachelor of Science in Computer Science",
      created_at: "2026-04-30T06:47:12.000000Z",
      description: "Focused on software engineering and artificial intelligence. Completed projects on machine learning and web development.",
      end_date: "2022-06-15T00:00:00.000Z",
      grade: "3.8",
      id: 388,
      start_date: "2018-09-01T00:00:00.000Z",
      study_place: "Harvard University",
      updated_at: "2026-04-30T06:47:12.000000Z",
      user_info_id: "245",
    },
    {
      course: "Bachelor of Science in Computer Science",
      created_at: "2026-04-30T06:47:18.000000Z",
      description: "Focused on software engineering and artificial intelligence. Completed projects on machine learning and web development.",
      end_date: "2022-06-15T00:00:00.000Z",
      grade: "3.8",
      id: 389,
      start_date: "2018-09-01T00:00:00.000Z",
      study_place: "Harvard University",
      updated_at: "2026-04-30T06:47:18.000000Z",
      user_info_id: "245",
    },
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      created_at: "2026-04-30T06:47:26.000000Z",
      description: "Worked on developing and maintaining web applications using modern frameworks and technologies.",
      end_date: "2023-08-30T00:00:00.000Z",
      id: 400,
      job_title: "Software Engineer",
      start_date: "2020-01-15T00:00:00.000Z",
      updated_at: "2026-04-30T06:47:26.000000Z",
      user_info_id: "245",
      work_place: "New York, NY",
    },
    {
      company: "Tech Solutions Inc.",
      created_at: "2026-04-30T06:47:32.000000Z",
      description: "Worked on developing and maintaining web applications using modern frameworks and technologies.",
      end_date: "2023-08-30T00:00:00.000Z",
      id: 401,
      job_title: "Software Engineer",
      start_date: "2020-01-15T00:00:00.000Z",
      updated_at: "2026-04-30T06:47:32.000000Z",
      user_info_id: "245",
      work_place: "New York, NY",
    },
    {
      company: "Tech Solutions Inc.",
      created_at: "2026-04-30T06:47:38.000000Z",
      description: "Worked on developing and maintaining web applications using modern frameworks and technologies.",
      end_date: "2023-08-30T00:00:00.000Z",
      id: 402,
      job_title: "Software Engineer",
      start_date: "2020-01-15T00:00:00.000Z",
      updated_at: "2026-04-30T06:47:38.000000Z",
      user_info_id: "245",
      work_place: "New York, NY",
    },
  ],
  generalInfo: {
    address: "123 Main St, Springfield, IL 62701",
    avatar_url: "https://ik.imagekit.io/oujxjaricw/avatars/69f2fab7aa126_ULfUcggOG.jpeg",
    email: "john.doe@example.com",
    first_name: "John",
    id: 245,
    last_name: "Doe",
    middle_name: "Something",
    phone_number: "(555) 123-4567",
    portfolio_link: "https://johndoe.com",
    profession: "Software Engineer",
  },
  objective: "I am a dedicated, results-driven professional with strong teamwork capabilities. I thrive in collaborative environments while maintaining the focus and discipline to work independently when needed. I adapt quickly to changing priorities and consistently deliver quality work under tight deadlines.",
  projects: [
    {
      created_at: "2026-04-30T06:47:50.000000Z",
      description: "A personal portfolio website to showcase my projects and skills.",
      end_date: "2021-08-01T00:00:00.000Z",
      id: 47,
      project_link: "https://github.com/username/personal-portfolio",
      project_name: "Personal Portfolio Website",
      start_date: "2021-05-01T00:00:00.000Z",
      updated_at: "2026-04-30T06:47:50.000000Z",
      user_info_id: 245,
    },
    {
      created_at: "2026-04-30T06:48:07.000000Z",
      description: "A personal portfolio website to showcase my projects and skills.",
      end_date: "2021-08-01T00:00:00.000Z",
      id: 48,
      project_link: "https://github.com/username/personal-portfolio",
      project_name: "Personal Portfolio Website",
      start_date: "2021-05-01T00:00:00.000Z",
      updated_at: "2026-04-30T06:48:07.000000Z",
      user_info_id: 245,
    },
  ],
};

export const PLACEHOLDER_DATA = [
  { placeholder: "{first_name}", example: CV_DATA_PLACEHOLDER.generalInfo.first_name },
  { placeholder: "{last_name}", example: CV_DATA_PLACEHOLDER.generalInfo.last_name },
  { placeholder: "{middle_name}", example: CV_DATA_PLACEHOLDER.generalInfo.middle_name },
  { placeholder: "{email}", example: CV_DATA_PLACEHOLDER.generalInfo.email },
  { placeholder: "{phone}", example: CV_DATA_PLACEHOLDER.generalInfo.phone_number },
  { placeholder: "{address}", example: CV_DATA_PLACEHOLDER.generalInfo.address },
  { placeholder: "{job_title}", example: CV_DATA_PLACEHOLDER.generalInfo.profession },
  { placeholder: "{portfolio}", example: CV_DATA_PLACEHOLDER.generalInfo.portfolio_link },
  { placeholder: "{summary}", example: CV_DATA_PLACEHOLDER.objective },
  { placeholder: "{skills}", example: "JavaScript, React, Node.js, TypeScript, Next.js, TailwindCSS, PostgreSQL, Docker" },
  {
    placeholder: "{experience}",
    example: CV_DATA_PLACEHOLDER.experience.map(exp => `
      <div class="mb-4">
        <h3 class="font-bold text-lg">${exp.job_title}</h3>
        <p class="text-gray-600">${exp.company} | ${exp.work_place}</p>
        <p class="text-sm italic">${new Date(exp.start_date).toLocaleDateString()} - ${exp.end_date ? new Date(exp.end_date).toLocaleDateString() : 'Present'}</p>
        <p class="mt-2">${exp.description}</p>
      </div>
    `).join('')
  },
  {
    placeholder: "{education}",
    example: CV_DATA_PLACEHOLDER.education.map(edu => `
      <div class="mb-4">
        <h3 class="font-bold text-lg">${edu.course}</h3>
        <p class="text-gray-600">${edu.study_place}</p>
        <p class="text-sm italic">${new Date(edu.start_date).toLocaleDateString()} - ${new Date(edu.end_date).toLocaleDateString()}</p>
        <p class="mt-2">${edu.description}</p>
      </div>
    `).join('')
  },
  {
    placeholder: "{projects}",
    example: CV_DATA_PLACEHOLDER.projects.map(proj => `
      <div class="mb-4">
        <h3 class="font-bold text-lg">${proj.project_name}</h3>
        <p class="text-sm text-blue-600">${proj.project_link}</p>
        <p class="mt-2">${proj.description}</p>
      </div>
    `).join('')
  },
];



export const TOKEN_NAME = 'cvMaker-admin-token'

export const ADMIN_DEFAULT_REDIRECT_URL = '/admin/coin'