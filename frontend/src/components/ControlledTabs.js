import React from 'react'
import { Paper,Tabs,Tab } from '@material-ui/core'

import AccountMaster from '../screens/AccountMaster'


const ControlledTabs = () => {

    return (
        <Paper square>
        <Tabs
            value=""
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
        >
            <Tab label="Active" />
            <Tab label="Disabled" disabled />
            <Tab label="Active" />
        </Tabs>
        </Paper>
    )
}

export default ControlledTabs
