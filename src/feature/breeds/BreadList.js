import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBreeds } from "./breedsSlice";
import {
  CircularProgress,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

const BreedsList = () => {
  const dispatch = useDispatch();
  const { breeds, status, error } = useSelector((state) => state.breeds);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBreeds());
    }
  }, [status, dispatch]);

  return (
    <Container>
      <Typography align="center" marginTop={5} variant="h4" gutterBottom>
        Breeds List
      </Typography>
      {status === "loading" && (
        <Box display="flex" justifyContent="center" m={2}>
          <CircularProgress />
        </Box>
      )}
      {status === "failed" && (
        <Typography align="center" color="error" variant="h6">
          Error: {error}
        </Typography>
      )}
      {status === "succeeded" && (
        <List>
          {breeds.map((breed) => (
            <ListItem key={breed.id} alignItems="flex-start">
              <ListItemText
                primary={breed.attributes.name}
                secondary={breed.attributes.description}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default BreedsList;
