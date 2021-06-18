import React from 'react'
import { Grid } from '@material-ui/core'
import List from '../components/business/Performance';

function Projects() {
    return (
        <div>
            <Grid container>
                <Grid item sm={12}>
                    <List />
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects
