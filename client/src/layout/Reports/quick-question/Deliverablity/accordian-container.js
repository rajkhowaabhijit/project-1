import React from 'react'
import {Grid} from '@material-ui/core'
import ControledAccordians from '../../../../components/Accordian/accordian'
import SimpleBadge from '../../../../atom/Badge/badge'

const AccordianContainer = () => {
    return(
        <>
            <Grid item xs={12}>
                <ControledAccordians heading = "Sender Authentication" subheading = {
                    <Grid container spacing={10}>
                        <Grid item>
                            <SimpleBadge name = "DKIM:Pass" color="#5b009a" bgcolor="#5b009a26" />
                        </Grid>
                        <Grid item>
                            <SimpleBadge name = "SPI:Pass" color="#5b009a" bgcolor="#5b009a26" />
                        </Grid>
                        <Grid item>
                            <SimpleBadge name = "rDNS:Pass" color="#5b009a" bgcolor="#5b009a26" />
                        </Grid>
                    </Grid>
                } />
            </Grid>
            <Grid item xs={12}>
                <ControledAccordians heading = "Sender Score" subheading = {
                        <Grid container spacing={10}>
                            <Grid item>
                                <SimpleBadge name = "98" color="#5b009a" bgcolor="#5b009a26" />
                            </Grid>
                        </Grid>
                    } />                   
            </Grid>
            <Grid item xs={12}>
                <ControledAccordians heading = "IP Black List" subheading = {
                        <Grid container spacing={10}>
                            <Grid item>
                                <SimpleBadge name = "rDNS:Pass" color="#5b009a" bgcolor="#5b009a26" />
                            </Grid>
                        </Grid>
                    } />
            </Grid>
            <Grid item xs={12}>
                <ControledAccordians heading = "Google Spam Filter" subheading = {
                        <Grid container spacing={10}>
                            <Grid item>
                                <SimpleBadge name = "SPI:Pass" color="#5b009a" bgcolor="#5b009a26" />
                            </Grid>
                            <Grid item>
                                <SimpleBadge name = "rDNS:Pass" color="#5b009a" bgcolor="#5b009a26" />
                            </Grid>
                        </Grid>
                    } />
            </Grid>
        </>
    )
}

export default AccordianContainer