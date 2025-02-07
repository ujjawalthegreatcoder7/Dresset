import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{ display: "flex", justifyContent: "center" }}>
        Confirm Submit Request
      </DialogTitle>
      <Grid container spacing={2} justifyContent="center" style={{ padding: "1rem" }}>
        <Grid item xs={12} sm={6} md={4}>
          <button type="button" className="reqq btn mt-4 buttonSubmit" style={{ width: "100%" }}>
            Exit
          </button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <button type="button" className="btn mt-4 buttonSubmit req" style={{ width: "100%" }}>
            Submit
          </button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function AccordionUsage() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const [expandedPanel, setExpandedPanel] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        <b className="assignorder">Assign Orders</b>
      </Typography>

      <Accordion expanded={expandedPanel === "panel1"} onChange={handleAccordionChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1-header">
          <Typography><b>Select Delivery Boy</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label className="form-label">Enter Delivery Boy Name</label>
              <input type="email" className="form-control" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="form-label">I.D of Delivery Boy</label>
              <input type="password" className="form-control" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanel === "panel2"} onChange={handleAccordionChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel2-header">
          <Typography><b>Enter Pick-Up Details</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label className="form-label">Merchant Or Customer</label>
              <select className="form-select form-control">
                <option selected>Choose...</option>
                <option>Customer</option>
                <option>Merchant</option>
              </select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="form-label">Name</label>
              <input type="email" className="form-control" placeholder="Enter Name" />
            </Grid>
            <Grid item xs={12}>
              <label className="form-label">Phone Number</label>
              <input type="number" className="form-control" placeholder="Enter Phone Number" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanel === "panel3"} onChange={handleAccordionChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel3-header">
          <Typography><b>Enter Drop-Up Details</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label className="form-label">Name</label>
              <input type="email" className="form-control" placeholder="Enter Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="form-label">Phone Number</label>
              <input type="number" className="form-control" placeholder="Enter Phone Number" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanel === "panel4"} onChange={handleAccordionChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel4-header">
          <Typography><b>Enter Item Details</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <textarea className="form-control" style={{ width: "100%" }}></textarea>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanel === "panel5"} onChange={handleAccordionChange("panel5")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel5-header">
          <Typography><b>Enter Date & Check Payment Status</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label className="form-label">Enter Date</label>
              <input type="email" className="form-control" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="form-label">Payment Status</label>
              <select className="form-select form-control">
                <option selected>Payment Status</option>
                <option>Received</option>
                <option>Pending</option>
              </select>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
        <Button
          className="buttonSubmit"
          style={{ width: "100%", maxWidth: "20rem" }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Submit Details
        </Button>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </Grid>
    </div>
  );
}
