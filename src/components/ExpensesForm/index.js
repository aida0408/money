import React from 'react'
import {Box, Grid, TextField} from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import {date} from "yup";
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as Yup from "yup";



const ExpensesForm = () => {
    const [date, setDate] = React.useState("");
    const formik = useFormik({
        initialValues: {
           date: '',
            title: '',
            amount: '',
        },
        validationSchema: Yup.object({

           title: Yup.string().required('Required'),
            amount: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return(
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{marginBottom:"35px"}}
                onSubmit={formik.handleSubmit}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <DatePicker
                            renderInput={(params) =>
                                <TextField
                                    id="date"
                                    sx={{width: "100%"}}
                                    variant="standard" {...params} />}
                                    value={date}
                                    name="date"
                                    label="Выберите дату"
                                    onChange={formik.handleChange}
                                    error={formik.touched.date && Boolean(formik.errors.date)}
                                    helperText={formik.touched.date && formik.errors.date}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="title"
                                   label="Заголовок"
                                   variant="standard"/>
                                   sx={{width: "100%"}}
                                   color="primary"
                                   name="title"
                                   value={formik.values.title}
                                   onChange={formik.handleChange}
                                   error={formik.touched.title && Boolean(formik.errors.title)}
                                   helperText={formik.touched.title && formik.errors.title}
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="amount"
                                   label="Сумма"
                                   variant="standard"/>
                                   sx={{width: "100%"}}
                                   color="primary"
                                   name="amount"
                                   value={formik.values.amount}
                                   onChange={formik.handleChange}
                                   error={formik.touched.amount && Boolean(formik.errors.amount)}
                                   helperText={formik.touched.amount && formik.errors.amount}


                    </Grid>
                </Grid>
                <Box sx={{display: "flex", justifyContent: "flex-end", marginTop: "10px"}}>
                    <Button variant="contained">Добавить</Button>
                </Box>
               </Box>


    )
}





export default ExpensesForm