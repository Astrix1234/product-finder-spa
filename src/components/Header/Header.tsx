import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import scss from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import store from '../../Zustand/store';

interface FormValues {
  id: string;
}

export const Header = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const { id, setId } = store();

  const formik = useFormik<FormValues>({
    initialValues: {
      id: '',
    },
    validationSchema,
    onSubmit: (values: FormValues) => {
      setId(Number(values.id));
      navigate(`/product/${values.id}`);
      formik.resetForm();
    },
  });

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <header>
      <form className={scss.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="id" className={scss.label}>
          Find product by ID
          <input
            className={`${scss.input} ${
              formik.touched.id && formik.errors.id ? scss.error : ''
            }`}
            id="id"
            name="id"
            onChange={formik.handleChange}
            value={formik.values.id}
            onBlur={formik.handleBlur}
          />
        </label>
        <button type="submit" className={scss.button}>
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
    </header>
  );
};
