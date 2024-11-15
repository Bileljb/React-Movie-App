import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';
function MovieCard({ id, title, description, poster, rate, trailer }) {

    return (
        <div >
        <Card className={"card"} sx={{ minHeight: '280px', width: 320 }}>
                <CardCover>
                    <img
                        src={poster}
                        loading="lazy"
                        alt=""
                    />
                </CardCover>
                <CardCover
                    sx={{
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                    }}
                />
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                    <Typography level="title-lg" textColor="#fff">
                        {title}
                    </Typography>
                    <Typography
                        textColor="neutral.300"
                    >
                        Rate: {rate}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default MovieCard;