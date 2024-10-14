import 'react-pro-sidebar/dist/css/styles.css';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import sidebarBg from '../../assets/bg2.jpg';
import './Sidebar.scss'
import { DiReact } from "react-icons/di";



import { MdSpaceDashboard } from "react-icons/md";


const Sidebar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}

                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color={'00bfff'} />
                        Shoppee
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={< MdSpaceDashboard />}
                        // suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem />}> Components</MenuItem> */}
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaRegLaughWink />}
                            title="Features"
                        >
                            <MenuItem> Quản lý Users</MenuItem>
                            <MenuItem> Quản lý Bài Quiz</MenuItem>
                            <MenuItem> Quản lý Câu Hỏi</MenuItem>
                        </SubMenu>


                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            {/* <FaGithub /> */}
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                &#169;Shoppee
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>



        </>
    )
}

export default Sidebar;