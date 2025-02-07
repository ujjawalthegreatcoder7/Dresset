import * as React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

export default function Pending() {

      const navigate = useNavigate();
             
        const Gotopenproceed = () => {
          navigate("/radha/pendingcompletesection/proceed");
        };

  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3,4,5].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card
              elevation={3}
              style={{
                borderRadius: "10px",
                transition: "transform 0.3s"
                // ,padding :"3rem"
              }}
              className="delivery-card"
            >
              <CardContent  style={{backgroundColor:""}}  className='deliveryboybox' >
                <Typography variant="h5" gutterBottom>
                  Ramesh
                </Typography>
                <Typography variant="body1">
                  <b>Job-Date:</b> 01-01-2005
                </Typography>
                <Typography variant="body1">
                  <b>Pick-Up from:</b> Customer
                </Typography>
                <Typography variant="body1">
                  <b>Payment Status:</b> Paid
                </Typography>
              </CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.5rem 1rem",
                  display:"flex",
                  justifyContent:"center",
                }}
              >
                <Button 
                onClick={Gotopenproceed}
                 backgroundColor="black" 
                  variant="outlined"
                  color="primary"
                  startIcon={<CreateIcon />}
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    color :"black",                    
                  }}
                >
                  Proceed
                </Button>

              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      <style>
        {`
          .delivery-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
}
