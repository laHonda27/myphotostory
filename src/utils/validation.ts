export function validateField(name: string, value: any): string {
  switch (name) {
    case 'name':
      if (!value) return 'Le nom est requis';
      if (value.length < 2) return 'Le nom doit contenir au moins 2 caractères';
      if (value.length > 100) return 'Le nom ne doit pas dépasser 100 caractères';
      return '';

    case 'email':
      if (!value) return 'L\'email est requis';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return 'Adresse email invalide';
      }
      return '';

    case 'message':
      if (!value) return 'Le message est requis';
      if (value.length < 10) return 'Le message doit contenir au moins 10 caractères';
      if (value.length > 1000) return 'Le message ne doit pas dépasser 1000 caractères';
      return '';

    default:
      return '';
  }
}