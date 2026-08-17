import { Type } from '@google/genai';

export const agentTools = [
  {
    name: 'get_profile',
    description: "Get Ibtesam Taha's verified profile information, career interests, and background.",
    parameters: {
      type: Type.OBJECT,
      properties: {},
    },
  },
  {
    name: 'verify_capability',
    description: "Verify if Ibtesam Taha has experience with a specific technology, skill, or professional requirement. Returns verification status and evidence.",
    parameters: {
      type: Type.OBJECT,
      properties: {
        capability: {
          type: Type.STRING,
          description: 'The specific technology or skill to verify (e.g., "Django", "Python", "SQL", "Next.js").',
        }
      },
      required: ['capability'],
    },
  },
  {
    name: 'get_projects',
    description: "Get a list of Ibtesam Taha's verified full-stack projects with their technical details.",
    parameters: {
      type: Type.OBJECT,
      properties: {
        query: {
          type: Type.STRING,
          description: 'Optional search query to filter projects by tech stack or keywords (e.g., "Next.js", "healthcare"). Leave empty for all projects.',
        }
      },
    },
  },
  {
    name: 'get_contact_info',
    description: "Get Ibtesam Taha's public contact information and social links.",
    parameters: {
      type: Type.OBJECT,
      properties: {},
    },
  },
  {
    name: 'navigate_portfolio',
    description: 'Trigger a UI navigation event for the visitor to a specific section of the portfolio. Use this when the user asks to see a section.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        target: {
          type: Type.STRING,
          description: 'The target section to navigate to. Allowed values: "projects", "skills", "about", "contact", "github", "resume"',
        }
      },
      required: ['target'],
    },
  },
  {
    name: 'show_project_card',
    description: 'Trigger the UI to display a rich project card to the visitor. Use this when you want to highlight a specific project visually.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        projectId: {
          type: Type.STRING,
          description: 'The ID of the project to show (e.g., "dinespot", "rolebix").',
        }
      },
      required: ['projectId'],
    },
  },
  {
    name: 'prepare_contact',
    description: 'Trigger the UI to prefill the contact form for the visitor. The visitor still needs to submit it manually.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING },
        email: { type: Type.STRING },
        subject: { type: Type.STRING },
        message: { type: Type.STRING },
      },
    },
  },
  {
    name: 'show_contact_cta',
    description: 'Show professional contact action buttons (Resume, Email, GitHub) in the chat. Use this when concluding a recruiter or client conversation.',
    parameters: {
      type: Type.OBJECT,
      properties: {},
    },
  }
];
