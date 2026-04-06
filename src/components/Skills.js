import { Grid } from "@mui/material";
import styles from "../css/app.module.css";

export default function Skills() {
    return (
        <Grid className={styles.section} sx={{ backgroundColor: '#ebeeee' }} container direction="column" alignItems="center" justifyContent="start">
            <h5 className={styles.sectionIntro}>Skills</h5>
            <Grid container spacing={2} style={{ overflowWrap: 'break-word' }}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} container justifyContent='center'>
                    <div className={styles.skillBox}>
                        <img src='Skills3.png' style={{ borderRadius: '10px' }} alt="Language Icon"></img>
                        <h3>Languages</h3>
                        JavaScript, TypeScript, Python, C++, HTML/CSS, Bash, x86 Assembly
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} container justifyContent='center'>
                    <div className={styles.skillBox}>
                        <img src='Skills1.png' style={{ borderRadius: '10px' }} alt="Frameworks Icon"></img>
                        <h3>Frameworks</h3>
                        React.js, Node.js, Express.js, Flask, Angular, RESTful APIs
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} container justifyContent='center'>
                    <div className={styles.skillBox}>
                        <img src='Skills2.png' style={{ borderRadius: '10px' }} alt="Tools Icon"></img>
                        <h3>Data Storage & Tools</h3>
                        PostgreSQL, MySQL, Redis, Linux (RHEL), Docker, Google Cloud Platform, Oracle Cloud Infrastructure, Git, AWS
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}
