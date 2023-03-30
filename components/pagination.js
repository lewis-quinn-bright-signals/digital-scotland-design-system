import Link from "next/link"

export default function Pagination() {
    return (
        <>
            <nav class="ds_pagination" aria-label="Search result pages">
                <ul class="ds_pagination__list">
                    <li class="ds_pagination__item" aria-current="page">
                        <span class="ds_pagination__link  ds_current">
                            1
                        </span>
                    </li>
                    <li class="ds_pagination__item">
                        <a class="ds_pagination__link">
                            <Link href={"#"}>
                                <span class="ds_pagination__link-label">
                                    2
                                </span>
                            </Link>
                        </a>
                    </li>
                    <li class="ds_pagination__item">
                        <a class="ds_pagination__link">
                            <Link href={"#"}>
                                <span class="ds_pagination__link-label">
                                    3
                                </span>
                            </Link>
                        </a>
                    </li>
                    <li class="ds_pagination__item">
                        <a class="ds_pagination__link">
                            <Link href={"#"}>
                                <span class="ds_pagination__link-label">
                                    4
                                </span>
                            </Link> 
                        </a>
                    </li>
                    <li class="ds_pagination__item" aria-hidden="true">
                        <span class="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
                    </li>
                    <li class="ds_pagination__item">
                        <a class="ds_pagination__link">
                            <Link href={"#"}>
                                <span class="ds_pagination__link-label">
                                    27
                                </span>
                            </Link>
                        </a>
                    </li>
                    <li class="ds_pagination__item">
                        <a class="ds_pagination__link  ds_pagination__link--text  ds_pagination__link--icon">
                            <Link href="#">
                                <span class="ds_pagination__link-label">
                                    Next
                                </span>
                                <svg class="ds_icon" aria-hidden="true" role="img">
                                    <use href="/assets/images/icons/icons.stack.svg#chevron_right"></use>
                                </svg>
                            </Link>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}