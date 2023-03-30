import Link from "next/link"
import Image from "next/image"

export default function FileDownload() {
    return (
        <>
            <div class="ds_file-download">
                <div class="ds_file-download__thumbnail">
                    <a class="ds_file-download__thumbnail-link" aria-hidden="true" tabindex="-1" href="#">
                        <Link href={'#'}>
                            <span class="visually-hidden">
                                Document cover image
                            </span>
                            <div class="ds_file-download__thumbnail-image">
                                <Image 
                                    src={"/assets/images/graphics/ai-publication-cover.png"}
                                    alt={''}
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center' 
                                />
                            </div>
                        </Link>
                    </a>
                </div>

                <div class="ds_file-download__content">
                    <a class="ds_file-download__title" aria-describedby="file-download-1">
                        <Link href={'#'}>
                            Scotland's Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive
                        </Link>
                    </a>

                    <div id="file-download-1" class="ds_file-download__details">
                        <dl class="ds_metadata  ds_metadata--inline">
                            <div class="ds_metadata__item">
                                <dt class="ds_metadata__key  visually-hidden">
                                    File type
                                </dt>
                                <dd class="ds_metadata__value">
                                    44 page PDF
                                    <span class="visually-hidden">
                                        ,
                                    </span>
                                </dd>
                            </div>

                            <div class="ds_metadata__item">
                                <dt class="ds_metadata__key  visually-hidden">
                                    File size
                                </dt>
                                <dd class="ds_metadata__value">
                                    7.2 MB
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}