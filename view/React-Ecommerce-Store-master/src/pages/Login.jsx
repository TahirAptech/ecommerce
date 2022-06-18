import { Link } from "react-router-dom";
import styles from "../styles/formStyle.module.css";

const Login = () => {
    return (
        <section className={styles.container}>
            <form className={`${styles.formStyle}`}>
                <h2 style={{ textAlign: "center" }}>Login Form</h2>

                <div className="form-group">
                    <input type="email" className="form-control my-3" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Password" />
                </div>

                <button type="submit" className="btn btn-primary my-3 w-100">Login</button>

                <div style={{textAlign:"center"}}>
                    <small className="text-muted nav-link">Not account yet? &nbsp;
                        <Link to="/register">Signup</Link>
                    </small>
                </div>
            </form>
        </section>
    )
}

export default Login;
