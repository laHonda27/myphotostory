export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const initialContactState: ContactFormData = {
  name: '',
  email: '',
  message: ''
};