import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Send } from 'lucide-react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import SubmitButton from './SubmitButton';

const prestationTypes = [
  'Mariage',
  'Fiançailles',
  'Famille',
  'Naissance',
  'Anniversaire',
  'Autre'
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    prestationType: '',
    date: '',
    guests: '',
    location: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      prestationType: '',
      date: '',
      guests: '',
      location: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-sm space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Nom complet"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Téléphone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+33 6 12 34 56 78"
        />
        <FormSelect
          label="Type de prestation"
          name="prestationType"
          value={formData.prestationType}
          onChange={handleChange}
          options={prestationTypes}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Date souhaitée"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          icon={<Calendar className="w-5 h-5 text-gray-400" />}
        />
        <FormInput
          label="Nombre d'invités"
          name="guests"
          type="number"
          value={formData.guests}
          onChange={handleChange}
          placeholder="Optionnel"
        />
      </div>

      <FormInput
        label="Lieu de l'événement"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Ville, Code postal"
      />

      <FormTextArea
        label="Votre message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Parlez-moi de votre vision..."
        required
      />

      <SubmitButton isSubmitting={isSubmitting} />
    </motion.form>
  );
}