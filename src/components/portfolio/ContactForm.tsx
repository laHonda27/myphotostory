import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { validateField } from '../../utils/validation';
import SubmitButton from '../ui/SubmitButton';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  projectType: string;
}

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function ContactForm({ isOpen, onClose, projectType }: ContactFormProps) {
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
    initialValues: {
      name: '',
      email: '',
      projectType,
      message: ''
    },
    validate: validateField,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', values);
        onClose();
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md bg-white rounded-lg p-6 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-medium mb-6">Démarrer votre projet</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Décrivez votre projet..."
                />
                {errors.message && touched.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <SubmitButton isSubmitting={isSubmitting}>
                Envoyer ma demande
              </SubmitButton>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}