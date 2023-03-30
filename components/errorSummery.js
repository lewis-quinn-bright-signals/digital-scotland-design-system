import Link from "next/link"

export default function ErrorSummary() {
    return (
        <>
            <div class="ds_error-summary" id="error-summary" aria-labelledby="error-summary-title" role="alert">
                <h2 class="ds_error-summary__title" id="error-summary-title">
                    There is a problem
                </h2>

                <ul class="ds_error-summary__list">
                    <li>
                        <a>
                            <Link href={"#resolve"}>
                                Did this resolve your issue?
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link href={"#topics"}>
                                What topics are you interested in?
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link href={"#more-detail"}>
                                Please provide more detail
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}