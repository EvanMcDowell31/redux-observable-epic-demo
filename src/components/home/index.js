import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ping } from "../../actions";

const HomePage = ({ isPinging, ping, history }) => (
    <div>
        <h1>is pinging: {isPinging.toString()}</h1>
        <button onClick={ping}>Start PING</button>
        <button onClick={() => history.push("/dogs")}>go to dogs</button>
    </div>
);

const mapDispatchToProps = { ping };
const mapStateToProps = ({ isPinging }) => ({ isPinging });

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomePage)
);
