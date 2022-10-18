import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
// React-hook-form
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ScrollToFade from "../components/ScrollToFade";
import { Map } from "../components/Map";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required")
});

interface IFormInput {
  email: string;
  phone: string;
  message: string;
}

const defaultValues = {
  email: "",
  phone: "",
  message: ""
};

export const Contact = (props: any) => {
  const { handleSubmit, control, reset } = useForm<IFormInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <Container
      id="#contact"
      disableGutters
      maxWidth="md"
      component="main"
      sx={{ my: 10, pt: 1, pb: 6, alignItems: "left", flexGrow: 1 }}
    >
      <ScrollToFade>
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <Typography component="h1" variant="h5" gutterBottom>
                Contact Us
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({
                    field: { onChange, value, onBlur },
                    fieldState: { error }
                  }) => {
                    return (
                      <TextField
                        helperText={error ? error.message : null}
                        size="medium"
                        error={!!error}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        fullWidth
                        label="Email"
                        type="email"
                        required
                      />
                    );
                  }}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error }
                  }) => {
                    return (
                      <TextField
                        margin="normal"
                        fullWidth
                        inputRef={ref}
                        label="Phone No"
                        type="phone"
                        id="phone"
                        autoComplete="phone"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                />

                <Controller
                  name="message"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error }
                  }) => {
                    return (
                      <TextField
                        margin="normal"
                        fullWidth
                        multiline
                        rows={10}
                        inputRef={ref}
                        label="What would you like to say ?"
                        type="message"
                        id="message"
                        autoComplete="message"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    "&:hover": {
                      "&:after": {
                        opacity: 1,
                        right: "10px"
                      },
                      transition: "0.5s",
                      background: "green",
                      paddingRight: "24px",
                      paddingLeft: "8px"
                    }
                  }}
                >
                  {"Send Message"}
                  <SendIcon />
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ScrollToFade>
      {/* <Map location={location} zoomLevel={17} /> */}
    </Container>
  );
};
