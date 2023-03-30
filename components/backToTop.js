import Link from "next/link"

export default function BackToTop() {
    return (
        <div class="ds_back-to-top" data-module="ds-back-to-top">
            <a class="ds_back-to-top__button">
                <Link href="#">
                    Back to top
                    <svg class="ds_icon  ds_back-to-top__icon" aria-hidden="true" role="img">
                        <use href="/assets/images/icons/icons.stack.svg#arrow_upward"></use>
                    </svg>
                </Link> 
            </a>
        </div>
    )
}