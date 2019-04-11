// @flow
import * as React from "react";
import styles from "./styles.module.css";

export default class LoadingSpinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.spinner} />
            </div>
        );
    }
}
