export function generatePrompt(
  formValues: { [key: string]: string },
  language: string = 'en'
) {
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

  if (language === 'es') {
    return (
      'En el rol de ' +
      role +
      ', tu tarea principal es ' +
      task +
      '. Específicamente, ' +
      specificDetails +
      '.\n\n' +
      'Para darte algo de contexto, ' +
      context +
      '. Aquí hay algunos ejemplos para guiarte: ' +
      examples +
      '.\n\n' +
      'Además, ten en cuenta las siguientes notas: ' +
      extraNotes +
      '.\n\n' +
      'Siguiendo estas pautas, podrás crear un resultado completo y bien estructurado. Gracias.'
    );
  } else {
    return (
      'In the role of ' +
      role +
      ', your primary task is to ' +
      task +
      '. Specifically, ' +
      specificDetails +
      '.\n\n' +
      'To give you some context, ' +
      context +
      '. Here are some examples to guide you: ' +
      examples +
      '.\n\n' +
      'Additionally, please take into account the following notes: ' +
      extraNotes +
      '.\n\n' +
      'By following these guidelines, you will be able to create a comprehensive and well-structured output. Thank you.'
    );
  }
}
