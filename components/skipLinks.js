import Link from "next/link"

export default function SkipLinks() {
    return (
        <>
            <div class="ds_skip-links">
                <ul class="ds_skip-links__list">
                    <li class="ds_skip-links__item">
                        <a class="ds_skip-links__link">
                            <Link href={"#main-content"}>
                                Skip to main content
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}