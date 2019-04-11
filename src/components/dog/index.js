import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getDog, dogCancel } from "../../actions";
import LoadingSpinner from "../LoadingSpinner";
import styles from "./styles.module.css";

const DogExample = ({ dog, getDog, dogCancel, history }) => (
    <div>
        <h1>DOGS DOGS DOGS</h1>
        <button onClick={getDog}>NEW DOGO</button>
        <button onClick={dogCancel}>cancel</button>
        <button onClick={() => dogCancel() && history.push("/starwars")}>
            go to data stuff
        </button>

        {dog.loading ? (
            <LoadingSpinner />
        ) : (
            <div className={styles.dogo}>
                <img src={dog.data} />
            </div>
        )}
    </div>
);

const mapDispatchToProps = { getDog, dogCancel };
const mapStateToProps = ({ dog }) => ({ dog });

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(DogExample)
);
