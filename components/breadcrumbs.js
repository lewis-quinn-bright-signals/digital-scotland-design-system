import Link from "next/link";

export default function Breadcrumbs() {
    return (
        <div aria-label="Breadcrumb">
            <ol class="ds_breadcrumbs">
                <li class="ds_breadcrumbs__item">
                    <a class="ds_breadcrumbs__link" href="#">
                        Home
                    </a>
                </li>
                
                <li class="ds_breadcrumbs__item">
                    <a class="ds_breadcrumbs__link" href="#">
                        Justice and the law
                    </a>
                </li>
                
                <li class="ds_breadcrumbs__item">
                    <a class="ds_breadcrumbs__link" href="#">
                        Your rights and the law
                    </a>
                </li>

                <li class="ds_breadcrumbs__item" aria-current="page">
                    Data sharing of personal information
                </li>
            </ol>
        </div>
    )
}