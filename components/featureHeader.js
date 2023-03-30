import Image from "next/image"
import Button from '<designscotland>/components/button'

export default function FeatureHeader() {
    return (
        <>
            <header class="ds_feature-header">
                <div class="ds_feature-header__primary">
                    <h1 class="ds_feature-header__title">
                        Design standards
                    </h1>

                    <p>
                        The patterns included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland.
                    </p>

                    <Button/>
                </div>

                <div class="ds_feature-header__secondary">
                    <div className="ds_feature-header__image">
                        <Image 
                            src={"/assets/images/examples/category-header-design-standards.svg"}
                            alt={'filler'}  
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center' 
                        />
                    </div>
                </div>
            </header>
        </>
    )
}