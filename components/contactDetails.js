import Link from "next/link";
import Image from "next/image";

export default function ContactDetails() {
    return (
        <>
            <div class="ds_contact-details">

                <h2 class="ds_contact-details__title">
                    Contact
                </h2>

                <dl class="ds_contact-details__list">
                    <div class="ds_contact-details__item">
                        <dt>
                            Address
                        </dt>
                        <dd translate="no">
                            <address>
                                Scottish Government<br />
                                St. Andrew's House<br />
                                Regent Road<br />
                                Edinburgh<br />
                                EH1 3DG
                            </address>
                        </dd>
                    </div>

                    <div class="ds_contact-details__item">
                        <dt>
                            Email
                        </dt>
                        <dd>
                            <a>
                                <Link href={"mailto:#"}>
                                    email@gov.scot
                                </Link>
                            </a>
                        </dd>
                    </div>

                    <div class="ds_contact-details__item">
                        <dt>
                            Phone
                        </dt>
                        <dd>
                            0123 456 7000<br />
                            Main line is open 8am-5pm<br />
                            <a>
                                <Link href={"https://www.gov.uk/call-charges"}>
                                    Find out about call charges
                                </Link>
                            </a>
                        </dd>
                    </div>

                    <div class="ds_contact-details__item">
                        <dt>
                            Out of hours
                        </dt>
                        <dd>
                            0123 456 7001
                        </dd>
                    </div>

                    <div class="ds_contact-details__item">
                        <dt>
                            Fax
                        </dt>
                        <dd>
                            0123 456 7002
                        </dd>
                    </div>        

                    <div class="ds_contact-details__item  ds_contact-details__social">
                        <dt class="visually-hidden">
                            Social media
                        </dt>
                        <dd class="ds_contact-details__social-item">
                            <a class="ds_contact-details__social-link">
                                <Link href={"#"}>
                                    <svg class="ds_contact-details__social-icon  ds_icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#facebook"></use></svg>
                                    Facebook
                                </Link>
                            </a>
                        </dd>

                        <dd class="ds_contact-details__social-item">
                            <a class="ds_contact-details__social-link">
                                <Link href={"#"}>
                                    <svg class="ds_contact-details__social-icon  ds_icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#twitter"></use></svg>
                                    @scotgov
                                </Link>
                                
                            </a>
                        </dd>

                        <dd class="ds_contact-details__social-item">
                            <a class="ds_contact-details__social-link">
                                <Link href={"#"}>
                                    <svg class="ds_contact-details__social-icon  ds_icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#flickr"></use></svg>
                                    Flickr
                                </Link>
                            </a>
                        </dd>

                        <dd class="ds_contact-details__social-item">
                            <a class="ds_contact-details__social-link">
                                <Link href={"#"}>
                                    <svg class="ds_contact-details__social-icon  ds_icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#youtube"></use></svg>
                                    YouTube
                                </Link>
                            </a>
                        </dd>

                        <dd class="ds_contact-details__social-item">
                            <a class="ds_contact-details__social-link">
                                <Link href={"#"}>
                                    <svg class="ds_contact-details__social-icon  ds_icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#blog"></use></svg>
                                    Blog
                                </Link>
                            </a>
                        </dd>
                    </div>
                </dl>

            </div>
        </>
    )
}