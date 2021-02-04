import React from 'react'
import {SidebarContainer, Icon,CloseIcon,SidebarLink,SidebarMenu,SidebarWrapper} from './SidebarElements'


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                        Home
                    </SidebarLink>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='about'>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='about'>
                        Work
                    </SidebarLink>
                    <SidebarLink to='about'>
                        Contract
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
