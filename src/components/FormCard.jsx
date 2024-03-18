import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const FormCard = ({ title, teacher, schedule, price }) => {
  return (
    <div className="">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          columnGap: "10px",
          border: "1px solid",
          borderColor: "#d6c3a5",
          width: "220px",
          borderRadius: "20px",
        }}
      >
        <List
          sx={{
            padding: "20px",
          }}
          subheader={
            <Typography variant="h5" sx={{ color: "#d6c3a5" }}>
              {title}
            </Typography>
          }
        >
          <>
            <ListItem key={teacher}>
              <ListItemText
                className="tw-text-[#d6c3a5]"
                primary={teacher}
                secondary={
                  <Typography sx={{ color: "#d6c3a5" }}>
                    {schedule}, {price}
                  </Typography>
                }
              />
            </ListItem>
          </>
        </List>
      </Box>
    </div>
  );
};

export default FormCard;
