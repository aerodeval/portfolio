import { useRive, useStateMachineInput} from "@rive-app/react-canvas";
import lego from '../elements/lego.riv';
export default function Lego() 
{
const STATE_MACHINE_NAME = 'State Machine 1';

const {rive,RiveComponent}=useRive({
src:lego,
stateMachines:STATE_MACHINE_NAME,
autoplay:true,
input:"swapFace"



 });
 const onClickInput=useStateMachineInput(
    rive,STATE_MACHINE_NAME
 );


 return <RiveComponent onClick={()=>onClickInput.fire()} className="catstyle" />
}