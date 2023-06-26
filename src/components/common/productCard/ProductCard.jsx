import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({item, isInItemList}) => {
  return (
    <div>
        <Card sx={{ width: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="100%"
                image={item.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.desc}
                </Typography>
            </CardContent>
            <CardActions>
                {isInItemList ? 
                    (<Button size="small">Ver mas</Button>) : (<Button size="small">Eliminar</Button>)
                }
            </CardActions>
        </Card>
    </div>
  )
}

export default ProductCard