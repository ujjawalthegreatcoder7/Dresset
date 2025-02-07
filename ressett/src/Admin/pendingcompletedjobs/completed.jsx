import * as React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import "./completed.css"

export default function Completed() {
  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
      </Typography>

      <Grid container spacing={3}>
        {[1, 2,3,4,5].map((item) => (
          <Grid item xs={12} sm={6} md={4} >
            <Card
              elevation={3}
              style={{
                borderRadius: "10px",
                transition: "transform 0.3s",
              }}
              className="delivery-card"
            >
              <CardContent  style={{backgroundColor:""}} className='deliveryboybox' >
                <Typography variant="h5" gutterBottom>
                  Ramesh
                </Typography>
                <Typography variant="body1">
                  <b>Delivery Boy I.D:</b> 01-01-2005
                </Typography>
                <Typography variant="body1">
                  <b>Delivery Boy Password:</b> Customer
                </Typography>
              </CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.5rem 1rem",
                }}
              >
                <Button 
                 backgroundColor="black" 
                  variant="outlined"
                  color="primary"
                  startIcon={<CreateIcon />}
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    color :"orange",
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon  style={{color:"black"}}/> }
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    color : "black"  ,
                  }}
                >
                  Delete
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
