import Form from '@/components/Form';
import { FormProvider } from '@/context/FormContext';
import ResultTextarea from '@/components/Result';

export default function Home() {
  return (
    <FormProvider>
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10">
        <h1 className="text-3xl font-bold mb-10">Prompt Generator</h1>
        <Form />
        <ResultTextarea />
      </main>
    </FormProvider>
  );
}
