import React from 'react';
import { useForm } from './useForm';
import { validateField } from './validation';
import DatePicker from 'react-datepicker';
import { fr } from 'date-fns/locale';
import { Calendar } from 'lucide-react';
import { BookingFormData, initialBookingState } from '../../types/booking';
import Toast from '../feedback/Toast';
import Confetti from '../feedback/Confetti';
import SubmitButton from '../ui/SubmitButton';
import { useFeedback } from '../../hooks/useFeedback';

import 'react-datepicker/dist/react-datepicker.css';

const prestationTypes = [
  'Mariage',
  'Fiançailles',
  'Famille',
  'Naissance',
  'Anniversaire',
  'Autre'
];

export default function BookingForm() {
  const { 
    showConfetti, 
    showToast, 
    toastConfig, 
    showFeedback, 
    resetFeedback 
  } = useFeedback();

  const { 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    handleSubmit, 
    setFieldValue,
    isSubmitting,
    setIsSubmitting 
  } = useForm({
    initialValues: initialBookingState,
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
    <form onSubmit={handleSubmit} noValidate className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Téléphone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ex: 06 12 34 56 78"
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
        />
        {errors.phone && touched.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="prestationType" className="block text-sm font-medium text-gray-700">
          Type de prestation *
        </label>
        <select
          id="prestationType"
          name="prestationType"
          value={values.prestationType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.prestationType && touched.prestationType ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
        >
          <option value="">Sélectionnez une prestation</option>
          {prestationTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.prestationType && touched.prestationType && (
          <p className="text-red-500 text-sm mt-1">{errors.prestationType}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date souhaitée *
        </label>
        <div className="relative">
          <DatePicker
            selected={values.date}
            onChange={(date) => setFieldValue('date', date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            locale={fr}
            placeholderText="Sélectionnez une date"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.date && touched.date ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
          />
          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {errors.date && touched.date && (
          <p className="text-red-500 text-sm mt-1">{errors.date}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          placeholder="Décrivez votre projet..."
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.message && touched.message ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none`}
        />
        {errors.message && touched.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <SubmitButton isSubmitting={isSubmitting}>
        Envoyer ma demande
      </SubmitButton>

      <Toast 
        isVisible={showToast}
        onClose={resetFeedback}
        type={toastConfig.type}
        title={toastConfig.title}
        message={toastConfig.message}
      />

      <Confetti 
        isActive={showConfetti} 
        onComplete={resetFeedback} 
      />
    </form>
  );
}