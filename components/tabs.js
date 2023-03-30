import Link from "next/link"

export default function Tabs() {
    return (
        <>
            <div class="ds_tabs" data-module="ds-tabs">
                <nav class="ds_tabs__navigation" aria-labelledby="ds_tabs__title">
                    <h2 id="ds_tabs__title" class="ds_tabs__title">
                        Contents
                    </h2>
                    <ul class="ds_tabs__list" id="tablist">
                        <li class="ds_tabs__tab">
                            <a class="ds_tabs__tab-link">
                                <Link href={"#tab1"}>
                                    Courses and funding
                                </Link>
                            </a>
                        </li>
                        <li class="ds_tabs__tab">
                            <a class="ds_tabs__tab-link">
                                <Link href={"#tab2"}>
                                    Choosing apprenticeships
                                </Link>
                            </a>
                        </li>
                        <li class="ds_tabs__tab">
                            <a class="ds_tabs__tab-link">
                                <Link href={"#tab3"}>
                                    Extra skills support
                                </Link>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="ds_tabs__content  ds_tabs__content--bordered" id="tab1">
                    <h2>
                        Search for training courses and funding
                    </h2>
                    <p>
                        A wide range of training courses for your employees are available.
                    </p>
                    <p>
                        Opportunities include distance learning, short courses and vocational training.
                    </p>
                    <p>
                        <a href="#">
                            <Link href={'#'}>
                                Visit My World of Work to search for training courses
                            </Link>
                        </a>
                        .
                    </p>
                    <p>
                        You can also 
                        <a>
                            <Link href={'#'}>
                                search for training courses, and funding towards training
                            </Link>
                        </a>
                        .
                    </p>
                </div>
                <div class="ds_tabs__content  ds_tabs__content--bordered" id="tab2">
                    <h2>
                        Choosing an apprenticeship for your business
                    </h2>
                    <p>
                        Apprenticeships can help you address skills gaps in your business. The government provides help with the cost of training an apprentice.
                    </p>
                    <p>
                        There are 3 different types of apprenticeship:
                    </p>
                    <ul>
                        <li>
                            Foundation Apprenticeships let school or college students do short-term work experience at your business as part of a qualification
                        </li>
                        <li>
                            Modern Apprenticeships let your new or current employees gain a qualification while working in a paid role at your business
                        </li>
                        <li>
                            Graduate Apprenticeships let your new or current employees gain a degree while working in a paid role at your business
                        </li>
                    </ul>
                    <p>
                        You can find more information on the 
                        <a>
                            <Link href="#">
                                apprenticeships.scot
                            </Link>
                        </a> 
                        website.
                    </p>
                </div>
                <div class="ds_tabs__content  ds_tabs__content--bordered" id="tab3">
                    <h2>
                        Extra skills support
                    </h2>
                    <p>
                        The 
                        <a>
                            <Link href="#">
                                Skills for Growth
                            </Link>
                        </a> 
                        service can offer skills advice to businesses with fewer than 250 employees.
                    </p>
                    <p>
                        Businesses of any size can get skills advice by completing a 
                        <a>
                            <Link href="#">
                                skills support request form
                            </Link>
                        </a>
                        .
                    </p>
                    <p>
                        Businesses of any size can also get skills advice by calling Skills Development Scotland on 0800 783 6000.
                    </p>
                </div>
            </div>
        </>
    )
}