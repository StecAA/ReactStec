import { logout } from "../../sevices/firebase"
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import {ChangeShowNAME} from "../../Store/profile/actions"


export const ConnectedProfile = ({ onLogout}) => {
const handleLogout = async () => {
try {
    await logout();
} catch (e) {
    console.warn(e);
}
}

const dispath = useDispatch()
    const date = useSelector((state)=> state);
    const handleChangeNAME = () => {
        dispath(ChangeShowNAME);
        console.log(date);
    }

return (
<>


<h3> Profile </h3>
<div>
    <button onClick={handleLogout}>Logout</button>
</div>
 {/* <div>
 {showName && <span>{name}</span>}
 <input type="checkbox" />

 </div>  */}
    <div>
    {date.showName && <span>{date.name}</span>}
    </div>
    <Checkbox onClick={handleChangeNAME}/>
   



</>


)





}