// modules
import React from "react";

// components
import NavLine from "../../Components/Nav-line/Nav-line";

// styles
import './About-page.css';

const AboutPage = () => {
    const companyAge = new Date().getFullYear() - 1995;
    return (
        <div className="about-page">
            <NavLine
                pathArray={[{name:"О нас"}]} />
            <div className="about-page_header">
                <h1>Информация о нашей коллегии</h1>
                <div className="header-block header-block_dark" />
            </div>
            <div className="about-page_block">
                <h2>Направления работы</h2>
                <div className="header-sub-block header-block_dark" />
                <p>Адвокаты-члены нашей коллегии, оказывая квалифицированную юридическую помощь:</p>
                <ul>
                    <li>Дают консультации и справки по правовым вопросам как в устной, так и в письменной форме;</li>
                    <li>Составляют заявления, жалобы, ходатайства и другие документы правового характера;</li>
                    <li>Представляют интересы доверителя в конституционном судопроизводстве;</li>
                    <li>Участвуют в качестве представителя доверителя в гражданском или административном судопроизводстве;</li>
                    <li>Участвуют в качестве представителя или защитника доверителя в уголовном судопроизводстве и производстве по делам об административных правонарушениях;</li>
                    <li>Участвуют в качестве представителя доверителя при разбирательстве дел в третейском суде, международном коммерческом арбитраже (суде), а также иных органах разрешения конфликтов;</li>
                    <li>Представляют интересы доверителя в органах государственной власти, органах местного самоуправления, общественных объединениях и иных организациях;</li>
                    <li>Участвуют в качестве представителя доверителя в исполнительном производстве, а также представляет интересы подзащитного при исполнении уголовного наказания;</li>
                    <li>Выступают в качестве представителя доверителя в налоговых правоотношениях.</li>
                </ul>
                <p>Адвокаты вправе оказывать иную юридическую помощь, не запрещенную законом.</p>
            </div>
            <div className="about-page_block">
                <h2>Зачем нужны услуги адвоката?</h2>
                <div className="header-sub-block header-block_dark" />
                <p className="about-page_block_why-us">Юридические проблемы доставляют немало хлопот, стресса, отнимают много времени и сил. Пытаясь решить их самостоятельно, велик риск получить отрицательный результат не только на бумаге, но и потерять гораздо больше – жилье, деньги, бизнес, детей и пр. Наши адвокаты помогут Вам правильно составить документ, сделать верный акцент на, казалось бы, незначительных мелочах, которые могут оказать значительное влияние на исход Вашего дела.</p>
                <p className="about-page_block_why-us">Если Вы собираетесь открыть своё дело и при этом не заплатить лишних денег, совершить сделку на максимально выгодных для Вас условиях, например: купить квартиру, разделить имущество, дать взаймы, заключить какой-либо иной договор – заранее обратитесь к адвокату, получите юридическую консультацию и разъяснения по правовым вопросам.</p>
                <p className="about-page_block_why-us">Наши адвокаты смогут проанализировать ваши документы и дать грамотный совет не только с точки зрения юридической теории, но и сложившейся практики, применяемой в судах общей юрисдикции, экономических судах. Ведь теория зачастую сильно отличается от судебной практики, именно поэтому вам и нужен адвокат, профессиональный представитель ваших интересов в суде.</p>
                <p className="about-page_block_why-us">У адвокатов есть "суперспособность" — запрашивать документы (адвокатский запрос), даже если их не хотят отдавать. В этом случае обычный юрист может получить их только через суд.</p>
                <p className="about-page_block_why-us">Более подробно о том, для чего и кому нужен адвокат, Вы можете ознакомиться <a href="https://journal.tinkoff.ru/advocate/">в статье по ссылке</a></p>
            </div>
            <div className="about-page_block">
                <h2>Преимущества нашей коллегии</h2>
                <div className="header-sub-block header-block_dark" />
                <ul>
                    <li>Наша коллегия уже {companyAge} лет на рынке юридических услуг.</li>
                    <li>За долгую историю работы нашей коллегии, наши адвокаты были неоднократно отмечены медалями, почетными грамотами и орденами за достижения в своей профессиональной деятельности.</li>
                    <li>Наш центральный офис, а также филиалы удобно расположены и всегда находятся в пешей доступности.</li>
                    <li>Адвокат, осуществляя свою профессиональную деятельность, обязан следовать ФЗ «Об адвокатской деятельности и адвокатуре в РФ»; «Кодеку профессиональной этики адвоката». При нарушении положений вышеуказанных документов, адвокат может быть подвергнут дисциплинарному взысканию вплоть до прекращения статуса адвоката.</li>
                    <li>Все адвокаты-члены нашей коллегии строго соблюдают адвокатскую тайну. Всё сказанное Вами Вашему адвокату останется в тайне.</li>
                </ul>
            </div>
            <div className="about-page_block">
                <h2>Наши достижения</h2>
                <div className="header-sub-block header-block_dark" />
                <p>За долгую историю работы нашей коллегии адвокатов, наши специалисты были неоднократно отмечены медалями, почетными грамотами и орденами за достижения в своей профессиональной деятельности.</p>
                <div className="about-page_big-stat_wrapper">
                    <div className="about-page_big-stat_block">
                        <div className="big-stat_big-num">2</div>
                        <div className="big-stat_big-name">ордена</div>
                    </div>
                    <div className="about-page_big-stat_block">
                        <div className="big-stat_big-num">188</div>
                        <div className="big-stat_big-name">грамот</div>
                    </div>
                    <div className="about-page_big-stat_block">
                        <div className="big-stat_big-num">91</div>
                        <div className="big-stat_big-name">медаль</div>
                    </div>
                </div>
                <div className="about-page_awards_wrapper">
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Орденом "за верность адвокатскому долгу" награждены</p>
                        </div>
                        <div className="_awards-num">
                            <p>2 адвоката</p>
                        </div>
                    </div>
                </div>
                <div className="about-page_awards_wrapper">
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Медалями 1 степени "За заслуги в защите прав и свобод граждан" (золотая медаль)</p>
                        </div>
                        <div className="_awards-num">
                            <p>9 адвокатов</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Медалями 2 степени "За заслуги в защите прав и свобод граждан" (серебряная медаль)</p>
                        </div>
                        <div className="_awards-num">
                            <p>34 адвоката</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Юбилейной медалью в связи со 150-летием создания адвокатуры за вклад в развитие адвокатуры были отмечены</p>
                        </div>
                        <div className="_awards-num">
                            <p>39 адвокатов</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Медалью Министерства юстиции РФ за вклад в развитие адвокатуры</p>
                        </div>
                        <div className="_awards-num">
                            <p>1 адвокат</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Золотой медалью Международного союза (создужества) адвокатов</p>
                        </div>
                        <div className="_awards-num">
                            <p>2 адвоката</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Золотой медалью им. Ф.Н.Плевако</p>
                        </div>
                        <div className="_awards-num">
                            <p>1 адвокат</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Золотой медалью "Почетный адвокат России"</p>
                        </div>
                        <div className="_awards-num">
                            <p>2 адвоката</p>
                        </div>
                    </div>

                    <div className="_award">
                        <div className="_awards-name">
                            <p>Серебряной медалью им. Ф.Н.Плевако</p>
                        </div>
                        <div className="_awards-num">
                            <p>2 адвоката</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Медалью "Почетный адвокат Московской области"</p>
                        </div>
                        <div className="_awards-num">
                            <p>1 адвокат</p>
                        </div>
                    </div>
                </div>
                <div className="about-page_awards_wrapper">
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Почетными грамотами МКА "Защита"</p>
                        </div>
                        <div className="_awards-num">
                            <p>52 адвоката</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Почетными грамотами Адвокатской палаты г.Москвы</p>
                        </div>
                        <div className="_awards-num">
                            <p>78 адвокатов</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Почетными грамотами Федеральной палаты адвокатов РФ</p>
                        </div>
                        <div className="_awards-num">
                            <p>56 адвокатов</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Почетной грамотой Министерства юстиции РФ за достижения в области адвокатуры</p>
                        </div>
                        <div className="_awards-num">
                            <p>1 адвокат</p>
                        </div>
                    </div>
                    <div className="_award">
                        <div className="_awards-name">
                            <p>Почетной грамотой Главного управления юстиции МЮ РФ по Москве за вклад в развитие адвокатуры</p>
                        </div>
                        <div className="_awards-num">
                            <p>1 адвокат</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;