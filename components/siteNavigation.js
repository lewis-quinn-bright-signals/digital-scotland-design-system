import Link from "next/link"

export default function SiteNavigation() {
    return (
        <>
            <ul class="ds_site-navigation__list">
                <li class="ds_site-navigation__item">
                    <a class="ds_site-navigation__link">
                        <Link href={"#"}>
                            Get started
                        </Link>
                    </a>
                </li>
                <li class="ds_site-navigation__item">
                    <a class="ds_site-navigation__link">
                        <Link href={"#"}>
                            Styles
                        </Link>
                    </a>
                </li>
                <li class="ds_site-navigation__item">
                    <a class="ds_site-navigation__link  ds_current">
                        <Link href={'#'}>
                            Components
                        </Link>
                    </a>
                </li>
                <li class="ds_site-navigation__item">
                    <a class="ds_site-navigation__link">
                        <Link href={"#"}>
                            Patterns
                        </Link>
                    </a>
                </li>
            </ul>
        </>
    )
}