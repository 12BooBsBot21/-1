import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Button';
import { Input } from '../Input';

type FormProps = {
  onSuccess?: () => void;
};

export const Form = ({ onSuccess }: FormProps) => {
  const { values, errors, status, isSubmitting, isSuccess, handleChange, handleSubmit } = useForm();

  useEffect(() => {
    if (!isSuccess || !onSuccess) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      onSuccess();
    }, 1500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isSuccess, onSuccess]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <Input
        label="Имя"
        name="name"
        placeholder="Ваше имя"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        label="Телефон"
        name="phone"
        placeholder="+7 (___) ___-__-__"
        value={values.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Отправляем...' : 'Отправить'}
      </Button>

      {status === 'success' && <p className="text-center text-sm font-medium text-green-600">Спасибо! Заявка отправлена.</p>}
      {status === 'error' && <p className="text-center text-sm font-medium text-red-600">Ошибка отправки. Попробуйте снова.</p>}
    </form>
  );
};
