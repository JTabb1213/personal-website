import React from "react";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import { Grid } from "@mui/material";
import Skills from "../components/Skills";

export default function Home() {
    return <Grid direction="column" container sx={{ flexWrap: 'nowrap', height: '100%' }}>
        <Grid item container id="aboutSection"
        >
            <AboutSection />
        </Grid>
        <Grid item container id="projects">
            <Projects />
        </Grid>
        <Grid item container id="skillsSection" >
            <Skills />
        </Grid>
    </Grid>
}
