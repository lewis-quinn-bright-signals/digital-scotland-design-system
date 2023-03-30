import Image from "next/image"
import Link from "next/link"
import Autocomplete from "./autocomplete"
import CookieNotice from "./cookieNotice"
import NotificationBanner from "./notificationBanner/notificationBanner"
import SiteNavigation from "./siteNavigation"
import SiteSearch from "./siteSearch"

export default function Nav() {
    return (
        <>

            <CookieNotice/>

            <NotificationBanner/>

            <div class="ds_site-header  ds_site-header--gradient" role="banner">
                <div class="ds_wrapper">
                    <div class="ds_site-header__content">
                        <div class="ds_site-branding">
                            <a class="ds_site-branding__logo  ds_site-branding__link">
                                <Link href={"#"}>

                                    <div className="ds_site-branding__logo-image">
                                        <Image 
                                            src={"/../public/scotland.png"}
                                            alt={'filler'}  
                                            layout='fill'
                                            objectFit='cover'
                                            objectPosition='center' 
                                        />
                                    </div>
                                    
                                </Link>
                            </a>

                            <div class="ds_site-branding__title">
                                Design System
                            </div>
                        </div>
                    
                        <div class="ds_site-header__controls">
                            <label aria-controls="mobile-navigation" class="ds_site-header__control  js-toggle-menu" for="menu">
                                <span class="ds_site-header__control-text">
                                    Menu
                                </span>
                                <svg class="ds_icon  ds_site-header__control-icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#menu"></use></svg>
                                <svg class="ds_icon  ds_site-header__control-icon  ds_site-header__control-icon--active-icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#close"></use></svg>
                            </label>
                        </div>

                        <input class="ds_site-navigation__toggle" id="menu" type="checkbox" />
                        <nav id="mobile-navigation" class="ds_site-navigation  ds_site-navigation--mobile" data-module="ds-mobile-navigation-menu">
                            <SiteNavigation/>
                        </nav>

                        <SiteSearch/>

                    </div>
                </div>

                <div class="ds_site-header__navigation">
                    <div class="ds_wrapper">
                        <nav class="ds_site-navigation">
                            <SiteNavigation/>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}