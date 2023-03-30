import Link from "next/link"

export default function HideThisPage() {
    return (
        <>
            <div class="ds_hide-page">
                <a data-altlink="https://www.google.co.uk" class="ds_hide-page__button  ds_button  js-hide-page">
                    <Link href={"http://bbc.co.uk/weather"}>
                        <strong>
                            Hide this page
                        </strong> 
                        <span class="visually-hidden  js-enabled-text">
                            Or press escape key to hide this page
                        </span>
                    </Link>
                </a>

                <p class="ds_hide-page__text  js-enabled-text">
                    (Or press Esc key)
                </p>
            </div>
        </>
    )
}