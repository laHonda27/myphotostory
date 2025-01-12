import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import { validateField } from '../../../../utils/validation';
import { ContactFormData, initialContactState } from '../../../../types/contact';
import { useFeedback } from '../../../../hooks/useFeedback';
import SubmitButton from '../../../ui/SubmitButton';

export default function ContactForm() {
  const { showFeedback } = useFeedback();

  const { 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    handleSubmit,
    isSubmitting,
    setIsSubmitting 
  } = useForm({
    initialValues: initialContactState,
    validate: validateField,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', values);
        showFeedback({
          type: 'success',
          title: 'Message envoyé avec succès',
          message: 'Nous vous répondrons dans les plus brefs délais'
        });
      } catch (error) {
        console.error('Submission error:', error);
        showFeedback({
          type: 'error',
          title: 'Erreur',
          message: 'Une erreur est survenue. Veuillez réessayer.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Votre message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.message && touched.message ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none`}
            placeholder="Parlez-nous de votre projet..."
          />
          {errors.message && touched.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <SubmitButton isSubmitting={isSubmitting}>
          Envoyer ma demande
        </SubmitButton>
      </div>
    </form>
  );
}