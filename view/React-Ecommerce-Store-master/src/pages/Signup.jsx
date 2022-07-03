import { Link } from "react-router-dom";
import styles from "../styles/formStyle.module.css";
import { useForm } from 'react-hook-form';
import { Autocomplete, Button, TextField, Typography } from '@mui/material';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {alert(watch("name")); console.log(data)}
    return (
        <section className={styles.container}>
            <form className={`${styles.formStyle}`} onSubmit={handleSubmit(onSubmit)}>
                <h2 style={{ textAlign: "center" }} className="my-4">Registration Form</h2>

                <div className="form-group my-3">
                    {/* <input type="text" className="form-control my-2" placeholder="Enter name" {...register("name")} /> */}
                    <TextField label="Name" className="form-control"{...register("name", { required: true })} />
                    {errors.name && <small style={{color:"red"}}>Name field is required</small>}
                </div>

                <div className="form-group my-3">
                    <TextField label="Contact" className="form-control"{...register("contact", { required: true })} />
                    {errors.contact && <small style={{color:"red"}}>Contact field is required</small>}
                </div>

                <div className="form-group my-3">
                    <TextField label="Email" className="form-control"{...register("email", { required: true })} />
                    {errors.email && <small style={{color:"red"}}>Email field is required</small>}
                </div>

                <div className="form-group my-3">
                    <TextField label="Password" className="form-control"{...register("password", { required: true })} />
                    {errors.password && <small style={{color:"red"}}>Password field is required</small>}
                </div>

                <Button type="submit" variant="contained" sx={{width:"100%"}} className="my-2">Submit</Button>

                <div style={{ textAlign: "center" }}>
                    <small className="text-muted nav-link">Already have an account? &nbsp;
                        <Link to="/login">Login</Link>
                    </small>
                </div>
            </form>
        </section>
    )
}

export default Signup;
