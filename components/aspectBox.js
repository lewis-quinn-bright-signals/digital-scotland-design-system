import Link from "next/link";
import Image from "next/image";
import '../styles/Home.module.css'

export default function AspectBox() {
    return (
        <div class="ds_aspect-box  ds_aspect-box--square">
            <div>

            </div>
            <div class="ds_aspect-box__inner">
                <Image 
                    src={'/../public/scotland.png'}
                    alt={'filler'}  
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center' 
                />
            </div>
        </div>
    )
}