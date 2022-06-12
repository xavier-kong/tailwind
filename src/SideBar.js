import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export default function SideBar () {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary">
            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>
        </div>
    )
}

const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">{icon}</div>
)