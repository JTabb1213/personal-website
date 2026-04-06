import styles from "../css/app.module.css";
import { Box, Button, CardActions, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

function ProjectCard({ title, desc, links, image, status }) {
    const handleLinkClicked = (link) => {
        if (link.url) {
            window.open(link.url)
        }
    }
    return <Card elevation={10} sx={{ width: { xs: '200px', sm: '250px' }, height: '300px', position: 'relative', overflow: 'hidden' }}>
        {status && (
            <Box sx={{
                position: 'absolute',
                top: 28,
                right: -38,
                width: '160px',
                backgroundColor: '#4caf50',
                color: '#fff',
                fontSize: '11px',
                fontWeight: '900',
                textAlign: 'center',
                padding: '4px 0',
                transform: 'rotate(45deg)',
                zIndex: 10,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}>
                {status}
            </Box>
        )}
        <CardContent sx={{ paddingBottom: 0 }}>
            <Grid container direction="column">
                <Grid container justifyContent="center">
                    <Box sx={{ backgroundColor: '#fff', borderRadius: '50%', width: '5em', height: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <Box component="img" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} src={image} alt={title} />
                    </Box>
                </Grid>
                <Typography gutterBottom variant="h5" component="div" sx={{ marginTop: '10px' }}>
                    {title}
                </Typography>
                <Typography sx={{ height: '70px' }} variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </Grid>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', paddingTop: 0 }}>
            {links && links.filter(link => link.url).map(link => (
                <Button key={link.label} size="small" onClick={() => handleLinkClicked(link)}>{link.label}</Button>
            ))}
        </CardActions>
    </Card>
}

export default function Projects() {
    return <Grid container item direction="row" alignItems="center" justifyContent="center"
        sx={{ backgroundColor: '#fff' }} className={styles.section}>
        <Grid item>
            <h5 className={styles.sectionTitle}>Projects</h5>
            <h1 className={styles.sectionIntro}>Check out my creations.</h1>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center" columnSpacing={5}>
            <Grid item>
                <ProjectCard
                    title="CityInfo"
                    desc="Search for a city to get a map, current weather, and upcoming events"
                    links={[{
                        label: 'Github',
                        url: 'https://github.com/JTabb1213/weather'
                    }, {
                        label: 'Go to app',
                        url: 'https://city-info-ui.web.app/'
                    }]}
                    image="/cityinfo-app.png" />
            </Grid>
            <Grid item>
                <ProjectCard
                    title="RestaurantReviewer"
                    desc="Allows a user to review a restaurant using a GPS location"
                    links={[{
                        label: 'Github',
                        url: 'https://github.com/JTabb1213/reviews'
                    }, {
                        label: 'Go to app',
                        url: 'https://disco-plane-488917-i4.web.app/'
                    }]}
                    image="/restaurant.png">
                </ProjectCard>

            </Grid>
            <Grid item>
                <ProjectCard
                    title="Crypto Data Hub"
                    desc="Added live multi exchange data for a few coins. Still need to work on more features"
                    links={[{
                        label: 'Github',
                        url: 'https://github.com/JTabb1213/app-'
                    }, {
                        label: 'Go to app',
                        url: 'https://adminapp-489616.web.app'
                    }]}
                    image="/crypto_images.png"
                    status="In Progress">
                </ProjectCard>

            </Grid>

        </Grid>

    </Grid>
}
