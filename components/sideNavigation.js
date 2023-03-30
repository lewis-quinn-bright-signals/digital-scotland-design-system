import Link from "next/link"

export default function SideNavigation() {
    return (
        <>
            <nav aria-label="Sections" class="ds_side-navigation" data-module="ds-side-navigation">
                <input type="checkbox" class="fully-hidden  js-toggle-side-navigation" id="show-side-navigation" aria-controls="side-navigation-root" />
                <label class="ds_side-navigation__expand  ds_link" for="show-side-navigation">
                    <span class="visually-hidden">
                        Show all
                    </span>
                    Pages in this section 
                    <span class="ds_side-navigation__expand-indicator"></span>
                </label>

                <ul class="ds_side-navigation__list" id="side-navigation-root">
                    <li class="ds_side-navigation__item  ds_side-navigation__item--has-children  ds_side-navigation__item--has-children--expanded">
                        <a class="ds_side-navigation__link">
                            <Link href={"#"}>
                                Apples
                            </Link>
                        </a>
                        <ul class="ds_side-navigation__list">
                            <li class="ds_side-navigation__item  ds_side-navigation__item--has-children">
                                <a class="ds_side-navigation__link">
                                    <Link href={"#"}>
                                        Green apples
                                    </Link> 
                                </a>
                                <ul class="ds_side-navigation__list">
                                    <li class="ds_side-navigation__item">
                                        <span class="ds_side-navigation__link  ds_current">
                                            Bramley
                                        </span>
                                    </li>
                                    <li class="ds_side-navigation__item">
                                        <a class="ds_side-navigation__link">
                                            <Link href={"#"}>
                                                Granny Smith
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="ds_side-navigation__item  ds_side-navigation__item--has-children">
                                <a class="ds_side-navigation__link">
                                    <Link href={"#"}>
                                        Red apples
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="ds_side-navigation__item">
                        <a class="ds_side-navigation__link">
                            <Link href="#">
                                Bananas
                            </Link>
                        </a>
                    </li>
                    <li class="ds_side-navigation__item">
                        <a class="ds_side-navigation__link">
                            <Link href="#">
                                Cherries
                            </Link>
                        </a>
                    </li>
                    <li class="ds_side-navigation__item">
                        <a class="ds_side-navigation__link">
                            <Link href={"#"}>
                                Dates
                            </Link>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}