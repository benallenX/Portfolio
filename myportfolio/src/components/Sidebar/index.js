import React from 'react'
import {SidebarContainer, Icon,CloseIcon,SidebarLink,SidebarMenu,SidebarWrapper} from './SidebarElements'


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='work' onClick={toggle}>
                        Work
                    </SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}>
                        Contract
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
