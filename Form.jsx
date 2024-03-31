import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
// Correct the import path to use 'isConnected' function from the gemwallet_api module
import { isInstalled } from "@gemwallet/api";
import { submitTransaction } from "@gemwallet/api";
import styles from "./Form.module.scss";

export const Form = () => {
  const [value, setValue] = useState(5); // Default value set to 5 XRP

  const handleValueChange = (amount) => {
    setValue(amount);
  };

  const handlePaymentButton = () => {
    isInstalled()
      .then((isInstalled) => {
        if (!isInstalled) {
          throw new Error("Please install GemWallet extension, it doesn't seem installed");
        }
        if (!value) {
          throw new Error("Please select a rental plan");
        }
        const transaction = {
          chain: "xrp",
          network: "TEST",
          transaction: "payment",
          amount: value,
          destination: "rpvCEZrBeDocL6vaZry7ZHBkFRvLLzZ3fm",
          token: "xrp",
          apiVersion: 1,
        };
        return submitTransaction(transaction);
      })
      .then((status) => {
        if (status === "success") {
          alert("Your payment was properly made over the network");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Paper className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h6">Select A Scooter Rental Plan Below</Typography>
      </div>
      <div className={styles.body}>
        <ButtonGroup aria-label="outlined primary button group">
          <Button
            variant={value === 5 ? "contained" : "outlined"}
            onClick={() => handleValueChange(5)}
          >
            5 XRP / HR
          </Button>
          <Button
            variant={value === 20 ? "contained" : "outlined"}
            onClick={() => handleValueChange(20)}
          >
            20 XRP / 5 HRS
          </Button>
          <Button
            variant={value === 35 ? "contained" : "outlined"}
            onClick={() => handleValueChange(35)}
          >
            35 XRP / 10 HRS
          </Button>
        </ButtonGroup>
        <div className={styles.textAreaContainer}>
          <TextField
            className={styles.textArea}
            label="Your comment"
            multiline
            rows={2}
          />
        </div>
        <Button variant="contained" onClick={handlePaymentButton}>
          Payment
        </Button>
      </div>
    </Paper>
  );
};
