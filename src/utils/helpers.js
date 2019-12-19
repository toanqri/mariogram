import { NotificationManager } from 'react-notifications';

export const showError = (error) => {
  NotificationManager.error(error || '', 'Error!');
};

export const showSuccess = (message) => {
  NotificationManager.success(message || '', 'Success!');
};
