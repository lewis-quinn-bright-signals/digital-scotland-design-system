import Link from "next/link"

export default function PhaseBanner() {
    return (
        <>
            <div class="ds_phase-banner">
                <div class="ds_wrapper">
                    <p class="ds_phase-banner__content">
                    <strong class="ds_tag  ds_phase-banner__tag">
                        alpha
                    </strong>
                    <span class="ds_phase-banner__text">
                        This is a new service. Your 
                        <a>
                            <Link href="#">
                                feedback
                            </Link>
                        </a> 
                        will help us to improve it.
                    </span>
                    </p>
                </div>
            </div>
        </>
    )
}