
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import {ChangeShowNAME} from "../../Store/profile/actions"

export const Profile = () => {
    const dispath = useDispatch()
    const date = useSelector((state)=> state);
    console.log(date);
    const handleChangeNAME = () => {
        dispath(ChangeShowNAME);
        console.log(date);
    }
   
return (<>
    <h1>Profile page </h1>
    <div>
    {date.showName && <span>{date.name}</span>}
    </div>
    <Checkbox onClick={handleChangeNAME}/>
    </>
)
};








