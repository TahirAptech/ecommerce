import { Link } from "react-router-dom";
import styles from "../styles/formStyle.module.css";

const Signup = () => {
    return (
        <section className={styles.container}>
            <form className={`${styles.formStyle}`} enctype="multipart/form-data">
                <h2 style={{ textAlign: "center" }}>Registration Form</h2>

                <div className="form-group">
                    <input type="text" className="form-control my-3" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control my-3" placeholder="Enter contact" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control my-3" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control my-3" placeholder="Enter Password" />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Submit</button>

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
