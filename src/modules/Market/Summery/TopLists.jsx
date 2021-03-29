import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect, useState } from 'react';
import { loadList } from '../../../api'

const TopList = () => {

    const resp = {
        finance: {
            error: null,
            result: [{
                id: "section-popular",
                name: "Most Followed",
                otherSortOptions: [{
                    sortField: "DAILY_GAIN",
                    sortOrder: null,
                    sortTitle: "Day's Gain"
                }, {
                    sortField: "CREATION_TIME",
                    sortOrder: null,
                    sortTitle: "Date Created"
                }, {
                    sortField: "UPDATED_AT",
                    sortOrder: null,
                    sortTitle: "Last Updated"
                }],

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1476297902614,
                dailyPercentGain: -0.014513824167803335,
                followerCount: 178329,
                isFollowed: false,
                name: "The Berkshire Hathaway Portfolio",
                pfId: "the_berkshire_hathaway_portfolio",
                shortDescription: "Follow this list to discover and track stocks held by Berkshire Hathaway, the holding company of Warren Buffett.",
                slug: "the-berkshire-hathaway-portfolio",
                symbolCount: 20,
                updatedAt: 1616630940852,
                userId: "X3NJ2A7VDSABUI4URBWME2PZNM"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1537827432395,
                dailyPercentGain: -1.7562102804083892,
                description: "&lt;em&gt;Background&lt;/em&gt;&lt;p&gt;Global spending on legal cannabis worldwide will hit $57 billion in a decade, according to Arcview Market Research and BDS Analytics. Driven by the legalization of recreational and medical cannabis and the increasing demand for both, legal cannabis revenue in the U.S. is projected to hit $23.4 billion by 2022. Yahoo Finance is now tracking the major players in the cannabis industry.&lt;/p&gt;&lt;em&gt;How do we pick these stocks?&lt;/em&gt;&lt;p&gt;This is a curated list, powered by Yahoo Finance’s algorithm and intelligence from our millions of users as well as the Yahoo Finance editorial team. The list covers companies in horticulture, pharmaceutical research and ancillary businesses. We will continue to add names as corporations invest and pivot into the space.&lt;/p&gt;&lt;em&gt;How are these weighted?&lt;/em&gt;&lt;p&gt;The stocks on this watchlist are weighted equally at the time they were added.&lt;/p&gt;&lt;p&gt;To learn what every company on this list is doing that involves cannabis, &lt;a href=\&quot;https://finance.yahoo.com/news/presenting-yahoo-finance-cannabis-stock-watchlist-202009074.html\&quot;&gt;read this story&lt;/a&gt;.&lt;/p&gt;",
                followerCount: 144108,
                isFollowed: false,
                name: "Cannabis Stocks",
                pfId: "420_stocks",
                shortDescription: "Follow this list to discover and track the stock of publicly traded companies with exposure to cannabis",
                slug: "420_stocks",
                symbolCount: 21,
                updatedAt: 1559138503918,
                userId: "X3NJ2A7VDSABUI4URBWME2PZNM"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1476373086635,
                dailyPercentGain: -1.8058131289050412,
                description: "&lt;em&gt;Background&lt;/em&gt;&lt;p&gt;“The Only Tech Stocks That Matter” presents a diverse look at the biggest US-traded tech companies, as well as smaller, innovative companies that recently went public. They cover areas including social media, computers, mobile phones, electric cars, mobile payments, video games, real estate, online commerce, cloud computing, online dating, online reviews, and ad tech. &lt;/p&gt;&lt;em&gt;How did we choose these stocks?&lt;/em&gt;&lt;p&gt;Each of these stocks was chosen by the Yahoo Finance editorial staff.&lt;/p&gt;&lt;em&gt;Who made these selections?&lt;/em&gt;&lt;p&gt;Yahoo Finance is the most-read business website in the US, garnering roughly 75 million unique visitors every month. The site has extensive coverage of both consumer technology and the business of tech companies.&lt;/p&gt;&lt;em&gt;How are these weighted?&lt;/em&gt;&lt;p&gt;The stocks are weighted by market capitalization as of 11 a.m. on Thursday, Sept. 29, 2016.&lt;/p&gt;",
                followerCount: 71735,
                isFollowed: false,
                name: "Tech Stocks That Move the Market",
                pfId: "the_only_tech_stocks_that_matter",
                shortDescription: "This basket lists stocks that investors interested in tech should have in their portfolios — including FANG stocks and rising stars that just had IPOs.",
                slug: "tech-stocks-that-move-the-market",
                symbolCount: 19,
                updatedAt: 1610149106639,
                userId: "X3NJ2A7VDSABUI4URBWME2PZNM"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1507576184883,
                dailyPercentGain: -6.821238746020554,

                followerCount: 59377,
                isFollowed: false,
                name: "Most Added to Watchlists",
                pfId: "most_added",
                shortDescription: "Follow this list to discover and track stocks that were added to most watchlists by Yahoo Finance Users. This list is generated daily and limited to the top 30 stocks that meet the criteria.",
                slug: "most-added",
                symbolCount: 27,
                updatedAt: 1616654520900,
                userId: "5SSSFLJVWAMDKUGZM5HLSSBNAY"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1524556250317,
                dailyPercentGain: -2.2587921286463444,

                followerCount: 45345,
                isFollowed: false,
                name: "Most Bought by Activist Hedge Funds",
                pfId: "most_bought_by_activist_hedge_funds",
                shortDescription: "Follow this list to discover and track the stocks that were bought the most by activist hedge funds in the last quarter.",
                slug: "most-bought-by-activist-hedge-funds",
                symbolCount: 26,
                updatedAt: 1616630696658,
                userId: "5SSSFLJVWAMDKUGZM5HLSSBNAY"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1523692746666,
                dailyPercentGain: -2.580082924519737,

                followerCount: 30689,
                isFollowed: false,
                name: "Most Bought by Hedge Funds",
                pfId: "most_bought_by_hedge_funds",
                shortDescription: "Follow this list to discover and track the stocks that were bought the most by hedge funds in the last quarter.",
                slug: "most-bought-by-hedge-funds",
                symbolCount: 30,
                updatedAt: 1616630696487,
                userId: "5SSSFLJVWAMDKUGZM5HLSSBNAY"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1601422006380,
                dailyPercentGain: 26.680923146887114,

                followerCount: 24063,
                isFollowed: false,
                name: "Most Active Penny Stocks",
                pfId: "most_active_penny_stocks",
                shortDescription: "Follow this list to discover and track penny stocks with the highest daily volume.",
                slug: "most-active-penny-stocks",
                symbolCount: 30,
                updatedAt: 1616653980946,
                userId: "X3NJ2A7VDSABUI4URBWME2PZNM"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1513278304242,
                dailyPercentGain: -2.3879041195197934,
                description: "&lt;em&gt;Background&lt;/em&gt;&lt;p&gt;This list tracks publicly traded, non-cryptocurrency companies that have some level of exposure to crypto, either through investments, partnerships, or side ventures. Yahoo Finance will update this list as new companies enter the crypto space.&lt;/p&gt;&lt;em&gt;How did we choose these stocks?&lt;/em&gt;&lt;p&gt;This is an editorial, curated list. Our team of reporters uses their expertise to judge which companies have gotten involved enough in crypto to merit inclusion here.&lt;/p&gt;&lt;em&gt;How are these weighted?&lt;/em&gt;&lt;p&gt;The stocks in this watchlist are weighted equally based on price at the time they were added.&lt;/p&gt;&lt;p&gt;For more on what the companies on this list are doing that involves cryptocurrency, read &lt;a href=\&quot;https://finance.yahoo.com/news/watchlist-stocks-exposure-bitcoin-195929419.html\&quot;&gt;these&lt;/a&gt; &lt;a href=\&quot;https://finance.yahoo.com/news/squares-bitcoin-bet-is-paying-off-183613329.html\&quot;&gt;three&lt;/a&gt; &lt;a href=\&quot;https://finance.yahoo.com/news/visa-has-also-quietly-warmed-to-crypto-along-with-pay-pal-and-square-200953910.html\&quot;&gt;stories&lt;/a&gt;.&lt;/p&gt;",
                followerCount: 22099,
                isFollowed: false,
                name: "Top Crypto Bets",
                pfId: "top_crypto_bets",
                shortDescription: "This list tracks public non-cryptocurrency companies that have exposure to crypto, either through investments, partnerships, or side ventures. Yahoo Finance will update this list as new companies enter the crypto space.",
                slug: "top-crypto-bets",
                symbolCount: 15,
                updatedAt: 1610651988665,
                userId: "X3NJ2A7VDSABUI4URBWME2PZNM"
            }, {

                brand: {
                    displayName: "TREA",
                    logoUrl: "https://s.yimg.com/uc/fin/img/20/02/b72e16a.png",
                    name: "trea",
                    slug: "trea",
                    url: "https://trea.com/"
                },
                createdAt: 1585140754871,
                dailyPercentGain: -5.785788272362382,
                description: "TREA analyzes over 100 million data points, interactions, relationships on company research and development activities, allowing investors to quickly gain insight without having to go through complex regulatory filings. Primary data sources include: FDA (Food and Drug Administration), NIH (National Institutes of Health), USPTO (US Patent and Trademark Office). The search parameters for generating this watchlist were (1) Above sector average Innovation Index score, (2) IP history at least 5 years (3) COVID19 (4) 2019-nCov (5) SARS-CoV-2 among others.",
                followerCount: 20363,
                isFollowed: false,
                name: "The Fight Against COVID19",
                pfId: "the_fight_against_covid19",
                shortDescription: "Follow this list to discover and track the stock of publicly traded companies with COVID-19 related treatment and healthcare plans.",
                slug: "the-fight-against-covid19",
                symbolCount: 13,
                updatedAt: 1585140754871,
                userId: "X3NJ2A7VDSABUI4URBWME2PZNM"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1524556250322,
                dailyPercentGain: -0.9286253115043734,

                followerCount: 17405,
                isFollowed: false,
                name: "Most Sold by Activist Hedge Funds",
                pfId: "most_sold_by_activist_hedge_funds",
                shortDescription: "Follow this list to discover and track the stocks that were sold the most by activist hedge funds in the last quarter.",
                slug: "most-sold-by-activist-hedge-funds",
                symbolCount: 27,
                updatedAt: 1616630940973,
                userId: "5SSSFLJVWAMDKUGZM5HLSSBNAY"
            }, {

                brand: {
                    displayName: "Yahoo Finance",
                    logoUrl: "https://s.yimg.com/dh/ap/finance/portfolio/yahoo-finance-logo-new.png",
                    name: "yahoo finance",
                    slug: "yahoo-finance",
                    url: "https://finance.yahoo.com/"
                },
                createdAt: 1477944395757,
                dailyPercentGain: -4.821446563416856,

                followerCount: 15426,
                isFollowed: false,
                name: "Crowded Tech Hedge Fund Positions",
                pfId: "crowded_tech_hedge_fund_positions",
                shortDescription: "Follow this list to discover and track tech stocks with highest percentage of hedge fund ownership.",
                slug: "crowded-tech-hedge-fund-positions",
                symbolCount: 30,
                updatedAt: 1616630696135,
                userId: "X3NJ2A7VDSABUI4URBWME2PZNM"
            }],
            selectedSortOption: {
                sortField: "FOLLOWER_COUNT",
                sortOrder: "DESC",
                sortTitle: "Most Popular"
            },
            total: 52
        }
    }



    let [stockList, setList] = useState(resp.finance.result.slice(0, 10))

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        }
    };

    function updateList() {
        loadList().then(data => { setList(data.finance.result[0].portfolios.slice(0, 10)) })
    }

    function getColor(item) {
        if (item.dailyPercentGain < 0) {
            return 'rgb(241,47,73)'
        } else {
            return 'rgb(15,166,119)'
        }
    }

    function getPercent(item) {
        if (item.dailyPercentGain == null) {
            return '0%'
        } else {
            return item.dailyPercentGain.toFixed(2) + '%'
        }
    }


    // useEffect(() => { updateList() }, [])

    return (
        <div style={{ margin: "40px 0px" }}
        >
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={false}
                // customTransition="all .5"
                transitionDuration={5000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {stockList.map((item) => {
                    return (
                        <div style={{ color: "white", background: getColor(item), margin: "10px", borderRadius: "6px", textAlign: "center", padding: "10px" }}>
                            <p style={{ color: "white", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</p>
                            {/* {item.dailyPercentGain} */}
                            {getPercent(item)}
                        </div>
                    )
                })}

            </Carousel></div>
    )

}

export default TopList