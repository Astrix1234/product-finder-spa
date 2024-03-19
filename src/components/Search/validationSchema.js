import * as Yup from 'yup';

export const validationSchema = Yup.object({
  id: Yup.string().matches(
    /^(?:[1-9]|1[0-2])$/,
    'ID must be a number from 1 to 12'
  ),
});
