import React from 'react'
import { useFormik } from 'formik';

export default function JobPositionAdd() {
    const formik = useFormik({
        initialValues: {
          name: '',
        
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <div>
            sadsadsadasdadsadadasdsfdfsdfefsrsfsdfsfsefesfdf
        </div>
    )
}
