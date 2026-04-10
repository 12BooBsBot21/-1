import { useCallback, useMemo, useState } from 'react';
import { type ChangeEvent, type FormEvent } from 'react';
import { type FormErrors, type FormStatus, type FormValues } from '../types';

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
};

export const useForm = () => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = useCallback((nextValues: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = 'Введите имя';
    }

    if (!nextValues.phone.trim()) {
      nextErrors.phone = 'Введите телефон';
    }

    return nextErrors;
  }, []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      if (errors[name as keyof FormValues]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }

      if (status !== 'idle') {
        setStatus('idle');
      }
    },
    [errors, status],
  );

  const resetForm = useCallback(() => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setStatus('idle');
    setIsSubmitting(false);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return;
      }

      setIsSubmitting(true);

      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 1200);
        });

        setStatus('success');
        setValues(INITIAL_VALUES);
      } catch (error) {
        setStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [validate, values],
  );

  const isSuccess = useMemo(() => status === 'success', [status]);

  return {
    values,
    errors,
    status,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
