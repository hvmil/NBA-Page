import React, { useState, useEffect } from "react";
import scoutServices from "../services/scout";
import {
  TextField,
  Button,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material/";

const ScoutingReport = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthort] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReportObject = {
      index: reports.length + 1,
      id: new Date().toISOString(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
      }),
      scout: newAuthor,
      dxId: "",
      player: "Victor Oladipo",
      event: newTitle,
      report: newReport,
      team: "MIA",
    };
    scoutServices.create(newReportObject).then((res) => {
      setReports(reports.concat(newReportObject));
      setNewReport("");
      setNewAuthort("");
      setNewTitle("");
    });
  
  };

  useEffect(() => {
    scoutServices.getAll().then((initialReports) => setReports(initialReports));
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Typography variant="h3" color='white' sx={{mt:4}}>Scout Reports</Typography>
       
      </div>
      <List
        sx={{
          width: "100%",
          maxWidth: "80%",
          bgcolor: "background.paper",
          borderRadius: "10px",
        }}
      >
        {reports.map((report, i) => {
          return (
            <div key={i}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={report.scout}
                    src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?size=626&ext=jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={report.event}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {report.scout}
                      </Typography>
                      <span>-{report.report}</span>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );
        })}
      </List>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 style={{ color: "white" }}>Submit New Report</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "10px",
              justifyContent: "flex-start",
              gap: "10px",
              marginLeft: "20px",
            }}
          >
            <TextField
              id="title-singleline"
              label="Title"
              defaultValue={newTitle}
              variant="standard"
              onChange={(e) => setNewTitle(e.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: "2px",
              }}
            />
            <TextField
              id="author-singleline"
              label="Author"
              defaultValue={newAuthor}
              variant="standard"
              onChange={(e) => setNewAuthort(e.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: "2px",
              }}
            />
          </div>
          <div>
            <TextField
              id="standard-multiline-static"
              multiline
              label="Submit a New Report"
              rows={10}
              defaultValue={newReport}
              variant="standard"
              onChange={(e) => setNewReport(e.target.value)}
              sx={{
                backgroundColor: "white",
                margin: "20px",
                width: "60vw",
                alignSelf: "center",
                borderRadius: "2px",
              }}
            />
          </div>
          <Button
            variant="filled"
            sx={{
              backgroundColor: "#F9A01B !important",
              width: "10vw",
              alignSelf: "center",
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ScoutingReport;
