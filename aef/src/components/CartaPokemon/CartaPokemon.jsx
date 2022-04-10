import { Typography, Card, CardMedia, Button, Box } from "@mui/material";

function CartaPokemon(props) {
    const {pokemonName,pokemonSubtitle, pokemonImage} = props;
    const cardStyle = { p: 3, width: 200, height: "100%" };
  return (
    <>
      <Card sx={cardStyle}>
        <Typography variant="h3">{pokemonName}</Typography>
        <CardMedia>
          <img
            src={pokemonImage}
            alt="Foto de Pikachu"
            style={{ width: "100%" }}
          />
        </CardMedia>
        <Typography variant="h6">{pokemonSubtitle}</Typography>
        <Button color="secondary">Me encanta</Button>
      </Card>
    </>
  );
}

export default CartaPokemon;
