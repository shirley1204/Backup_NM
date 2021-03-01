import React, { Component } from 'react'
import Drawer from '../../reusuable/Drawer'
import Appbar from '../../reusuable/Appbar'
import SettingBox from './SettingBox'

 class Settings extends Component {
    render() {
        return (
            <React.Fragment>
              
            <Drawer>
            <Appbar title="Settings" />
             <SettingBox />
         
                
                </Drawer>
                </React.Fragment>


        )
    }
}
export default Settings