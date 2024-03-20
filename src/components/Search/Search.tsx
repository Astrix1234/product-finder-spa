import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import scss from './Search.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import store from '../../Zustand/store';

interface FormValues {
  id: string;
}

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  const { setId, setPrevPath } = store();

  const formik = useFormik<FormValues>({
    initialValues: {
      id: '',
    },
    validationSchema,
    onSubmit: (values: FormValues) => {
      setId(Number(values.id));
      setPrevPath(location.pathname);
      navigate(`/product/${values.id}`);
      formik.resetForm();
    },
  });

  return (
    <div data-testid="search">
      <form className={scss.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="id" className={scss.label}>
          Find product by ID
          <input
            className={`${scss.input} ${formik.errors.id ? scss.error : ''}`}
            id="id"
            name="id"
            onChange={formik.handleChange}
            value={formik.values.id}
          />
          {formik.errors.id ? (
            <div className={scss.formikMessage}>{formik.errors.id}</div>
          ) : null}
        </label>
        <button
          type="submit"
          className={scss.button}
          disabled={!formik.isValid || !formik.dirty}
        >
          <div
            style={{
              transition: 'color 0.3s ease-in-out',
              color: hovered ? 'blue' : 'grey',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <SearchIcon style={{ fontSize: '2rem' }} />
          </div>
        </button>
      </form>
    </div>
  );
};
