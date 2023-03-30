import Link from "next/link"

export default function SeqNavigation() {
    return (
        <>
            <nav class="ds_sequential-nav" aria-label="Article navigation">
                <div class="ds_sequential-nav__item  ds_sequential-nav__item--prev">
                    <a class="ds_sequential-nav__button  ds_sequential-nav__button--left">
                        <Link href={"#"}>
                            <span class="ds_sequential-nav__text" data-label="previous">
                                Apply for or renew a Blue Badge
                            </span>
                        </Link>
                    </a>
                </div>

                <div class="ds_sequential-nav__item  ds_sequential-nav__item--next">
                    <a class="ds_sequential-nav__button  ds_sequential-nav__button--right">
                        <Link href={"#"}>
                            <span class="ds_sequential-nav__text" data-label="next">
                                Eligibility: who can have one?
                            </span>
                        </Link>
                    </a>
                </div>
            </nav>
        </>
    )
}