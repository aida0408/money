import React from 'react'
import {Box, Grid, TextField} from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import {date} from "yup";
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/actions/tasksActions";



const ExpensesForm = () => {
    const [date, setDate] = React.useState("");
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            title: '',
            amount: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            amount: Yup.string().required('Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            values.date = date.toLocaleDateString()
            dispatch(addTask(values))
            // dispatch(addTask(values))
        resetForm()

        },
    });
    return(
        <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <DatePicker
                            onChange={(e) => setDate(e)}
                            value={date}
                            renderInput={(params) =>
                                <TextField id="date"
                                           sx={{width: "100%"}}
                                           variant="standard" {...params}
                                           name="date"
                                           label="Выберите дату"
                                />

                            }
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="title"
                                   label="Заголовок"
                                   variant="standard"
                                   sx={{width: "100%"}}
                                   color="primary"
                                   name="title"
                                   value={formik.values.title}
                                   onChange={formik.handleChange}
                                   error={formik.touched.title && Boolean(formik.errors.title)}
                                   helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="amount"
                                   label="Сумма"
                                   variant="standard"
                                   sx={{width: "100%"}}
                                   color="primary"
                                   name="amount"
                                   value={formik.values.amount}
                                   onChange={formik.handleChange}
                                   error={formik.touched.amount && Boolean(formik.errors.amount)}
                                   helperText={formik.touched.amount && formik.errors.amount}
                        />
                    </Grid>
                </Grid>
                <Box sx={{display: "flex", justifyContent: "flex-end", marginTop: "10px", marginBottom:"30px"}}>
                    <Button color="primary" variant="contained" type='submit'>Добавить</Button>
                </Box>
               </form>


    )
}





export default ExpensesForm