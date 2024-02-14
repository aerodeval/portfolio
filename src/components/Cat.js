import { useRive } from "@rive-app/react-canvas";
import cat from '../elements/cat.riv';
export default function Cat() 
{
const STATE_MACHINE_NAME = 'State Machine 1';

 const {rive,RiveComponent}=useRive({
src:cat,
stateMachines:STATE_MACHINE_NAME,
autoplay:true,




 });


 return <RiveComponent className="catstyle" />
}