export const formData = [
  {
    type: 'text',
    label: 'Role',
    description: 'Enter the role, e.g., Teacher, Doctor, Developer',
    optional: false,
  },
  {
    type: 'textarea',
    label: 'Task',
    description:
      'Describe the task, e.g., "write a blog post", "write an essay", "write a poem"',
    optional: false,
  },
  {
    type: 'text',
    label: 'Specific details',
    description:
      'Provide specific details for the task, e.g., "This task is for educational purposes"',
    optional: false,
  },
  {
    type: 'textarea',
    label: 'Context',
    description:
      'Provide the context, e.g., "Our company offers a wide range of web services..."',
    optional: false,
  },
  {
    type: 'textarea',
    label: 'Examples',
    description:
      'Provide examples to guide the model, e.g., "Include an introduction, main points, and a conclusion"',
    optional: true,
  },
  {
    type: 'text',
    label: 'Extra notes / formatting',
    description:
      'Add any extra notes or formatting instructions, e.g., "Use markdown syntax for headings"',
    optional: true,
  },
];
