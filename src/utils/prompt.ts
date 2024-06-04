export function generatePrompt(formValues: { [key: string]: string }) {
  const role =
    formValues['Enter the role, e.g., Teacher, Doctor, Developer'] || '';
  const task =
    formValues[
      'Describe the task, e.g., "write a blog post", "write an essay", "write a poem"'
    ] || '';
  const specificDetails =
    formValues[
      'Provide specific details for the task, e.g., "This task is for educational purposes"'
    ] || '';
  const context =
    formValues[
      'Provide the context, e.g., "Our company offers a wide range of web services..."'
    ] || '';
  const examples =
    formValues[
      'Provide examples to guide the model, e.g., "Include an introduction, main points, and a conclusion"'
    ] || '';
  const extraNotes =
    formValues[
      'Add any extra notes or formatting instructions, e.g., "Use markdown syntax for headings"'
    ] || '';

  return `
    In the role of ${role}, your primary task is to ${task}. Specifically, ${specificDetails}.
    
    To give you some context, ${context}. Here are some examples to guide you: ${examples}.
    
    Additionally, please take into account the following notes: ${extraNotes}.
    
    By following these guidelines, you will be able to create a comprehensive and well-structured output. Thank you.
  `.trim();
}
