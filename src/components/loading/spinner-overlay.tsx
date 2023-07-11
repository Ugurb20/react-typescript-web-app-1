import React from "react";
import styles from "./spinner-overlay.module.scss";

interface SpinnerOverlayProps {
  children?: React.ReactNode;
}

const SpinnerOverlay = ({ children }: SpinnerOverlayProps) => (
	<div
		style={{
			width: "100vw",
			height: "100vh",
			position: "absolute",
			top: "0",
			left: "0",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		}}
	>
		<div className={styles.spinnerOverlay}>
			<div className={styles.spinnerOverlay__spinner} />
			{children}
		</div>
	</div>
);

export default SpinnerOverlay;
