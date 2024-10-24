import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "monospace",
          marginTop: "30px",
          fontSize: { xs: "25px", md: "30px" },
        }}
        gutterBottom
      >
        Frequently Asked Questions (FAQs)
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "serif",
            }}
          >
            Are the news on this website accurate?
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "monospace",
            }}
          >
            Absolutely! All news and information on this website are verified
            and accurate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "serif",
            }}
          >
            Can I save articles for later?
          </Typography>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "monospace",
            }}
          >
            No, this website serves to provide information only and does not
            offer a save-for-later feature.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "serif",
            }}
          >
            Is there cryptocurrency news available?
          </Typography>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "monospace",
            }}
          >
            Yes, you can find all the latest news about cryptocurrency and
            Bitcoin here.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "serif",
            }}
          >
            Is there a mobile app available?
          </Typography>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "monospace",
            }}
          >
            No, this is a web-based platform accessible via any browser.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "serif",
            }}
          >
            How can I contact customer support?
          </Typography>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "monospace",
            }}
          >
            You can reach out to us through the 'Contact Us' section on our
            website or email support@hrishi333.com.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FAQ;
