import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { STARWARS, getStarwars } from "../../actions";
import styles from "./styles.module.css";

const Starwars = ({ starwars, getStarwars, history }) => (
    <div>
        <h1>Data with starwars</h1>
        <button onClick={() => history.push("/dogs")}>back to dogs</button>
        <button onClick={getStarwars}>fetch star wars data</button>

        <div className={styles.starwars}>
            <div>
                {starwars.data &&
                    starwars.data.map((item, index) => (
                        <div key={index} className={styles.dataBox}>
                            {JSON.stringify(item)}
                        </div>
                    ))}
            </div>
        </div>
    </div>
);

const mapDispatchToProps = { getStarwars };
const mapStateToProps = ({ starwars }) => ({ starwars });

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Starwars)
);
