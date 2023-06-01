import mountains from "../../assets/mountains.png"
import redCheck from "../../assets/Red Check.png"
export function ImageContent() {
    return (
        <>
            <img className={'ManyImages img-fluid border rounded'} src={mountains} alt=""/>
            <button><img className={'redCheckButton image-fluid'} src={redCheck} alt=""/></button>
        </>
    )}