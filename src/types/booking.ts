export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  prestationType: string;
  date: Date | null;
  message: string;
}

export const initialBookingState: BookingFormData = {
  name: '',
  email: '',
  phone: '',
  prestationType: '',
  date: null,
  message: ''
};