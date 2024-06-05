export function generatePrompt(
  formValues: { [key: string]: string },
  language: string = 'en'
) {
  const role =
    formValues['Enter the role, e.g., Teacher, Doctor, Developer'] ||
    formValues['Ingresa el rol, por ejemplo, Maestro, Doctor, Desarrollador'] ||
    '';
  const task =
    formValues[
      'Describe the task, e.g., "write a blog post", "write an essay", "write a poem"'
    ] ||
    formValues[
      'Describe la tarea, por ejemplo, "escribir una entrada de blog", "escribir un ensayo", "escribir un poema"'
    ] ||
    '';
  const specificDetails =
    formValues[
      'Provide specific details for the task, e.g., "This task is for educational purposes"'
    ] ||
    formValues[
      'Proporciona detalles específicos para la tarea, por ejemplo, "Esta tarea es para fines educativos"'
    ] ||
    '';
  const context =
    formValues[
      'Provide the context, e.g., "Our company offers a wide range of web services..."'
    ] ||
    formValues[
      'Proporciona el contexto, por ejemplo, "Nuestra empresa ofrece una amplia gama de servicios web..."'
    ] ||
    '';
  const examples =
    formValues[
      'Provide examples to guide the model, e.g., "Include an introduction, main points, and a conclusion"'
    ] ||
    formValues[
      'Proporciona ejemplos para guiar el modelo, por ejemplo, "Incluye una introducción, puntos principales y una conclusión"'
    ] ||
    '';
  const extraNotes =
    formValues[
      'Add any extra notes or formatting instructions, e.g., "Use markdown syntax for headings"'
    ] ||
    formValues[
      'Agrega cualquier nota adicional o instrucciones de formato, por ejemplo, "Usa sintaxis de markdown para encabezados"'
    ] ||
    '';

  const prompts: {
    [key: string]: string;
  } = {
    en: `
      As a ${role}, you have a crucial task ahead of you: ${task}. To help you succeed, here are some specific details to consider: ${specificDetails}.
      
      Let me provide you with some context to better understand the background and scope of this task. ${context}. This context will help you align your work with the overall objectives and ensure it fits seamlessly into the broader picture.

      To guide you through this process, here are a few examples that illustrate what is expected. These examples should serve as a benchmark and inspire you to create a high-quality output. ${examples}.

      Additionally, there are a few extra notes and formatting instructions that you should keep in mind while working on this task. ${extraNotes}. These points are crucial for ensuring that your final output is polished and meets all specified requirements.

      By following these guidelines and considering all the provided information, you will be able to deliver a comprehensive and well-structured result. Your attention to detail and dedication to following these instructions is greatly appreciated. Thank you for your effort and commitment to excellence.
    `,
    es: `
      Como ${role}, tienes una tarea crucial por delante: ${task}. Para ayudarte a tener éxito, aquí tienes algunos detalles específicos a considerar: ${specificDetails}.
      
      Permíteme proporcionarte algo de contexto para que comprendas mejor el trasfondo y el alcance de esta tarea. ${context}. Este contexto te ayudará a alinear tu trabajo con los objetivos generales y asegurar que se integre perfectamente en el panorama más amplio.

      Para guiarte a través de este proceso, aquí tienes algunos ejemplos que ilustran lo que se espera. Estos ejemplos deben servir como referencia e inspirarte para crear un resultado de alta calidad. ${examples}.

      Además, hay algunas notas adicionales e instrucciones de formato que debes tener en cuenta mientras trabajas en esta tarea. ${extraNotes}. Estos puntos son cruciales para asegurar que tu resultado final esté pulido y cumpla con todos los requisitos especificados.

      Siguiendo estas pautas y considerando toda la información proporcionada, podrás entregar un resultado completo y bien estructurado. Se agradece enormemente tu atención al detalle y tu dedicación a seguir estas instrucciones. Gracias por tu esfuerzo y compromiso con la excelencia.
    `,
  };

  return prompts[language] || prompts['en'];
}
